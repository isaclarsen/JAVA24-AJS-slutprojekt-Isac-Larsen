# Scrum Board - Slutprojekt JAVA24

Detta är mitt slutprojekt för kursen Avancerad JavaScript. Projektet består av en Scrum Board-applikation byggd i **React** med **Firebase Realtime Database** som backend.

## Funktionalitet

Användaren kan:

-  **Lägga till nya teammedlemmar** med en specifik roll (t.ex. UX, Frontend, Backend)
-  **Skapa nya uppgifter** och välja en kategori (t.ex. UX, Frontend, Backend)
-  **Uppgifter får ett timestamp** när de skapas
-  **Tilldela uppgifter med status "new"** till teammedlemmar (roller måste matcha kategori)
-  **Markera uppgifter som "in progress" → "finished"**
-  **Radera uppgifter** med status "finished"
-  **Visa alla uppgifter** sorterade i kolumner efter status: New, In Progress, Finished
-  **Filtrera och sortera uppgifter** baserat på:
  - Kategori
  - Teammedlem
  - Timestamp (nyast/äldst)
  - Titel (A–Ö, Ö–A)
-  **Ändra färgtema** (Original, Röd, Blå, Rosa)
-  **Söka efter uppgifter** via fritextsökning
-  **Visa papperskorgsikoner endast vid hover**

##  Tekniker

- **React**
- **Firebase Realtime Database**
- **Parcel bundler**
- **GitHub Pages** för deployment

## Firebase

- Projektet är byggt med firebase som databas och kräver konfigurering i "firebaseconfig.js".
1. Skapa ett FireBase projekt.
2. Skapa en realtime database
3. Kopiera konfig som firebase tilldelar dig och kopiera in den i "firebaseconfig.js"
