from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.mail import send_mail, BadHeaderError
from django.core.exceptions import ValidationError
import json, re, os, dns.resolver

# --- Validation email domaine ---
def validate_email_domain(email):
    try:
        domain = email.split('@')[1]
        dns.resolver.resolve(domain, 'MX')
    except (IndexError, dns.resolver.NXDOMAIN, dns.resolver.NoAnswer, dns.resolver.Timeout):
        raise ValidationError("L'adresse email n'est pas valide.")


# --- Vue API contact ---
@csrf_exempt
def contact_api(request):
    if request.method == "POST":
        data = json.loads(request.body)

        nom = data.get("nom", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()
        phone = data.get("phone", "").strip()
        langue = data.get("langue", "fr")

        if not nom or not email or not message:
            return JsonResponse({"error": "❌ Champs obligatoires manquants."}, status=400)

        if len(message) < 20:
            return JsonResponse({"error": "❌ Le message doit contenir au moins 20 caractères."}, status=400)

        try:
            validate_email_domain(email)
        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=400)

    
        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=400)

        sujets = {
            "fr": f"Nouveau message de {nom}",
            "en": f"New message from {nom}",
            "de": f"Neue Nachricht von {nom}",
            "es": f"Nuevo mensaje de {nom}",
            "it": f"Nuovo messaggio da {nom}",
            "zh-hans": f"{nom} 的新消息",
            "ja": f"{nom} からの新しいメッセージ",
        }

        corps = f"Nom : {nom}\nEmail : {email}\nMessage :\n{message}"

        try:
            send_mail(
                sujets.get(langue, sujets["fr"]),
                corps,
                os.getenv("EMAIL_HOST_USER"),
                ["xr.piallu@gmail.com"],
                fail_silently=False
            )
            return JsonResponse({"status": "ok"})

        except BadHeaderError:
            return JsonResponse({"error": "En-tête invalide."}, status=400)
        except Exception as e:
            print("Erreur lors de l'envoi de l'e-mail :", e)
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Méthode non autorisée"}, status=405)
