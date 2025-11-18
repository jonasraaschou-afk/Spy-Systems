# 🎨 Spy Systems Modern UI

En moderne browser extension der giver Spy Systems en komplet design-makeover. Transformer gammeldags UI til et smukt, moderne interface.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **🎨 Moderne Design** - Clean, professionelt look og feel
- **🌙 Dark Mode** - Skån dine øjne med mørkt tema
- **⚡ Hurtig Performance** - Ingen slowdown, kun bedre UX
- **🎯 Smart Styling** - Automatisk styling af alle elementer
- **⌨️ Keyboard Shortcuts** - Hurtigere navigation
- **📱 Responsivt** - Fungerer perfekt på alle skærmstørrelser
- **♿ Tilgængelighed** - WCAG 2.1 kompatibel

## 🚀 Installation

### Chrome/Edge (Developer Mode)

1. **Download extension**
   ```bash
   git clone https://github.com/jonasraaschou-afk/Spy-Systems.git
   cd Spy-Systems
   ```

2. **Åbn Chrome Extensions**
   - Gå til `chrome://extensions/`
   - Aktiver "Developer mode" i øverste højre hjørne

3. **Load extension**
   - Klik på "Load unpacked"
   - Vælg mappen med extension filerne
   - Extension er nu aktiv! ✅

### Firefox

1. **Download extension**
   ```bash
   git clone https://github.com/jonasraaschou-afk/Spy-Systems.git
   cd Spy-Systems
   ```

2. **Åbn Firefox Add-ons**
   - Gå til `about:debugging#/runtime/this-firefox`
   - Klik "Load Temporary Add-on"

3. **Vælg manifest**
   - Naviger til extension mappen
   - Vælg `manifest.json`
   - Extension er nu aktiv! ✅

## 📖 Sådan bruger du det

### Første gang

1. **Installer extensionen** (se installation guide ovenfor)
2. **Naviger til Spy Systems** i din browser
3. **Se magien ske!** 🎉 - Modern UI er automatisk aktiveret

### Indstillinger

Klik på extension ikonet for at åbne indstillinger:

- **✅ Aktiver/Deaktiver** - Tænd/sluk modern UI
- **🌙 Dark Mode** - Skift til mørkt tema
- **🎨 Farvetemaer** - Vælg mellem Indigo, Blå, Grøn, Lilla
- **🔄 Genindlæs** - Opdater siden med nye indstillinger

### Keyboard Shortcuts

- `Ctrl/Cmd + K` - Focus søgefelt
- `Escape` - Luk modals/dialogs

## 🎯 Hvad bliver ændret?

Extension'en tilføjer moderne styling til:

- ✅ **Tables** - Clean design med sortering
- ✅ **Buttons** - Moderne, interaktive knapper
- ✅ **Forms** - Forbedrede input fields og labels
- ✅ **Navigation** - Sleek header og menu
- ✅ **Cards** - Moderne containers og panels
- ✅ **Alerts** - Pænere notifications
- ✅ **Typography** - Bedre skrifttyper og spacing
- ✅ **Colors** - Moderne farvepalet
- ✅ **Shadows** - Subtile skygger for dybde

## 🛠️ Teknisk oversigt

### Struktur

```
Spy-Systems/
├── manifest.json           # Extension configuration
├── styles/
│   └── modern-overlay.css  # Moderne styling
├── scripts/
│   └── content.js          # Content script med features
├── popup/
│   ├── popup.html          # Extension popup UI
│   ├── popup.css           # Popup styling
│   └── popup.js            # Popup funktionalitet
└── icons/                  # Extension ikoner
```

### CSS Variabler

Du kan tilpasse farverne ved at ændre CSS variabler i `styles/modern-overlay.css`:

```css
:root {
  --primary-color: #4F46E5;     /* Hovedfarve */
  --secondary-color: #10B981;   /* Sekundær farve */
  --background: #F9FAFB;        /* Baggrund */
  --surface: #FFFFFF;           /* Overflader */
  --text-primary: #111827;      /* Primær tekst */
  --text-secondary: #6B7280;    /* Sekundær tekst */
}
```

## 🎨 Tilpasning

### Ændre farver

1. Åbn `styles/modern-overlay.css`
2. Rediger CSS variabler i `:root`
3. Genindlæs extension i browseren

### Tilføj custom styling

Tilføj dine egne CSS regler i `styles/modern-overlay.css`:

```css
/* Din custom styling */
.min-specifikke-klasse {
  background: #din-farve;
  /* ... */
}
```

## 🐛 Troubleshooting

### Extension virker ikke?

1. **Tjek at den er aktiveret** i `chrome://extensions/`
2. **Genindlæs extension** - Klik på reload ikonet
3. **Genindlæs siden** - Tryk F5 på Spy Systems
4. **Tjek console** - Åbn Developer Tools (F12) og se efter fejl

### Styling ser mærkeligt ud?

1. **Deaktiver andre extensions** - Andre extensions kan konflikte
2. **Ryd cache** - Tryk Ctrl+Shift+Delete
3. **Prøv dark mode** - Nogle elementer ser bedre ud i dark mode

### Dark mode virker ikke?

1. Åbn extension popup
2. Toggle dark mode switch
3. Genindlæs siden

## 📝 Changelog

### Version 1.0.0 (2024-11-18)

- 🎉 Initial release
- ✨ Moderne UI styling
- 🌙 Dark mode support
- 🎨 4 forskellige farvetemaer
- ⌨️ Keyboard shortcuts
- 📊 Smart table sorting
- ♿ Forbedret tilgængelighed

## 🤝 Bidrag

Har du forbedringsforslag eller fejl at rapportere?

1. Fork repository'et
2. Opret en ny branch (`git checkout -b feature/amazing-feature`)
3. Commit dine ændringer (`git commit -m 'Add amazing feature'`)
4. Push til branch (`git push origin feature/amazing-feature`)
5. Åbn en Pull Request

## 📄 Licens

MIT License - se [LICENSE](LICENSE) fil for detaljer.

## 🙏 Support

Har du brug for hjælp?

- 📧 Email: support@spy-systems.dk
- 🐛 Issues: [GitHub Issues](https://github.com/jonasraaschou-afk/Spy-Systems/issues)
- 📖 Docs: [Wiki](https://github.com/jonasraaschou-afk/Spy-Systems/wiki)

## ⭐ Credits

Udviklet med ❤️ for at gøre Spy Systems smuk igen.

---

**Nyd dit nye, moderne Spy Systems! 🚀**
