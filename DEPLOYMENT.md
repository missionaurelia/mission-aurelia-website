# Mission: Aurelia - Deployment Anleitung

## ✅ Status

Die Orbital/Constellation Character View ist vollständig integriert und funktionsfähig!

## 🚀 Deployment auf Vercel

### Option 1: Über Vercel Dashboard (empfohlen)

1. Gehe zu [vercel.com](https://vercel.com) und logge dich ein
2. Wähle dein Mission: Aurelia Projekt
3. Klicke auf "Deployments"
4. Klicke auf "Deploy" (oder warte auf automatisches Deployment via Git)

### Option 2: Via Vercel CLI

```bash
cd /home/ubuntu/mission_aurelia_github
vercel --prod
```

## 📦 Was wurde integriert

### Neue Dateien:
- `src/data/charactersData.js` - Charakterdaten mit Gruppierung
- `src/pages/CharactersOrbital.jsx` - Orbital/Constellation View
- `src/pages/CharactersSelector.jsx` - Auswahl-Seite (aktuell nicht verwendet)

### Geänderte Dateien:
- `src/App.jsx` - Route für `/characters` zeigt jetzt CharactersOrbital
- `vite.config.js` - Server-Konfiguration angepasst

### Charakterbilder:
- Alle 13 Charakterportraits sind bereits in `public/images/characters/`

## 🎨 Features der Orbital View

✅ **3 konzentrische Kreise:**
- Innerer Kreis (Amber): Veyra Family (June, Luna, Levin, Nicholas)
- Mittlerer Kreis (Blau): Key Figures (Dr. Anna Singh, Luisa, Elara Lysi, Kael, Ryu)
- Äußerer Kreis (Lila): AI Consciousness (Auren, Elara Nox)

✅ **Interaktivität:**
- Hover: Name + Rolle erscheint
- Click: Modal mit Portrait, Statement, Bio
- Farbcodierte Glow-Effekte

✅ **Legende** am unteren Rand

## 📝 Nächste Schritte (Content)

### 1. Bessere Charakterbilder
- Neue Portraits mit passenderen Formaten hochladen
- Pfade in `src/data/charactersData.js` aktualisieren

### 2. Statements befüllen
Aktuell Platzhalter wie `"[Luna's statement]"` - ersetzen durch:
- June: `"I want to stay here."` (bereits gesetzt)
- Luna: Ihr literarisches Statement
- Levin: Sein Statement
- etc.

### 3. Rollen verfeinern
Prüfen, ob die Rollen-Titel passen:
- June: "The Listener"
- Luna: "The Spark"
- Levin: "The Vessel"
- etc.

### 4. Bios schreiben
Kurze, poetische Charakterbeschreibungen (2-3 Sätze)

### 5. Beziehungslinien (optional)
- Verbindungslinien zwischen verwandten Charakteren
- LINK-Paare (leuchtend)
- Familienverbindungen (subtil)

## 🔧 Entwicklung

### Build testen:
```bash
cd /home/ubuntu/mission_aurelia_github
npm run build
```

### Lokaler Test (wenn Dev-Server funktioniert):
```bash
npm run dev
```

**Hinweis:** Der Vite Dev-Server hat aktuell Probleme in der Sandbox-Umgebung, aber der Build funktioniert einwandfrei!

## 📂 Projekt-Struktur

```
mission_aurelia_github/
├── src/
│   ├── data/
│   │   └── charactersData.js      # Charakterdaten
│   ├── pages/
│   │   ├── CharactersOrbital.jsx  # Orbital View
│   │   └── Characters.jsx         # Alte Version (unter /characters/old)
│   └── App.jsx                    # Routing
├── public/
│   └── images/
│       └── characters/            # 13 Charakterportraits
└── dist/                          # Build-Output (nach npm run build)
```

## ✨ Fertig!

Die Website ist bereit für Deployment. Nach dem Deployment auf Vercel ist die Orbital View unter:
`https://deine-domain.vercel.app/characters`

erreichbar! 🚀
