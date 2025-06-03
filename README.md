# 🇱🇹 Lang Quest – Anglų Kalbos Mokymosi Žaidimas

**Lang Quest** – tai interaktyvus, žaismingas ir motyvuojantis žaidimas, skirtas lietuviams, norintiems patogiai ir smagiai išmokti anglų kalbos. Šis projektas ne tik padeda įsisavinti naujus žodžius ir frazes, bet ir skatina nuolatinį mokymąsi per žaidybinę patirtį.

---

## 🧠 Kodėl verta rinktis Lang Quest?

- 🧩 **Žaidybiniai elementai:** Mokymasis tampa įdomesnis ir motyvuojantis, nes žaidimas naudoja XP sistemą, lygius ir progresą, kad paskatintų tęsti mokymąsi.  
- 🇱🇹 **Lietuvių kalbos vartotojams:** Visi klausimai ir instrukcijos pritaikyti būtent lietuviakalbiams, tad žaidimas yra suprantamas ir prieinamas.  
- 📱 **Plataforma:** Lang Quest veikia tiek mobiliuosiuose įrenginiuose (iOS ir Android), tiek naršyklėje (Expo Web).  
- 🚀 **Papildomos galimybės:** Nors šiuo metu žaidimas yra paprastas ir lengvai naudojamas, jo architektūra leidžia jį plėsti ir tobulinti ateityje.

---

## ✨ Pagrindinės funkcijos

- ✅ **Žodžių testai ir klausimai:** Įvairaus formato užduotys – tiek su pasirinkimais, tiek atviri atsakymai, skirti anglų ir lietuvių kalbų mokymuisi.  
- ✅ **XP sistema ir lygiai:** Kiekvienas teisingas atsakymas duoda patirties taškų, kurie leidžia kilti lygiu aukštyn ir sekti savo pasiekimus.  
- ✅ **Progreso saugojimas:** Naudojant AsyncStorage, vartotojo pažanga išsaugoma net ir išjungus programėlę.  
- ✅ **Švarus ir intuityvus UI:** Naudojama Tailwind CSS su custom komponentais, todėl naudotojo sąsaja yra tvarkinga, moderni ir patogi.  
- ✅ **Tema pagal pasirinktį:** Galimybė rinktis šviesią arba tamsią aplikacijos temą, atsižvelgiant į vartotojo pageidavimus ar aplinkos apšvietimą.  
- ✅ **Platus žodynas:** Apima daugiau nei 1000 pagrindinių anglų kalbos žodžių, skirtų pradedantiesiems.  
- ✅ **Cross-platform palaikymas:** Veikia tiek su Expo Go aplikacija mobiliuosiuose įrenginiuose, tiek per Expo Web naršyklėje.  
- ✅ **Sunkumo lygio pasirinkimas:** Nauja funkcija leidžia pasirinkti mokymosi sudėtingumą – „Lengvas“ arba „Vidutinis“, kas dar labiau personalizuoja mokymosi patirtį.

---

## 🆕 Nauja funkcija: Sunkumo lygio pasirinkimas

Žaidėjai dabar gali pasirinkti mokymosi sunkumą, kuris lemia užduočių skaičių ir sudėtingumą. Tai suteikia daugiau kontrolės ir leidžia žaidėjui pasirinkti jam tinkamiausią tempą.

Pavyzdys, kaip tai įgyvendinta:

