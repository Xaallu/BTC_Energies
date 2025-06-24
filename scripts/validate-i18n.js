// validate-i18n.js  (à placer à la racine, à côté de package.json)

import { createParser } from '@intlify/message-compiler'
import fs from 'fs'
import path from 'path'

// 1) on crée notre parser
const parser = createParser()

// 2) pointage vers le dossier de vos JSON de traductions
const localesDir = path.resolve(__dirname, './src/locales')

fs.readdirSync(localesDir).forEach(file => {
  if (!file.endsWith('.json')) return
  const fullPath = path.join(localesDir, file)
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'))

  // 3) pour chaque clé→valeur, on tente de parser la chaîne
  Object.entries(data).forEach(([key, msg]) => {
    try {
      parser.parse(msg)       // ← on utilise parser.parse
    } catch (e) {
      console.error(
        `❌ Erreur de compilation i18n dans ${file} ➔ clé "${key}": ${e.message}`
      )
    }
  })
})
