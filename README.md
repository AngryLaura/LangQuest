# 🇱🇹 Lang Quest – Anglų Kalbos Mokymosi Žaidimas

**Lang Quest** – tai interaktyvus, žaismingas ir motyvuojantis žaidimas lietuviams, kurie nori išmokti anglų kalbos. Su šiuo žaidimu mokymasis tampa ne prievole, o nuotykiu! 🎮📚

---

## 🧠 Kodėl verta rinktis Lang Quest?

- 🧩 Žaidybiniai elementai motyvuoja mokytis nuolat  
- 🇱🇹 Sukurtas specialiai lietuviakalbiams naudotojams  
- 📱 Veikia tiek telefone, tiek naršyklėje (Expo Web)  
- 🚀 Paprastas naudoti, bet su daugybe potencialo plėstis  

---

## ✨ Funkcijos

- ✅ Žodžių testai ir klausimai (EN ↔ LT)  
- ✅ XP sistema ir lygiai  
- ✅ Progreso saugojimas (AsyncStorage)  
- ✅ Paprastas ir švarus UI  
- ✅ Šviesi ir tamsi tema (Dark/Light Mode)  
- ✅ Pradedančiųjų žodynas (1000+ žodžių)  
- ✅ Veikia su **Expo Go** (iOS, Android)  

---

## 🆕 Naujiena: Sunkumo lygio pasirinkimas

Dabar žaidėjai gali pasirinkti mokymosi sunkumą! Pridėtas **ComboBox** pasirinkimas su dviem lygiais: `Lengvas` ir `Vidutinis`. Nuo pasirinkimo priklauso klausimų kiekis ir sudėtingumas.

### Pavyzdys:

```js
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const [difficulty, setDifficulty] = useState('easy');

<Picker
  selectedValue={difficulty}
  onValueChange={(value) => setDifficulty(value)}
>
  <Picker.Item label="Lengvas" value="easy" />
  <Picker.Item label="Vidutinis" value="medium" />
</Picker>
Pagal pasirinkimą gali keistis, pvz.:

Žodžių kiekis

Klausimų atsakymų trukmė

Klaidų leidžiamas skaičius

🛠️ Naudotos technologijos
⚛️ React Native (per Expo)

📜 JavaScript (ES6+)

🗂️ AsyncStorage

🎨 Custom komponentai ir stiliai

📱 Pritaikyta mobiliesiems įrenginiams

📁 Projekto struktūra
bash
Copy
Edit
lang-quest/
├── assets/         # Vaizdai, garsai, šriftai
├── components/     # UI komponentai (Button, Card, etc.)
├── screens/        # Visi žaidimo ekranai
├── navigation/     # Navigacija tarp ekranų
├── data/           # Žodynai, klausimai (JSON)
├── utils/          # Pagalbinės funkcijos
├── App.js          # Pagrindinis įėjimo taškas
└── app.json        # Expo konfigūracija

🚀 Kaip paleisti projektą
1️⃣ Klonuok repozitoriją
bash
Copy
Edit
git clone https://github.com/tavo-vardas/lang-quest.git
cd lang-quest

npm install

npm start

expo start
Atsidarius naršyklei, nuskenuok QR kodą su Expo Go aplikacija
Arba naudok Android/iOS emuliatorių

🧪 Testavimas
✅ Android (Expo Go)
✅ iOS (Expo Go)
✅ Web naršyklė (beta)

📌 Roadmap (kas planuojama ateityje)
📢 Garsinės kortelės su tarimu (anglų native audio)

🌐 Daugiau kalbų: LT → DE, ES, FR, PL

📸 Galimybė keisti vartotojo nuotrauką

🌞 Ekrano ryškumo valdymas programėlėje

📊 Statistikos ekranas su mokymosi istorija

🏆 Leaderboard / varžybos su kitais žaidėjais

🔒 Naudotojo registracija ir sinchronizacija per debesiją

📆 Kasdieniai iššūkiai ir užduotys

🎨 Daugiau temų pasirinkimų (custom UI)

🧠 Sudėtingumo lygio nustatymas (Easy / Normal / Pro)