```tsx
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

🛠️ Naudotos technologijos
React Native (Expo): Greitas ir efektyvus kryžminės platformos mobiliosios aplikacijos kūrimas.

TypeScript: Tipų sauga ir geresnis kodo valdymas.

Expo Router: Patogi navigacija tarp ekranų.

Tailwind CSS (per nativewind): Stilinga ir lengvai pritaikoma vartotojo sąsaja.

AsyncStorage: Vartotojo duomenų išsaugojimas lokaliai.

Custom UI komponentai: Lengvai išplečiama ir palaikoma UI sistema.

Cross-platform palaikymas: iOS, Android ir Web (Expo Web).


lang-quest/
├── app/                        # Visi ekranai ir maršrutai
│   ├── _layout.tsx             # Navigacijos Stack'as
│   ├── index.tsx               # Pagrindinis ekranas
│   ├── mainPage.tsx            # Pagrindinis žaidimo skydelis
│   ├── authScreen.tsx          # Autentifikacijos ekranas
│   ├── sign-in.tsx             # Prisijungimo ekranas
│   ├── profileScreen.tsx       # Vartotojo profilis
│   ├── gameScreen.tsx          # Žaidimo ekranas
│   ├── EndedQuestion.tsx       # Atvirų klausimų komponentas
│   ├── MultipleChoiceQuestion.tsx # Klausimų su pasirinkimais komponentas
│   ├── optionsScreen.tsx       # Nustatymų ekranas
│   └── eulaScreen.tsx          # Naudojimo sąlygų ekranas
├── assets/
│   ├── data/                   # Klausimų duomenys (TypeScript)
│   │   ├── AllQuestionsData.tsx
│   │   ├── EndedQuestionData.tsx
│   │   ├── MultipleChoiceQuestions.tsx
│   │   └── oneQuestionWithOption.tsx
│   └── icon.png, splash.png    # Ikonos ir splash ekranai
├── components/                 # Pakartotinai naudojami UI komponentai
│   ├── Button.tsx
│   ├── CustomButton.tsx
│   ├── HeaderComponent.tsx
│   ├── ImageOption.tsx
│   ├── ProgressBar.tsx
│   ├── Container.tsx
│   ├── ScreenContent.tsx
│   └── SignOutButton.tsx
├── .env                       # Aplinkos kintamieji
├── app.json                   # Expo konfigūracija
├── babel.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md

🚀 Kaip paleisti projektą

1️⃣ Klonuokite repozitoriją:

git clone https://github.com/tavo-vardas/lang-quest.git
cd lang-quest

2️⃣ Įdiekite priklausomybes:

npm install

3️⃣ Paleiskite Expo serverį:

npx expo start



🧪 Testavimas
Lang Quest testuotas ir veikia:

✅ Android įrenginiuose per Expo Go aplikaciją

✅ iOS įrenginiuose per Expo Go aplikaciją

✅ Web naršyklėje (Expo Web beta versija)




📋 Klausimų duomenų struktūra
Klausimai saugomi TypeScript faile, kuriame apibrėžta QuizQuestion tipo struktūra. Yra du pagrindiniai klausimų tipai:

Klausimai su pasirinkimais (Multiple Choice)

Klausimo tekstas, pvz., „Kur yra 'Liūtas'?“

Parinkčių sąrašas, kiekvienoje yra id, tekstas (nebūtinas), paveikslėlis (URL) ir žymėjimas, ar parinktis teisinga.

Galima pažymėti kelias teisingas parinktis.

Atviri klausimai (Open-ended)

Teksto užduotis, į kurią vartotojas turi įvesti tikslų atsakymą.

Pavyzdys:
ts
Copy
Edit
{
  id: 'q3',
  type: 'MULTIPLE_CHOICE',
  text: "Kur yra 'Katė'?",
  options: [
    { id: 'option1', text: 'cat', correct: true, image: 'https://...' },
    { id: 'option2', text: 'bear', image: 'https://...' },
    // ...
  ]
}


🎮 Žaidimo eiga (GameScreen.tsx)
Valdymas:

currentQuestionIndex seka, kuris klausimas yra šiuo metu.

currentQuestion saugo aktyvų klausimą.

lives (gyvybės) pradžioje yra 5, klaidos mažina gyvybių skaičių.

Veikimo principas:

Teisingai atsakius, pereinama prie kito klausimo.

Klaidingas atsakymas sumažina gyvybių skaičių. Jei gyvybių nelieka, rodomas pralaimėjimo pranešimas ir žaidimas prasideda iš naujo.

Pasiekus paskutinį klausimą ir atsakius teisingai – rodomas laimėjimo pranešimas.

Komponentų atvaizdavimas:

Rodoma MultipleChoiceQuestion arba EndedQuestion, priklausomai nuo klausimo tipo.

Viršuje matomas progresas ir likusios gyvybės per HeaderComponent.


🏠 Pagrindinis ekranas (MainPage.tsx)
Viršus:

LangQuest pavadinimas ir logotipas su gradientiniu fonu.

Profilio piktograma, leidžianti pereiti į vartotojo profilį.

Motyvuojanti dalis:

Skatina toliau mokytis su juokingu ir draugišku tekstu.

Rodomas pažangos juosta (pvz., 69% iki kito lygio).

Mygtukas „Tęsti“, vedantis į žaidimo ekraną.

Greitosios nuorodos:

Keturi mygtukai, šiuo metu veikiantys kaip vietos rezervas ateities funkcijoms.

Teisinė informacija:

Nuoroda į Naudojimo sąlygas.

Navigacijos juosta apačioje:

Namai (piktograma Ionicons.home)

Žaisti (piktograma Ionicons.play, centre ir išryškinta)

Nustatymai (piktograma Ionicons.settings-outline)