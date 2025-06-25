<template>
  <div>
    <!-- Bouton flottant (photo Rubie) -->
    <button
      @click="toggleChat"
      class="fixed bottom-6 right-6 z-50 rounded-full shadow-lg border border-white"
    >
      <img
        src="/Rubie_chatbot.png"
        alt="Rubie Chatbot"
        class="w-16 h-16 object-cover rounded-full"
      />
    </button>

    <!-- Fenêtre de chat -->
    <transition name="slide">
      <div
        v-if="showChat"
        class="fixed bottom-20 right-6 w-80 max-w-full bg-white rounded-lg shadow-2xl z-50 border border-gray-300 flex flex-col overflow-hidden"
      >
        <!-- En-tête -->
        <div class="bg-[#3c5a81] text-white px-4 py-2 flex justify-between items-center">
          <h3 class="font-semibold text-lg text-white">Rubie</h3>
          <button @click="toggleChat" class="text-white text-xl hover:text-red-400">×</button>
        </div>

        <!-- Corps -->
        <div class="p-4 overflow-y-auto" style="max-height: 300px;">
          <div v-if="loading" class="text-center text-gray-500 italic">Rubie réfléchit...</div>
          <div v-else-if="response" class="text-gray-800 whitespace-pre-wrap">{{ response }}</div>
          <div v-else class="text-gray-500 text-sm">Je suis Rubie, la Chief Happiness de BTC Energies <br> En quoi puis-je vous aider ?</div>
          
        </div>

        <!-- Champ de saisie -->
        <div class="p-2 border-t flex">
          <input
            v-model="question"
            @keyup.enter="askRubie"
            type="text"
            placeholder="Votre question..."
            class="flex-1 px-3 py-2 border rounded-l text-sm focus:outline-none"
          />
          <button
            @click="askRubie"
            class="bg-[#22B17A] text-white px-4 rounded-r hover:bg-[#1c9c68]"
          >
            ▶
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Contrôles
const showChat = ref(false)
const question = ref('')
const response = ref('')
const loading = ref(false)

// Récupérer la langue depuis localStorage
const langMap = {
  fr: 'FR',
  en: 'GB',
  es: 'ES',
  it: 'IT',
  de: 'DE',
  jp: 'JP',
  cn: 'CN',
}
const savedLang = localStorage.getItem('lang') || 'fr'
const language = langMap[savedLang] || 'FR'

// Fonctions
function toggleChat() {
  showChat.value = !showChat.value
  response.value = ''
  question.value = ''
}

async function askRubie() {
  if (!question.value) return
  loading.value = true
  response.value = ''

  try {
    const res = await axios.post('http://176.139.25.235:8080/generate', {
      prompt: question.value,
      language: language
    })
    response.value = res.data.response
  } catch (error) {
    console.error(error)
    response.value = "❌ Une erreur est survenue. Veuillez réessayez."
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
