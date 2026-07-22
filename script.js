"use strict";

const FORMATS = [
  { code: "d", label: "Short date" },
  { code: "D", label: "Long date" },
  { code: "t", label: "Short time" },
  { code: "T", label: "Long time" },
  { code: "f", label: "Date and time" },
  { code: "F", label: "Full date and time" },
  { code: "R", label: "Relative time" },
];

const QUICK_HOURS = [15, 16, 17, 18, 19, 20, 21, 22, 23];

const UI_LOCALES = {
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
};

const INTERFACE_TRANSLATIONS = {
  de: {
    "Staff workspace": "Staff-Arbeitsbereich",
    "Session builder": "Session-Builder",
    "Times & announcements": "Zeiten & Ankündigungen",
    "Session schedule": "Session-Zeitplan",
    "Daily announcements": "Tägliche Ankündigungen",
    "Practice scrims": "Practice Scrims",
    "First match & conclude": "Erstes Match & Abschluss",
    "Web extension": "Web-Erweiterung",
    "Staff guide": "Staff-Leitfaden",
    "Video & handbook": "Video & Handbuch",
    Configuration: "Konfiguration",
    Settings: "Einstellungen",
    "Customize workspace": "Arbeitsbereich anpassen",
    "Local time": "Lokale Zeit",
    "Made by": "Erstellt von",
    "Current workspace": "Aktueller Arbeitsbereich",
    "Session tools": "Session-Werkzeuge",
    "Set the registration time, choose a server, and prepare the Discord announcement.": "Lege die Registrierungszeit fest, wähle einen Server und bereite die Discord-Ankündigung vor.",
    "Registration opens": "Registrierung öffnet",
    "Select a date and time": "Datum und Uhrzeit wählen",
    "Set the clock": "Zeit festlegen",
    "Registration time": "Registrierungszeit",
    "Date & local time": "Datum & lokale Zeit",
    "Use now": "Jetzt verwenden",
    "Quick pick": "Schnellauswahl",
    "Today in your timezone": "Heute in deiner Zeitzone",
    "Adjust selected time": "Gewählte Zeit anpassen",
    "Quickly add or remove minutes": "Minuten schnell hinzufügen oder entfernen",
    "Choose the server": "Server wählen",
    "Session type": "Session-Typ",
    "Hold a server, then drag it to change the order. Your first server becomes the default after reload.": "Server gedrückt halten und ziehen, um die Reihenfolge zu ändern. Der erste Server ist nach dem Neuladen der Standard.",
    Personalize: "Personalisieren",
    "Host & lobby": "Host & Lobby",
    "Your Discord user ID": "Deine Discord-Benutzer-ID",
    "Additional hosts": "Weitere Hosts",
    "Add host": "Host hinzufügen",
    "Experience settings": "Einstellungen",
    "Local preferences": "Lokale Einstellungen",
    "Edit timing, reaction requirements, and announcement text for every server and mode.": "Passe Zeiten, Reaktionsziele und Ankündigungstexte für jeden Server und Modus an.",
    "Language & display": "Sprache & Anzeige",
    "Interface preferences": "Oberflächeneinstellungen",
    "Choose the interface language and clock style for this device. Discord announcement presets stay unchanged.": "Wähle Sprache und Uhrformat für dieses Gerät. Discord-Ankündigungsvorlagen bleiben unverändert.",
    "Interface language": "Oberflächensprache",
    "Translate navigation, controls, and helper text.": "Navigation, Bedienelemente und Hilfetexte übersetzen.",
    "Time display": "Zeitanzeige",
    "Use a 24-hour clock or AM/PM across the workspace.": "Im gesamten Arbeitsbereich 24-Stunden- oder AM/PM-Format verwenden.",
    "Current format": "Aktuelles Format",
    "Workspace theme": "Arbeitsbereich-Design",
    "Switch the complete workspace look without changing your presets.": "Ändere das komplette Design, ohne deine Vorlagen zu verändern.",
    "Copy confirmation": "Kopierbestätigung",
    "Show a short animated confirmation after clipboard actions.": "Nach dem Kopieren eine kurze animierte Bestätigung anzeigen.",
    "Global timing": "Globale Zeiten",
    "Additional lobby offsets": "Zusätzliche Lobby-Verschiebungen",
    "Second lobby shift": "Verschiebung zweite Lobby",
    "Third lobby shift": "Verschiebung dritte Lobby",
    "Quick time adjustments": "Schnelle Zeitanpassungen",
    "Builder layout": "Builder-Layout",
    "Session server order": "Reihenfolge der Session-Server",
    "Saves instantly": "Sofort gespeichert",
    "Staff shortcuts": "Staff-Verknüpfungen",
    "Quick links": "Schnellzugriffe",
    "Message templates": "Nachrichtenvorlagen",
    "Session requirements": "Session-Anforderungen",
    "Restore defaults": "Standards wiederherstellen",
    "Save changes": "Änderungen speichern",
    "Staff links": "Staff-Links",
    "Open quickly": "Schnell öffnen",
    "Customize links": "Links anpassen",
    "{{minutes}} min to first game": "{{minutes}} Min. bis zum ersten Spiel",
    "Opens first after reload": "Öffnet nach dem Neuladen zuerst",
    "Position {{position}}": "Position {{position}}",
    Default: "Standard",
    "Uses the same registration time": "Verwendet dieselbe Registrierungszeit",
    "Registration shifts by {{minutes}} minutes": "Registrierung verschiebt sich um {{minutes}} Minuten",
    "Berlin schedule: {{time}} / Discord: {{discord}}": "Berlin-Zeit: {{time}} / Discord: {{discord}}",
    "1 game mode": "1 Spielmodus",
    "{{count}} game modes": "{{count}} Spielmodi",
    Mode: "Modus",
    "Game delay": "Spielverzögerung",
    "1 lobby": "1 Lobby",
    "2 lobbies": "2 Lobbys",
    "Normal lobby": "Normale Lobby",
    "Second / third lobby": "Zweite / dritte Lobby",
    Duos: "Duos",
    Squads: "Squads",
    "Late night": "Late Night",
    Label: "Bezeichnung",
    "Website URL": "Website-URL",
    Remove: "Entfernen",
    "Language updated": "Sprache aktualisiert",
    "Session history": "Session-Verlauf",
    "Copied announcements can be restored or copied again.": "Kopierte Ankündigungen können wiederhergestellt oder erneut kopiert werden.",
    "Stored only on this device": "Nur auf diesem Gerät gespeichert",
    "Clear history": "Verlauf löschen",
    "Configuration backup": "Konfigurationssicherung",
    "Move settings between devices": "Einstellungen zwischen Geräten übertragen",
    "Export configuration": "Konfiguration exportieren",
    "Download a safe snapshot of the current setup.": "Eine sichere Kopie der aktuellen Einstellungen herunterladen.",
    "Download backup": "Sicherung herunterladen",
    "Import configuration": "Konfiguration importieren",
    "Review and replace this device's current setup.": "Die aktuellen Einstellungen dieses Geräts prüfen und ersetzen.",
    "Choose JSON file": "JSON-Datei auswählen",
    "Ready to export": "Bereit zum Export",
    "No copied announcements yet": "Noch keine kopierten Ankündigungen",
    "A session appears here after it is copied.": "Eine Session erscheint hier, nachdem sie kopiert wurde.",
    Restore: "Wiederherstellen",
    "Copy again": "Erneut kopieren",
    Delete: "Löschen",
  },
  fr: {
    "Staff workspace": "Espace du staff",
    "Session builder": "Créateur de session",
    "Times & announcements": "Horaires et annonces",
    "Session schedule": "Programme des sessions",
    "Daily announcements": "Annonces quotidiennes",
    "Practice scrims": "Scrims d'entraînement",
    "First match & conclude": "Premier match et clôture",
    "Web extension": "Extension web",
    "Staff guide": "Guide du staff",
    "Video & handbook": "Vidéo et manuel",
    Configuration: "Configuration",
    Settings: "Paramètres",
    "Customize workspace": "Personnaliser l'espace",
    "Local time": "Heure locale",
    "Made by": "Créé par",
    "Current workspace": "Espace actuel",
    "Session tools": "Outils de session",
    "Set the registration time, choose a server, and prepare the Discord announcement.": "Définissez l'heure d'inscription, choisissez un serveur et préparez l'annonce Discord.",
    "Registration opens": "Ouverture des inscriptions",
    "Select a date and time": "Choisir une date et une heure",
    "Set the clock": "Régler l'heure",
    "Registration time": "Heure d'inscription",
    "Date & local time": "Date et heure locale",
    "Use now": "Utiliser maintenant",
    "Quick pick": "Choix rapide",
    "Today in your timezone": "Aujourd'hui dans votre fuseau",
    "Adjust selected time": "Ajuster l'heure choisie",
    "Quickly add or remove minutes": "Ajouter ou retirer rapidement des minutes",
    "Choose the server": "Choisir le serveur",
    "Session type": "Type de session",
    "Hold a server, then drag it to change the order. Your first server becomes the default after reload.": "Maintenez un serveur puis faites-le glisser. Le premier devient le serveur par défaut après rechargement.",
    Personalize: "Personnaliser",
    "Host & lobby": "Hôte et lobby",
    "Your Discord user ID": "Votre identifiant Discord",
    "Additional hosts": "Hôtes supplémentaires",
    "Add host": "Ajouter un hôte",
    "Experience settings": "Paramètres",
    "Local preferences": "Préférences locales",
    "Edit timing, reaction requirements, and announcement text for every server and mode.": "Modifiez les horaires, réactions requises et textes pour chaque serveur et mode.",
    "Language & display": "Langue et affichage",
    "Interface preferences": "Préférences de l'interface",
    "Choose the interface language and clock style for this device. Discord announcement presets stay unchanged.": "Choisissez la langue et le format horaire. Les modèles d'annonces Discord restent inchangés.",
    "Interface language": "Langue de l'interface",
    "Translate navigation, controls, and helper text.": "Traduire la navigation, les commandes et les aides.",
    "Time display": "Format de l'heure",
    "Use a 24-hour clock or AM/PM across the workspace.": "Utiliser le format 24 h ou AM/PM dans tout l'espace.",
    "Current format": "Format actuel",
    "Workspace theme": "Thème de l'espace",
    "Switch the complete workspace look without changing your presets.": "Changez l'apparence sans modifier vos préréglages.",
    "Copy confirmation": "Confirmation de copie",
    "Show a short animated confirmation after clipboard actions.": "Afficher une brève confirmation animée après la copie.",
    "Global timing": "Horaires globaux",
    "Additional lobby offsets": "Décalages des lobbies supplémentaires",
    "Second lobby shift": "Décalage du deuxième lobby",
    "Third lobby shift": "Décalage du troisième lobby",
    "Quick time adjustments": "Ajustements rapides",
    "Builder layout": "Disposition du créateur",
    "Session server order": "Ordre des serveurs",
    "Saves instantly": "Enregistré instantanément",
    "Staff shortcuts": "Raccourcis du staff",
    "Quick links": "Liens rapides",
    "Message templates": "Modèles de messages",
    "Session requirements": "Conditions de session",
    "Restore defaults": "Restaurer les valeurs",
    "Save changes": "Enregistrer",
    "Staff links": "Liens du staff",
    "Open quickly": "Accès rapide",
    "Customize links": "Personnaliser les liens",
    "{{minutes}} min to first game": "Premier match dans {{minutes}} min",
    "Opens first after reload": "S'ouvre en premier après rechargement",
    "Position {{position}}": "Position {{position}}",
    Default: "Par défaut",
    "Uses the same registration time": "Utilise la même heure d'inscription",
    "Registration shifts by {{minutes}} minutes": "L'inscription est décalée de {{minutes}} minutes",
    "Berlin schedule: {{time}} / Discord: {{discord}}": "Horaire de Berlin : {{time}} / Discord : {{discord}}",
    "1 game mode": "1 mode de jeu",
    "{{count}} game modes": "{{count}} modes de jeu",
    Mode: "Mode",
    "Game delay": "Délai avant le match",
    "1 lobby": "1 lobby",
    "2 lobbies": "2 lobbies",
    "Normal lobby": "Lobby normal",
    "Second / third lobby": "Deuxième / troisième lobby",
    Duos: "Duos",
    Squads: "Escouades",
    "Late night": "Tard le soir",
    Label: "Libellé",
    "Website URL": "URL du site",
    Remove: "Supprimer",
    "Language updated": "Langue mise à jour",
    "Session history": "Historique des sessions",
    "Copied announcements can be restored or copied again.": "Les annonces copiées peuvent être restaurées ou recopiées.",
    "Stored only on this device": "Stocké uniquement sur cet appareil",
    "Clear history": "Effacer l'historique",
    "Configuration backup": "Sauvegarde de configuration",
    "Move settings between devices": "Transférer les paramètres entre appareils",
    "Export configuration": "Exporter la configuration",
    "Download a safe snapshot of the current setup.": "Télécharger une copie sûre de la configuration actuelle.",
    "Download backup": "Télécharger la sauvegarde",
    "Import configuration": "Importer la configuration",
    "Review and replace this device's current setup.": "Vérifier et remplacer la configuration actuelle de cet appareil.",
    "Choose JSON file": "Choisir un fichier JSON",
    "Ready to export": "Prêt à exporter",
    "No copied announcements yet": "Aucune annonce copiée",
    "A session appears here after it is copied.": "Une session apparaît ici après sa copie.",
    Restore: "Restaurer",
    "Copy again": "Copier à nouveau",
    Delete: "Supprimer",
  },
  es: {
    "Staff workspace": "Espacio del staff",
    "Session builder": "Creador de sesiones",
    "Times & announcements": "Horarios y anuncios",
    "Session schedule": "Horario de sesiones",
    "Daily announcements": "Anuncios diarios",
    "Practice scrims": "Scrims de práctica",
    "First match & conclude": "Primer partido y cierre",
    "Web extension": "Extensión web",
    "Staff guide": "Guía del staff",
    "Video & handbook": "Vídeo y manual",
    Configuration: "Configuración",
    Settings: "Ajustes",
    "Customize workspace": "Personalizar espacio",
    "Local time": "Hora local",
    "Made by": "Creado por",
    "Current workspace": "Espacio actual",
    "Session tools": "Herramientas de sesión",
    "Set the registration time, choose a server, and prepare the Discord announcement.": "Define la hora de registro, elige un servidor y prepara el anuncio de Discord.",
    "Registration opens": "Abre el registro",
    "Select a date and time": "Elige fecha y hora",
    "Set the clock": "Configurar hora",
    "Registration time": "Hora de registro",
    "Date & local time": "Fecha y hora local",
    "Use now": "Usar ahora",
    "Quick pick": "Selección rápida",
    "Today in your timezone": "Hoy en tu zona horaria",
    "Adjust selected time": "Ajustar hora seleccionada",
    "Quickly add or remove minutes": "Añade o quita minutos rápidamente",
    "Choose the server": "Elegir servidor",
    "Session type": "Tipo de sesión",
    "Hold a server, then drag it to change the order. Your first server becomes the default after reload.": "Mantén pulsado un servidor y arrástralo. El primero será el predeterminado tras recargar.",
    Personalize: "Personalizar",
    "Host & lobby": "Host y lobby",
    "Your Discord user ID": "Tu ID de usuario de Discord",
    "Additional hosts": "Hosts adicionales",
    "Add host": "Añadir host",
    "Experience settings": "Ajustes",
    "Local preferences": "Preferencias locales",
    "Edit timing, reaction requirements, and announcement text for every server and mode.": "Edita horarios, reacciones necesarias y textos para cada servidor y modo.",
    "Language & display": "Idioma y visualización",
    "Interface preferences": "Preferencias de interfaz",
    "Choose the interface language and clock style for this device. Discord announcement presets stay unchanged.": "Elige el idioma y formato de hora. Las plantillas de anuncios de Discord no cambian.",
    "Interface language": "Idioma de la interfaz",
    "Translate navigation, controls, and helper text.": "Traduce navegación, controles y textos de ayuda.",
    "Time display": "Formato de hora",
    "Use a 24-hour clock or AM/PM across the workspace.": "Usa formato de 24 horas o AM/PM en todo el espacio.",
    "Current format": "Formato actual",
    "Workspace theme": "Tema del espacio",
    "Switch the complete workspace look without changing your presets.": "Cambia el aspecto completo sin modificar tus ajustes.",
    "Copy confirmation": "Confirmación de copia",
    "Show a short animated confirmation after clipboard actions.": "Muestra una breve confirmación animada al copiar.",
    "Global timing": "Horarios globales",
    "Additional lobby offsets": "Desplazamientos de lobbies adicionales",
    "Second lobby shift": "Desplazamiento del segundo lobby",
    "Third lobby shift": "Desplazamiento del tercer lobby",
    "Quick time adjustments": "Ajustes rápidos de hora",
    "Builder layout": "Diseño del creador",
    "Session server order": "Orden de servidores",
    "Saves instantly": "Guardado al instante",
    "Staff shortcuts": "Atajos del staff",
    "Quick links": "Enlaces rápidos",
    "Message templates": "Plantillas de mensajes",
    "Session requirements": "Requisitos de sesión",
    "Restore defaults": "Restaurar valores",
    "Save changes": "Guardar cambios",
    "Staff links": "Enlaces del staff",
    "Open quickly": "Abrir rápido",
    "Customize links": "Personalizar enlaces",
    "{{minutes}} min to first game": "Primer partido en {{minutes}} min",
    "Opens first after reload": "Se abre primero al recargar",
    "Position {{position}}": "Posición {{position}}",
    Default: "Predeterminado",
    "Uses the same registration time": "Usa la misma hora de registro",
    "Registration shifts by {{minutes}} minutes": "El registro se desplaza {{minutes}} minutos",
    "Berlin schedule: {{time}} / Discord: {{discord}}": "Horario de Berlín: {{time}} / Discord: {{discord}}",
    "1 game mode": "1 modo de juego",
    "{{count}} game modes": "{{count}} modos de juego",
    Mode: "Modo",
    "Game delay": "Retraso del juego",
    "1 lobby": "1 lobby",
    "2 lobbies": "2 lobbies",
    "Normal lobby": "Lobby normal",
    "Second / third lobby": "Segundo / tercer lobby",
    Duos: "Dúos",
    Squads: "Escuadrones",
    "Late night": "Sesión nocturna",
    Label: "Etiqueta",
    "Website URL": "URL del sitio",
    Remove: "Eliminar",
    "Language updated": "Idioma actualizado",
    "Session history": "Historial de sesiones",
    "Copied announcements can be restored or copied again.": "Los anuncios copiados se pueden restaurar o volver a copiar.",
    "Stored only on this device": "Guardado solo en este dispositivo",
    "Clear history": "Borrar historial",
    "Configuration backup": "Copia de configuración",
    "Move settings between devices": "Mover ajustes entre dispositivos",
    "Export configuration": "Exportar configuración",
    "Download a safe snapshot of the current setup.": "Descarga una copia segura de la configuración actual.",
    "Download backup": "Descargar copia",
    "Import configuration": "Importar configuración",
    "Review and replace this device's current setup.": "Revisa y reemplaza la configuración actual de este dispositivo.",
    "Choose JSON file": "Elegir archivo JSON",
    "Ready to export": "Listo para exportar",
    "No copied announcements yet": "Todavía no hay anuncios copiados",
    "A session appears here after it is copied.": "Una sesión aparecerá aquí después de copiarla.",
    Restore: "Restaurar",
    "Copy again": "Copiar otra vez",
    Delete: "Eliminar",
  },
};

const DEFAULT_SCRIM_FIRST_TEMPLATE = [
  "<@&854727975550320650>",
  "",
  "<:ArrowRight:1398394460941062327> The **First Match** is @ {{scrim_time}} ~ {{scrim_relative}}!",
  "",
  "\u2022 Please read the <#854739679320473610> before playing. \uD83C\uDFC6",
].join("\n");

const DEFAULT_SCRIM_CONCLUDE_TEMPLATE = [
  "**The {{queue_name}} Scrims have __concluded__!**",
  "",
  "<:ArrowRight:1398394460941062327> Games will resume **at {{scrim_time}}** <a:heartcartoon:919242010123206666>",
  "",
  "\u2022 Make sure to invite your friends over, https://discord.gg/EU",
].join("\n");

const DIV0_LATE_NIGHT_TEMPLATE = [
  "@everyone",
  "",
  "**Noble Division 0 Practice Late Night Session ( 2 GAMES )**",
  "",
  ":ArrowRight: Registration opens {{registration}}",
  "",
  ":ArrowRight: First Game Commences @ {{first_game}}",
  "",
  "The host for this session is: {{host}}, Direct Message them for help.",
  "",
  "\u2022 Session lasts 2 Games. **Miss a single game and you will be banned.**",
  "\u2022 Make sure to read #custom-rules, #ban-offences & #how-to-play before the games.",
  "",
  "Required at least **{{first_reacts}}+ Reacts** for 1 lobby and **{{second_reacts}}+ Reacts** for a 2nd lobby (1 per duo).",
].join("\n");

const SESSION_KINDS = [
  {
    value: "solos",
    label: "Noble Solos",
    short: "Solos",
    icon: "img/noble-solos.png",
    title: "Noble Solos Practice Session",
    emoji: "<:ArrowRight:1398336238448152717>",
    channels: "<#1098721307643875390>, <#1124136360522027179> & <#1098721307643875391>",
    extra: "\u2022 Top 10 = Noble Solos Closed <:solos_closed:1403796828239040534>",
    modes: ["solos"],
  },
  {
    value: "solos_closed",
    label: "Noble Solos Closed",
    short: "Closed",
    icon: "img/noble-closedsolos.png",
    title: "Noble Solos Closed Practice Session",
    emoji: "<:ArrowRight:1403465070234701854>",
    channels: "<#1403403385146704044>, <#1403403385146704045> & <#1403403385146704043>",
    extra: "\u2022 Top 3 = Division 3 Invite <:noble_division3_icon:1403477545348759645>",
    modes: ["solos"],
  },
  {
    value: "div0",
    label: "Noble Division 0",
    short: "Div 0",
    icon: "img/noble-div0.png",
    title: "Noble Division 0 Practice Session",
    emoji: "<:ArrowRight:1398422494817419385>",
    channels: "<#1282840995846950962>, <#1282841044521717761> & <#1282841572336996372>",
    modes: ["duos", "squads", "late_night"],
  },
  {
    value: "div2",
    label: "Noble Division 2",
    short: "Div 2",
    icon: "img/noble-div2.png",
    title: "Noble Division 2 Practice Session",
    emoji: "<:arrow:1398419775574511766>",
    channels: "<#757574098359550082>, <#860622870563520513> & <#912669854543269888>",
    modes: ["duos", "squads"],
  },
  {
    value: "div3",
    label: "Noble Division 3",
    short: "Div 3",
    icon: "img/noble-div3.png",
    title: "Noble Division 3 Practice Session",
    emoji: "<:ArrowRight:1398315425913372872>",
    channels: "<#902656971801493545>, <#902656971801493547> & <#1383042801754968135>",
    modes: ["duos", "squads"],
  },
  {
    value: "247",
    label: "Noble 24/7",
    short: "24/7",
    icon: "img/noble-247.png",
    title: "Noble 24/7 Practice Session",
    emoji: "<:ArrowRight:1398422494817419385>",
    channels: "<#1282840995846950962>, <#1282841044521717761> & <#1282841572336996372>",
    modes: ["duos", "squads"],
  },
];

const DEFAULT_SESSION_ORDER = SESSION_KINDS.map((session) => session.value);

const SCHEDULE_TEMPLATE = [
  "@everyone",
  "",
  "{{header_emoji}} **{{title}} Schedule ({{date}})** {{header_emoji}}",
  "",
  "{{sessions}}",
  "",
  "More details are available in {{details}}",
  "",
  "{{footer}}",
].join("\n");

const SCHEDULE_FOOTER = "-# Please note that session times may shift depending on how earlier sessions progress.";
const SCHEDULE_SERVER_ORDER = ["div0", "div3", "div2", "solos", "247"];

const DEFAULT_STAFF_LINKS = [
  {
    id: "yunite-dashboard",
    label: "Yunite dashboard",
    url: "https://dash.yunite.xyz/",
  },
  {
    id: "noble-sessions",
    label: "Noble sessions",
    url: "https://nobleprac.com/sessions",
  },
  {
    id: "staff-tickets",
    label: "Staff tickets",
    url: "https://nobleprac.com/tickets?tab=staff",
  },
  {
    id: "znturo",
    label: "Znturo",
    url: "https://znturo.com/",
  },
];

const SCHEDULE_DEFAULTS = {
  div0: {
    label: "Division 0",
    icon: "img/noble-div0.png",
    title: "Noble Division 0",
    headerEmoji: "<:div0:1283115473822683218>",
    arrowEmoji: "<:ArrowRight:1398422494817419385>",
    details: "<#1282842243157196840>",
    footer: SCHEDULE_FOOTER,
    template: SCHEDULE_TEMPLATE,
    sessions: [
      { time: "15:00", note: "" },
      { time: "17:00", note: "" },
      { time: "19:00", note: "" },
      { time: "21:00", note: "" },
      { time: "23:00", note: "2 games" },
    ],
  },
  div3: {
    label: "Division 3",
    icon: "img/noble-div3.png",
    title: "Noble Division 3",
    headerEmoji: "<:div3:936738590753456199>",
    arrowEmoji: "<:ArrowRight:1398315425913372872>",
    details: "https://discord.com/channels/902656971113644132/902683351691968513",
    footer: SCHEDULE_FOOTER,
    template: SCHEDULE_TEMPLATE,
    sessions: [
      { time: "13:30", note: "" },
      { time: "15:30", note: "" },
      { time: "17:00", note: "" },
      { time: "22:45", note: "" },
      { time: "00:45", note: "" },
    ],
  },
  div2: {
    label: "Division 2",
    icon: "img/noble-div2.png",
    title: "Noble Division 2",
    headerEmoji: "<:div2:1022985780383195157>",
    arrowEmoji: "<:arrow:1398419775574511766>",
    details: "<#757574098984501259>",
    footer: SCHEDULE_FOOTER,
    template: SCHEDULE_TEMPLATE,
    sessions: [
      { time: "15:00", note: "" },
      { time: "17:00", note: "" },
      { time: "19:00", note: "" },
      { time: "21:00", note: "" },
      { time: "23:00", note: "2 games" },
      { time: "00:30", note: "2 games" },
    ],
  },
  solos: {
    label: "Noble Solos",
    icon: "img/noble-solos.png",
    title: "Noble Solos",
    headerEmoji: "<:noble_solos:1219996373773062155>",
    arrowEmoji: "<:ArrowRight:1398336238448152717>",
    details: "<#1098919249055072327>.",
    footer: SCHEDULE_FOOTER,
    template: SCHEDULE_TEMPLATE,
    sessions: [
      { time: "16:30", note: "" },
      { time: "22:40", note: "2 Games" },
    ],
  },
  "247": {
    label: "Noble 24/7",
    icon: "img/noble-247.png",
    title: "Noble 24/7",
    headerEmoji: "<:247:1061772154225573959>",
    arrowEmoji: "<:arrow:1398419080704299110>",
    details: "<#797443678447599646>",
    footer: SCHEDULE_FOOTER,
    template: SCHEDULE_TEMPLATE,
    sessions: [
      { time: "15:00", note: "" },
      { time: "17:00", note: "" },
      { time: "19:00", note: "" },
      { time: "21:00", note: "" },
      { time: "23:00", note: "2 games" },
    ],
  },
};

const DEFAULT_SETTINGS = {
  secondLobbyOffsetMinutes: 0,
  thirdLobbyOffsetMinutes: 0,
  quickAdjustments: [-15, 5, 10, 30],
  scrimCategories: [
    {
      id: "solos",
      label: "Solos",
      messageName: "solo",
      weekdayTime: "14:30",
      weekendTime: "13:30",
      firstTemplate: DEFAULT_SCRIM_FIRST_TEMPLATE,
      concludeTemplate: DEFAULT_SCRIM_CONCLUDE_TEMPLATE,
    },
    {
      id: "duos",
      label: "Duos",
      messageName: "duo",
      weekdayTime: "14:40",
      weekendTime: "13:40",
      firstTemplate: DEFAULT_SCRIM_FIRST_TEMPLATE,
      concludeTemplate: DEFAULT_SCRIM_CONCLUDE_TEMPLATE,
    },
    {
      id: "squads",
      label: "Squads",
      messageName: "squad",
      weekdayTime: "14:50",
      weekendTime: "13:50",
      firstTemplate: DEFAULT_SCRIM_FIRST_TEMPLATE,
      concludeTemplate: DEFAULT_SCRIM_CONCLUDE_TEMPLATE,
    },
  ],
  sessions: {
    solos: {
      modes: {
        solos: { delayMinutes: 20, firstReacts: 110, secondReacts: 200 },
      },
    },
    solos_closed: {
      modes: {
        solos: { delayMinutes: 20, firstReacts: 110, secondReacts: 200 },
      },
    },
    div0: {
      modes: {
        duos: { delayMinutes: 15, firstReacts: 55, secondReacts: 110 },
        squads: { delayMinutes: 15, firstReacts: 25, secondReacts: 50 },
        late_night: { delayMinutes: 15, firstReacts: 55, secondReacts: 110 },
      },
    },
    div2: {
      modes: {
        duos: { delayMinutes: 15, firstReacts: 55, secondReacts: 110 },
        squads: { delayMinutes: 15, firstReacts: 25, secondReacts: 50 },
      },
    },
    div3: {
      modes: {
        duos: { delayMinutes: 15, firstReacts: 55, secondReacts: 110 },
        squads: { delayMinutes: 15, firstReacts: 25, secondReacts: 50 },
      },
    },
    "247": {
      modes: {
        duos: { delayMinutes: 20, firstReacts: 55, secondReacts: 110 },
        squads: { delayMinutes: 20, firstReacts: 25, secondReacts: 50 },
      },
    },
  },
};

function createDefaultTemplate(session, mode, lobby = "primary") {
  const additionalLobby = lobby === "second" || lobby === "third";

  if (session.value === "div0" && mode === "late_night" && !additionalLobby) {
    return DIV0_LATE_NIGHT_TEMPLATE;
  }

  const lines = [
    "@everyone",
    "",
    "**{{session_title}}{{mode_suffix}}**",
    "",
  ];

  if (additionalLobby) lines.push(`**${lobby === "third" ? "Third" : "Second"} Lobby**`, "");

  lines.push(
    "{{emoji}} Registration opens @ {{registration}}",
    "",
    "{{emoji}} First Game Commences @ {{first_game}}",
    "",
    "The host for this session is: {{host}}, Direct Message them for help.",
    ""
  );

  if (!additionalLobby || session.value.startsWith("solos")) {
    lines.push(
      "\u2022 Session lasts 3 Games. **Miss a single game and you will be banned.**",
      "\u2022 Make sure to read {{channels}} before the games."
    );
    if (session.extra) lines.push("{{extra}}");
    lines.push("");
  }

  if (additionalLobby) {
    const reactionToken = session.value === "solos" || session.value === "solos_closed"
      ? "second_reacts"
      : "first_reacts";
    lines.push(`Required at least **{{${reactionToken}}+ Reacts** (1 per {{unit}}).`);
  } else {
    lines.push(
      "Required at least **{{first_reacts}}+ Reacts** for 1 lobby and **{{second_reacts}}+ Reacts** for a 2nd lobby (1 per {{unit}})."
    );
  }

  return lines.join("\n");
}

SESSION_KINDS.forEach((session) => {
  session.modes.forEach((mode) => {
    DEFAULT_SETTINGS.sessions[session.value].modes[mode].templates = {
      primary: createDefaultTemplate(session, mode, "primary"),
      second: createDefaultTemplate(session, mode, "second"),
    };
  });
});

const STORAGE = {
  discordId: "nobleDiscordId",
  recentHostIds: "nobleRecentHostIdsV1",
  announceMode: "nobleAnnounceMode",
  timestampHelper: "nobleTimestampHelper",
  lastView: "nobleLastPage",
  settings: "nobleCustomSettingsV1",
  scheduleSettings: "nobleScheduleSettingsV1",
  staffLinks: "nobleStaffLinksV1",
  sessionOrder: "nobleSessionOrderV1",
  announcementHistory: "nobleAnnouncementHistoryV1",
  language: "nobleInterfaceLanguageV1",
  timeFormat: "nobleTimeFormatV1",
  theme: "nobleWorkspaceThemeV1",
  copyAnimation: "nobleCopyAnimationV1",
  solosSecondLobbyCorrection: "nobleSolosSecondLobby200V1",
  div0DelayCorrection: "nobleDiv0Delay15V1",
  twentyFourSevenDelayCorrection: "noble247Delay20V1",
  znturoStaffLinkCorrection: "nobleZnturoStaffLinkV1",
  lobbyOffsetCorrection: "nobleLobbyOffsetsZeroV2",
};

const CREATOR_DISCORD_USER_ID = "831136990102945833";

const state = {
  unix: null,
  sessionKind: "solos",
  sessionOrder: [...DEFAULT_SESSION_ORDER],
  queueType: "duos",
  discordId: "",
  additionalHostIds: [],
  recentHostIds: [],
  additionalHostComposerOpen: false,
  announceMode: true,
  includeSecondLobby: false,
  includeThirdLobby: false,
  sessionNumber: "1",
  settings: cloneDefaults(),
  settingsDirty: false,
  templateSessionKind: "solos",
  templateMode: "solos",
  templateLobby: "primary",
  scrimQueueType: "solos",
  scrimUnix: null,
  settingsScrimCategoryId: "solos",
  activeScrimTemplateField: "firstTemplate",
  scheduleServer: "div0",
  scheduleSettingsServer: "div0",
  scheduleDate: "",
  scheduleRowsByServer: cloneScheduleRows(),
  scheduleSettings: cloneScheduleSettings(),
  scheduleActiveTab: "builder",
  staffLinks: cloneStaffLinks(),
  staffLinksOpen: false,
  language: "en",
  timeFormat: getPreferredTimeFormat(),
  theme: "staff",
  copyAnimationEnabled: true,
  announcementHistory: [],
};

let toastTimer = null;
let copyConfirmationTimer = null;
let suppressSessionClickUntil = 0;
const originalInterfaceText = new WeakMap();
let translationObserver = null;

function byId(id) {
  return document.getElementById(id);
}

function getPreferredTimeFormat() {
  try {
    const options = new Intl.DateTimeFormat([], { hour: "numeric" }).resolvedOptions();
    return options.hour12 ? "12h" : "24h";
  } catch {
    return "24h";
  }
}

function getInterfaceLocale() {
  return UI_LOCALES[state.language] || UI_LOCALES.en;
}

function tr(source, values = {}) {
  const translated = INTERFACE_TRANSLATIONS[state.language]?.[source] || source;
  return Object.entries(values).reduce(
    (result, [key, value]) => result.split(`{{${key}}}`).join(String(value)),
    translated
  );
}

function applyInterfaceLanguage(root = document.body) {
  if (!root) return;
  document.documentElement.lang = state.language;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, textarea, code, [data-no-translate]")) return;
    const source = originalInterfaceText.get(node) ?? node.nodeValue;
    if (!originalInterfaceText.has(node)) originalInterfaceText.set(node, source);
    const key = source.trim();
    if (!key) return;
    const translated = INTERFACE_TRANSLATIONS[state.language]?.[key] || key;
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });
}

function startTranslationObserver() {
  translationObserver?.disconnect();
  translationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) applyInterfaceLanguage(node.parentElement);
        else if (node.nodeType === Node.ELEMENT_NODE) applyInterfaceLanguage(node);
      });
    });
  });
  translationObserver.observe(document.body, { childList: true, subtree: true });
}

function renderLocalizationControls() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    const selected = button.dataset.language === state.language;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll("[data-time-format-label]").forEach((label) => {
    label.textContent = state.timeFormat === "12h" ? "AM/PM" : "24h";
  });
  document.querySelectorAll("[data-time-format-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(state.timeFormat === "12h"));
  });
  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    const selected = button.dataset.themeOption === state.theme;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const copyAnimationToggle = byId("copyAnimationToggle");
  if (copyAnimationToggle) copyAnimationToggle.checked = state.copyAnimationEnabled;
}

function applyWorkspaceTheme(theme, persist = true) {
  state.theme = theme === "nobleprac" ? "nobleprac" : "staff";
  document.documentElement.dataset.theme = state.theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = state.theme === "nobleprac" ? "#152530" : "#090b10";
  if (persist) {
    try {
      localStorage.setItem(STORAGE.theme, state.theme);
    } catch {
      // Browser storage is optional.
    }
  }
  renderLocalizationControls();
}

function refreshLocaleSensitiveViews() {
  renderLocalizationControls();
  renderBuilder();
  renderScrims();
  renderScheduleBuilder();
  renderScheduleSettings();
  renderAnnouncementHistory();
  const titles = {
    builder: "Session builder",
    schedule: "Session schedule",
    scrims: "Practice scrims",
    extension: "Noble web extension",
    settings: "Experience settings",
    guide: "Noble staff guide",
  };
  byId("activeViewTitle").textContent = tr(titles[getViewFromHash()] || titles.builder);
  applyInterfaceLanguage();
}

function setInterfaceLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(UI_LOCALES, language)) return;
  state.language = language;
  try {
    localStorage.setItem(STORAGE.language, state.language);
  } catch {
    // Browser storage is optional.
  }
  refreshLocaleSensitiveViews();
  showToast(tr("Language updated"));
}

function toggleTimeFormat() {
  state.timeFormat = state.timeFormat === "24h" ? "12h" : "24h";
  try {
    localStorage.setItem(STORAGE.timeFormat, state.timeFormat);
  } catch {
    // Browser storage is optional.
  }
  refreshLocaleSensitiveViews();
}

function sanitizeSessionOrder(value) {
  const valid = new Set(DEFAULT_SESSION_ORDER);
  const ordered = Array.isArray(value)
    ? value.filter((sessionId, index, items) => valid.has(sessionId) && items.indexOf(sessionId) === index)
    : [];
  DEFAULT_SESSION_ORDER.forEach((sessionId) => {
    if (!ordered.includes(sessionId)) ordered.push(sessionId);
  });
  return ordered;
}

function getOrderedSessions() {
  const sessionsById = new Map(SESSION_KINDS.map((session) => [session.value, session]));
  return state.sessionOrder.map((sessionId) => sessionsById.get(sessionId)).filter(Boolean);
}

function cloneDefaults() {
  return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
}

function cloneStaffLinks() {
  return DEFAULT_STAFF_LINKS.map((link) => ({ ...link }));
}

function cloneScheduleRows() {
  return Object.fromEntries(
    Object.entries(SCHEDULE_DEFAULTS).map(([key, preset]) => [
      key,
      preset.sessions.map((session) => ({ ...session })),
    ])
  );
}

function cloneScheduleSettings() {
  return Object.fromEntries(
    Object.entries(SCHEDULE_DEFAULTS).map(([key, preset]) => [
      key,
      {
        label: preset.label,
        icon: preset.icon,
        title: preset.title,
        headerEmoji: preset.headerEmoji,
        arrowEmoji: preset.arrowEmoji,
        details: preset.details,
        footer: preset.footer,
        template: preset.template,
      },
    ])
  );
}

function mergeScheduleSettings(saved) {
  const clean = cloneScheduleSettings();
  if (!saved || typeof saved !== "object") return clean;

  Object.keys(clean).forEach((key) => {
    const candidate = saved[key];
    if (!candidate || typeof candidate !== "object") return;
    ["title", "headerEmoji", "arrowEmoji", "details", "footer", "template"].forEach((field) => {
      if (typeof candidate[field] === "string") {
        const limit = field === "template" ? 20000 : field === "footer" ? 2000 : 500;
        clean[key][field] = candidate[field].slice(0, limit);
      }
    });
  });
  return clean;
}

function localDateString(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function clampInteger(value, fallback, minimum, maximum) {
  const number = Number.parseInt(value, 10);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(maximum, Math.max(minimum, number));
}

function sanitizeTime(value, fallback) {
  return typeof value === "string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(value) ? value : fallback;
}

function normalizeDiscordId(value) {
  const id = String(value || "").trim();
  return /^\d{15,22}$/.test(id) ? id : "";
}

function sanitizeRecentHostIds(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.map(normalizeDiscordId).filter(Boolean))].slice(0, 5);
}

function sanitizeScrimCategory(category, fallback, usedIds) {
  const safeFallback = fallback || DEFAULT_SETTINGS.scrimCategories[0];
  const rawId = typeof category?.id === "string" ? category.id.toLowerCase().replace(/[^a-z0-9_-]/g, "_") : "";
  let id = rawId.slice(0, 48) || `custom_${Date.now().toString(36)}`;
  let suffix = 2;
  while (usedIds.has(id)) {
    id = `${rawId || "custom"}_${suffix}`.slice(0, 48);
    suffix += 1;
  }
  usedIds.add(id);

  const label = typeof category?.label === "string" && category.label.trim()
    ? category.label.trim().slice(0, 32)
    : safeFallback.label;
  const messageName = typeof category?.messageName === "string" && category.messageName.trim()
    ? category.messageName.trim().slice(0, 32)
    : label.toLowerCase();

  return {
    id,
    label,
    messageName,
    weekdayTime: sanitizeTime(category?.weekdayTime, safeFallback.weekdayTime),
    weekendTime: sanitizeTime(category?.weekendTime, safeFallback.weekendTime),
    firstTemplate: typeof category?.firstTemplate === "string"
      ? category.firstTemplate.slice(0, 20000)
      : safeFallback.firstTemplate,
    concludeTemplate: typeof category?.concludeTemplate === "string"
      ? category.concludeTemplate.slice(0, 20000)
      : safeFallback.concludeTemplate,
  };
}

function dateTimeStringFromDate(date) {
  return [
    date.getFullYear(),
    "-",
    pad(date.getMonth() + 1),
    "-",
    pad(date.getDate()),
    "T",
    pad(date.getHours()),
    ":",
    pad(date.getMinutes()),
  ].join("");
}

function toUnixFromLocalInput(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return Math.floor(date.getTime() / 1000);
}

function getSession() {
  return SESSION_KINDS.find((session) => session.value === state.sessionKind) || getOrderedSessions()[0] || SESSION_KINDS[0];
}

function getMode(sessionKind = state.sessionKind) {
  const session = SESSION_KINDS.find((candidate) => candidate.value === sessionKind) || getOrderedSessions()[0] || SESSION_KINDS[0];
  if (session.modes.length === 1) return session.modes[0];
  return session.modes.includes(state.queueType) ? state.queueType : session.modes[0];
}

function getModeLabel(mode) {
  if (mode === "solos") return "Solos";
  if (mode === "squads") return "Squads";
  if (mode === "late_night") return "Late Night";
  return "Duos";
}

function isLateNightMode() {
  return state.sessionKind === "div0" && getMode() === "late_night";
}

function getLobbyVariant() {
  if (state.includeThirdLobby) return "third";
  if (state.includeSecondLobby) return "second";
  return "primary";
}

function getLobbyOffsetMinutes() {
  const lobby = getLobbyVariant();
  if (lobby === "third") return state.settings.thirdLobbyOffsetMinutes;
  if (lobby === "second") return state.settings.secondLobbyOffsetMinutes;
  return 0;
}

function getSessionSettings(sessionKind = state.sessionKind, mode = getMode(sessionKind)) {
  return state.settings.sessions[sessionKind].modes[mode];
}

function getTwentyFourSevenSessionNumber() {
  return clampInteger(state.sessionNumber, 1, 1, 9999);
}

function mergeSavedSettings(saved) {
  const merged = cloneDefaults();
  if (!saved || typeof saved !== "object") return merged;

  merged.secondLobbyOffsetMinutes = clampInteger(
    saved.secondLobbyOffsetMinutes,
    merged.secondLobbyOffsetMinutes,
    0,
    60
  );
  merged.thirdLobbyOffsetMinutes = clampInteger(
    saved.thirdLobbyOffsetMinutes,
    merged.thirdLobbyOffsetMinutes,
    0,
    60
  );

  if (Array.isArray(saved.quickAdjustments)) {
    merged.quickAdjustments = Array.from({ length: 4 }, (_, index) =>
      clampInteger(saved.quickAdjustments[index], merged.quickAdjustments[index], -180, 180)
    );
  }

  if (Array.isArray(saved.scrimCategories) && saved.scrimCategories.length) {
    const usedIds = new Set();
    merged.scrimCategories = saved.scrimCategories.slice(0, 8).map((category, index) =>
      sanitizeScrimCategory(category, DEFAULT_SETTINGS.scrimCategories[index] || DEFAULT_SETTINGS.scrimCategories[0], usedIds)
    );
  }

  SESSION_KINDS.forEach((session) => {
    session.modes.forEach((mode) => {
      const incoming = saved.sessions?.[session.value]?.modes?.[mode];
      const target = merged.sessions[session.value].modes[mode];
      if (!incoming) return;
      target.delayMinutes = clampInteger(incoming.delayMinutes, target.delayMinutes, 1, 180);
      target.firstReacts = clampInteger(incoming.firstReacts, target.firstReacts, 0, 9999);
      target.secondReacts = clampInteger(incoming.secondReacts, target.secondReacts, 0, 9999);
      if (typeof incoming.templates?.primary === "string") {
        target.templates.primary = incoming.templates.primary.slice(0, 20000);
      }
      if (typeof incoming.templates?.second === "string") {
        target.templates.second = incoming.templates.second.slice(0, 20000);
      }
    });
  });

  return merged;
}

function setTimezoneLabel() {
  const label = byId("timezoneLabel");
  if (!label) return;
  try {
    label.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone || "System";
  } catch {
    label.textContent = "System";
  }
}

function showToast(message) {
  const toast = byId("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function showCopyConfirmation(message) {
  const confirmation = byId("copyConfirmation");
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (!state.copyAnimationEnabled || !confirmation || reducedMotion) {
    showToast(message);
    return;
  }

  byId("copyConfirmationMessage").textContent = message;
  confirmation.hidden = false;
  confirmation.classList.remove("is-visible");
  void confirmation.offsetWidth;
  confirmation.classList.add("is-visible");
  window.clearTimeout(copyConfirmationTimer);
  copyConfirmationTimer = window.setTimeout(() => {
    confirmation.classList.remove("is-visible");
    window.setTimeout(() => {
      if (!confirmation.classList.contains("is-visible")) confirmation.hidden = true;
    }, 260);
  }, 1650);
}

async function copyText(text, successMessage = "Copied to clipboard") {
  if (!text) return false;
  const copyWithSelection = () => {
    const temporary = document.createElement("textarea");
    temporary.value = text;
    temporary.setAttribute("readonly", "");
    temporary.style.position = "fixed";
    temporary.style.inset = "0 auto auto -9999px";
    temporary.style.opacity = "0";
    document.body.appendChild(temporary);
    temporary.select();
    const copied = document.execCommand("copy");
    temporary.remove();
    if (!copied) throw new Error("Legacy clipboard copy was rejected");
  };

  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        copyWithSelection();
      }
    } else {
      copyWithSelection();
    }
    showCopyConfirmation(successMessage);
    return true;
  } catch (error) {
    console.error(error);
    showToast("Clipboard access was blocked");
    return false;
  }
}

function safeStaffLinkUrl(value) {
  if (typeof value !== "string") return "";
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function staffLinkHostname(value) {
  const safeUrl = safeStaffLinkUrl(value);
  if (!safeUrl) return "Add a valid web address";
  try {
    return new URL(safeUrl).hostname.replace(/^www\./, "");
  } catch {
    return "Website";
  }
}

function staffLinkIconSource(value) {
  const safeUrl = safeStaffLinkUrl(value);
  if (!safeUrl) return "";
  try {
    const hostname = new URL(safeUrl).hostname.toLowerCase().replace(/^www\./, "");
    const localIcons = {
      "dash.yunite.xyz": "img/staff-yunite.png",
      "nobleprac.com": "img/staff-noble.png",
    };
    return localIcons[hostname]
      || `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;
  } catch {
    return "";
  }
}

function sanitizeStaffLinks(saved) {
  if (!Array.isArray(saved)) return cloneStaffLinks();
  return saved.slice(0, 8).map((link, index) => ({
    id: typeof link?.id === "string" && link.id.trim()
      ? link.id.trim().replace(/[^a-z0-9_-]/gi, "-").slice(0, 48)
      : `staff-link-${index + 1}`,
    label: typeof link?.label === "string" && link.label.trim()
      ? link.label.trim().slice(0, 48)
      : `Staff link ${index + 1}`,
    url: typeof link?.url === "string" ? link.url.trim().slice(0, 500) : "",
  }));
}

function staffLinkInitial(label, index) {
  const words = String(label || "").trim().split(/\s+/).filter(Boolean);
  if (words.length > 1) return `${words[0][0]}${words[1][0]}`.toUpperCase();
  return (words[0]?.slice(0, 2) || String(index + 1)).toUpperCase();
}

function setStaffLinksOpen(open) {
  state.staffLinksOpen = Boolean(open);
  const dock = byId("staffLinksDock");
  const panel = byId("staffLinksPanel");
  const toggle = byId("toggleStaffLinks");
  if (!dock || !panel || !toggle) return;
  panel.hidden = !state.staffLinksOpen;
  dock.classList.toggle("is-open", state.staffLinksOpen);
  toggle.setAttribute("aria-expanded", String(state.staffLinksOpen));
  toggle.setAttribute("aria-label", `${state.staffLinksOpen ? "Close" : "Open"} staff quick links`);
}

function renderStaffLinksDock() {
  const list = byId("staffLinksList");
  if (!list) return;
  list.replaceChildren();

  const validLinks = state.staffLinks.filter((link) => safeStaffLinkUrl(link.url));
  validLinks.forEach((link, index) => {
    const anchor = document.createElement("a");
    anchor.className = "staff-link-card";
    anchor.href = safeStaffLinkUrl(link.url);
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    const icon = document.createElement("span");
    icon.className = "staff-link-card-icon";
    const fallback = document.createElement("span");
    fallback.textContent = staffLinkInitial(link.label, index);
    icon.append(fallback);
    const iconSource = staffLinkIconSource(link.url);
    if (iconSource) {
      const image = document.createElement("img");
      image.src = iconSource;
      image.alt = "";
      image.loading = "lazy";
      image.referrerPolicy = "no-referrer";
      image.addEventListener("load", () => icon.classList.add("has-image"));
      image.addEventListener("error", () => image.remove());
      icon.append(image);
    }

    const copy = document.createElement("span");
    copy.className = "staff-link-card-copy";
    const title = document.createElement("b");
    title.textContent = link.label;
    const host = document.createElement("small");
    host.textContent = staffLinkHostname(link.url);
    copy.append(title, host);

    const arrow = document.createElement("span");
    arrow.className = "staff-link-card-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    anchor.append(icon, copy, arrow);
    list.append(anchor);
  });

  if (!validLinks.length) {
    const empty = document.createElement("p");
    empty.className = "staff-links-empty";
    empty.textContent = tr("No valid links yet. Add one in settings.");
    list.append(empty);
  }

  const badge = byId("staffLinksBadge");
  if (badge) badge.textContent = String(validLinks.length);
}

function moveStaffLink(index, direction) {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= state.staffLinks.length) return;
  [state.staffLinks[index], state.staffLinks[nextIndex]] = [state.staffLinks[nextIndex], state.staffLinks[index]];
  markSettingsDirty();
  renderStaffLinksEditor();
  renderStaffLinksDock();
}

function removeStaffLink(index) {
  state.staffLinks.splice(index, 1);
  markSettingsDirty();
  renderStaffLinksEditor();
  renderStaffLinksDock();
}

function addStaffLink() {
  if (state.staffLinks.length >= 8) {
    showToast("You can keep up to 8 staff links");
    return;
  }
  state.staffLinks.push({
    id: `staff-link-${Date.now().toString(36)}`,
    label: "New staff link",
    url: "https://",
  });
  markSettingsDirty();
  renderStaffLinksEditor();
  renderStaffLinksDock();
  const inputs = byId("staffLinksEditor")?.querySelectorAll(".staff-link-name-input");
  inputs?.[inputs.length - 1]?.select();
}

function renderStaffLinksEditor() {
  const editor = byId("staffLinksEditor");
  if (!editor) return;
  editor.replaceChildren();

  state.staffLinks.forEach((link, index) => {
    const row = document.createElement("div");
    row.className = "staff-link-setting-row";

    const order = document.createElement("div");
    order.className = "staff-link-order";
    const up = document.createElement("button");
    up.type = "button";
    up.textContent = "↑";
    up.disabled = index === 0;
    up.setAttribute("aria-label", `Move ${link.label} up`);
    up.addEventListener("click", () => moveStaffLink(index, -1));
    const down = document.createElement("button");
    down.type = "button";
    down.textContent = "↓";
    down.disabled = index === state.staffLinks.length - 1;
    down.setAttribute("aria-label", `Move ${link.label} down`);
    down.addEventListener("click", () => moveStaffLink(index, 1));
    order.append(up, down);

    const nameLabel = document.createElement("label");
    nameLabel.className = "staff-link-setting-field";
    const nameMeta = document.createElement("span");
    nameMeta.textContent = tr("Label");
    const nameInput = document.createElement("input");
    nameInput.className = "input staff-link-name-input";
    nameInput.type = "text";
    nameInput.maxLength = 48;
    nameInput.value = link.label;
    nameInput.addEventListener("input", (event) => {
      link.label = event.target.value.slice(0, 48);
      markSettingsDirty();
      renderStaffLinksDock();
    });
    nameLabel.append(nameMeta, nameInput);

    const urlLabel = document.createElement("label");
    urlLabel.className = "staff-link-setting-field staff-link-url-field";
    const urlMeta = document.createElement("span");
    urlMeta.textContent = tr("Website URL");
    const urlInput = document.createElement("input");
    urlInput.className = "input";
    urlInput.type = "url";
    urlInput.maxLength = 500;
    urlInput.placeholder = "https://example.com/";
    urlInput.value = link.url;
    urlInput.addEventListener("input", (event) => {
      link.url = event.target.value.slice(0, 500);
      markSettingsDirty();
      renderStaffLinksDock();
    });
    urlLabel.append(urlMeta, urlInput);

    const remove = document.createElement("button");
    remove.className = "staff-link-remove";
    remove.type = "button";
    remove.textContent = tr("Remove");
    remove.setAttribute("aria-label", `Remove ${link.label}`);
    remove.addEventListener("click", () => removeStaffLink(index));

    row.append(order, nameLabel, urlLabel, remove);
    editor.append(row);
  });

  if (!state.staffLinks.length) {
    const empty = document.createElement("p");
    empty.className = "staff-link-editor-empty";
    empty.textContent = tr("No shortcuts yet. Add a link to rebuild the floating box.");
    editor.append(empty);
  }

  const count = byId("staffLinksCount");
  if (count) count.textContent = `${state.staffLinks.length} of 8 links`;
  const add = byId("addStaffLink");
  if (add) add.disabled = state.staffLinks.length >= 8;
}

function setSaveStatus(message, dirty = false) {
  const status = byId("saveStatus");
  if (status) status.textContent = message;
  const wrapper = status?.closest(".topbar-status");
  if (wrapper) wrapper.classList.toggle("is-dirty", dirty);
}

function markSettingsDirty() {
  state.settingsDirty = true;
  setSaveStatus("Unsaved settings changes", true);
  const templateState = byId("templateSaveState");
  if (templateState) templateState.textContent = "Unsaved changes";
}

function getViewFromHash() {
  const view = window.location.hash.replace(/^#/, "");
  return ["builder", "schedule", "scrims", "extension", "settings", "guide"].includes(view) ? view : "builder";
}

function setView(view, updateHash = true) {
  const validView = ["builder", "schedule", "scrims", "extension", "settings", "guide"].includes(view) ? view : "builder";
  const titles = {
    builder: "Session builder",
    schedule: "Session schedule",
    scrims: "Practice scrims",
    extension: "Noble web extension",
    settings: "Experience settings",
    guide: "Noble staff guide",
  };

  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    const active = panel.dataset.viewPanel === validView;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === validView;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });

  byId("activeViewTitle").textContent = tr(titles[validView]);

  if (validView === "schedule") {
    setScheduleTab(state.scheduleActiveTab);
  }

  if (updateHash && window.location.hash !== `#${validView}`) {
    history.pushState(null, "", `#${validView}`);
  }

  try {
    localStorage.setItem(STORAGE.lastView, validView);
  } catch {
    // Browser storage is optional.
  }

  const instantNavigation = window.matchMedia("(max-width: 980px), (prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: instantNavigation ? "auto" : "smooth" });
}

function getSchedulePreset(key = state.scheduleServer) {
  return state.scheduleSettings[key] || state.scheduleSettings.div0;
}

function scheduleDateLabel(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  return match ? `${match[3]}-${match[2]}-${match[1]}` : "-- -- ----";
}

function scheduleUnix(dateValue, timeValue) {
  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateValue || "");
  const timeMatch = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(timeValue || "");
  if (!dateMatch || !timeMatch) return null;
  const date = new Date(
    Number(dateMatch[1]),
    Number(dateMatch[2]) - 1,
    Number(dateMatch[3]),
    Number(timeMatch[1]),
    Number(timeMatch[2]),
    0,
    0
  );
  return Number.isNaN(date.getTime()) ? null : Math.floor(date.getTime() / 1000);
}

function scheduleSessionLabel(index) {
  const labels = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"];
  return labels[index] || `Session ${index + 1}`;
}

function replaceScheduleTokens(template, values) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.split(`{{${key}}}`).join(value),
    template
  );
}

function buildScheduleAnnouncement() {
  const preset = getSchedulePreset();
  const rows = state.scheduleRowsByServer[state.scheduleServer] || [];
  const sessions = rows.map((row, index) => {
    const unix = scheduleUnix(state.scheduleDate, row.time);
    const note = row.note.trim() ? ` (${row.note.trim()})` : "";
    const timestamp = unix ? `<t:${unix}:t>` : "<set a time>";
    return `${scheduleSessionLabel(index)} Session:${note}\n${preset.arrowEmoji} ${timestamp}`;
  }).join("\n\n");

  return replaceScheduleTokens(preset.template || SCHEDULE_TEMPLATE, {
    header_emoji: preset.headerEmoji,
    title: preset.title,
    date: scheduleDateLabel(state.scheduleDate),
    sessions,
    details: preset.details,
    footer: preset.footer,
  }).trim();
}

function createScheduleServerButton(key, preset, settingsMode) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "schedule-server-button";
  const activeKey = settingsMode ? state.scheduleSettingsServer : state.scheduleServer;
  button.classList.toggle("is-active", activeKey === key);
  button.setAttribute("aria-pressed", activeKey === key ? "true" : "false");

  const image = document.createElement("img");
  image.src = preset.icon;
  image.alt = "";
  const label = document.createElement("span");
  label.textContent = preset.label;
  button.append(image, label);

  button.addEventListener("click", () => {
    if (settingsMode) {
      state.scheduleSettingsServer = key;
      renderScheduleSettings();
    } else {
      state.scheduleServer = key;
      renderScheduleBuilder();
    }
  });
  return button;
}

function renderScheduleServerButtons() {
  const builderContainer = byId("scheduleServerButtons");
  const settingsContainer = byId("scheduleSettingsServerButtons");
  if (builderContainer) {
    builderContainer.replaceChildren();
    SCHEDULE_SERVER_ORDER.forEach((key) => {
      const preset = state.scheduleSettings[key];
      builderContainer.append(createScheduleServerButton(key, preset, false));
    });
  }
  if (settingsContainer) {
    settingsContainer.replaceChildren();
    SCHEDULE_SERVER_ORDER.forEach((key) => {
      const preset = state.scheduleSettings[key];
      settingsContainer.append(createScheduleServerButton(key, preset, true));
    });
  }
}

function renderScheduleSessionRows() {
  const container = byId("scheduleSessionRows");
  if (!container) return;
  container.replaceChildren();
  const rows = state.scheduleRowsByServer[state.scheduleServer];

  rows.forEach((row, index) => {
    const item = document.createElement("div");
    item.className = "schedule-session-row";

    const indexBadge = document.createElement("span");
    indexBadge.className = "schedule-session-index";
    indexBadge.textContent = String(index + 1).padStart(2, "0");

    const text = document.createElement("div");
    text.className = "schedule-session-name";
    const strong = document.createElement("strong");
    strong.textContent = `${scheduleSessionLabel(index)} session`;
    const small = document.createElement("small");
    small.textContent = "Individual start time";
    text.append(strong, small);

    const time = document.createElement("input");
    time.className = "input schedule-time-input";
    time.type = "time";
    time.step = "60";
    time.value = row.time;
    time.setAttribute("aria-label", `${scheduleSessionLabel(index)} session time`);
    time.addEventListener("input", (event) => {
      row.time = event.target.value;
      renderSchedulePreview();
    });

    const note = document.createElement("input");
    note.className = "input schedule-note-input";
    note.type = "text";
    note.maxLength = 60;
    note.placeholder = "Optional note, e.g. 2 games";
    note.value = row.note;
    note.setAttribute("aria-label", `${scheduleSessionLabel(index)} session note`);
    note.addEventListener("input", (event) => {
      row.note = event.target.value.slice(0, 60);
      renderSchedulePreview();
    });

    const remove = document.createElement("button");
    remove.className = "schedule-remove-session";
    remove.type = "button";
    remove.innerHTML = "&times;";
    remove.disabled = rows.length === 1;
    remove.setAttribute("aria-label", `Remove ${scheduleSessionLabel(index)} session`);
    remove.addEventListener("click", () => {
      rows.splice(index, 1);
      renderScheduleSessionRows();
      renderSchedulePreview();
    });

    item.append(indexBadge, text, time, note, remove);
    container.append(item);
  });
}

function renderSchedulePreview() {
  const output = byId("scheduleAnnouncementText");
  if (output) output.value = buildScheduleAnnouncement();
}

function renderScheduleBuilder() {
  renderScheduleServerButtons();
  const dateInput = byId("scheduleDate");
  if (dateInput) dateInput.value = state.scheduleDate;
  renderScheduleSessionRows();
  renderSchedulePreview();
}

function renderScheduleSettings() {
  renderScheduleServerButtons();
  const preset = getSchedulePreset(state.scheduleSettingsServer);
  byId("scheduleTitleInput").value = preset.title;
  byId("scheduleHeaderEmojiInput").value = preset.headerEmoji;
  byId("scheduleArrowEmojiInput").value = preset.arrowEmoji;
  byId("scheduleDetailsInput").value = preset.details;
  byId("scheduleFooterInput").value = preset.footer;
  byId("scheduleTemplateInput").value = preset.template;
}

function setScheduleTab(tab) {
  state.scheduleActiveTab = tab === "settings" ? "settings" : "builder";
  document.querySelectorAll("[data-schedule-tab]").forEach((button) => {
    const active = button.dataset.scheduleTab === state.scheduleActiveTab;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
  document.querySelectorAll("[data-schedule-panel]").forEach((panel) => {
    const active = panel.dataset.schedulePanel === state.scheduleActiveTab;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  if (state.scheduleActiveTab === "settings") renderScheduleSettings();
  else renderScheduleBuilder();
}

function openAppModal(id) {
  const modal = byId(id);
  if (!modal) return;
  modal.hidden = false;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close, button, a")?.focus({ preventScroll: true });
}

function closeAppModal(id) {
  const modal = byId(id);
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.hidden = true;
  if (!document.querySelector(".app-modal:not([hidden])")) document.body.classList.remove("modal-open");
}

function addScheduleSession() {
  const rows = state.scheduleRowsByServer[state.scheduleServer];
  if (rows.length >= 8) {
    showToast("A schedule can contain up to eight sessions");
    return;
  }
  const last = rows[rows.length - 1]?.time || "15:00";
  const [hour, minute] = last.split(":").map(Number);
  const nextHour = Number.isFinite(hour) ? (hour + 2) % 24 : 15;
  rows.push({ time: `${pad(nextHour)}:${pad(Number.isFinite(minute) ? minute : 0)}`, note: "" });
  renderScheduleSessionRows();
  renderSchedulePreview();
  byId("scheduleSessionRows").lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function saveScheduleSettings() {
  try {
    localStorage.setItem(STORAGE.scheduleSettings, JSON.stringify(state.scheduleSettings));
    renderScheduleBuilder();
    showToast("Schedule presets saved locally");
  } catch (error) {
    console.error(error);
    showToast("Could not save schedule presets");
  }
}

function resetSelectedSchedulePreset() {
  const key = state.scheduleSettingsServer;
  const defaults = cloneScheduleSettings();
  state.scheduleSettings[key] = defaults[key];
  renderScheduleSettings();
  renderSchedulePreview();
  showToast(`${defaults[key].label} preset restored`);
}

function renderQuickTimes() {
  const container = byId("utcButtons");
  container.replaceChildren();
  const selected = state.unix === null ? null : new Date(state.unix * 1000);
  const today = new Date();

  QUICK_HOURS.forEach((hour) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-time";
    const quickDate = new Date();
    quickDate.setHours(hour, 0, 0, 0);
    button.textContent = formatClock(Math.floor(quickDate.getTime() / 1000));

    if (
      selected &&
      selected.toDateString() === today.toDateString() &&
      selected.getHours() === hour &&
      selected.getMinutes() === 0
    ) {
      button.classList.add("is-selected");
    }

    button.addEventListener("click", () => {
      const date = new Date();
      date.setHours(hour, 0, 0, 0);
      state.unix = Math.floor(date.getTime() / 1000);
      byId("datetime").value = dateTimeStringFromDate(date);
      renderBuilder();
    });

    container.appendChild(button);
  });
}

function renderMinuteAdjustButtons() {
  const container = byId("minuteAdjustButtons");
  container.replaceChildren();

  state.settings.quickAdjustments.forEach((minutes) => {
    if (!minutes) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "minute-adjust-button";
    const sign = minutes > 0 ? "+" : "\u2212";
    button.textContent = `${sign}${Math.abs(minutes)} min`;
    button.setAttribute("aria-label", `${minutes > 0 ? "Add" : "Remove"} ${Math.abs(minutes)} minutes`);
    button.addEventListener("click", () => {
      const baseUnix = state.unix ?? Math.floor(Date.now() / 1000);
      state.unix = baseUnix + minutes * 60;
      byId("datetime").value = dateTimeStringFromDate(new Date(state.unix * 1000));
      renderBuilder();
    });
    container.appendChild(button);
  });
}

function saveSessionOrder() {
  state.sessionOrder = sanitizeSessionOrder(state.sessionOrder);
  try {
    localStorage.setItem(STORAGE.sessionOrder, JSON.stringify(state.sessionOrder));
    return true;
  } catch (error) {
    console.warn("Session order could not be saved", error);
    return false;
  }
}

function applySessionOrder(order, announce = true) {
  state.sessionOrder = sanitizeSessionOrder(order);
  const saved = saveSessionOrder();
  renderSessionCards();
  renderSessionOrderEditor();
  renderSettingsEditor();
  renderTemplateEditor();
  if (announce) showToast(saved ? "Session order saved" : "Order changed for this visit");
}

function moveSessionOrder(sessionId, direction) {
  const order = [...state.sessionOrder];
  const index = order.indexOf(sessionId);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= order.length) return;
  [order[index], order[nextIndex]] = [order[nextIndex], order[index]];
  applySessionOrder(order);
}

function renderSessionOrderEditor() {
  const editor = byId("sessionOrderEditor");
  if (!editor) return;
  editor.replaceChildren();
  editor.setAttribute("role", "list");

  getOrderedSessions().forEach((session, index, sessions) => {
    const item = document.createElement("div");
    item.className = "session-order-item";
    item.dataset.sessionId = session.value;
    item.setAttribute("role", "listitem");
    item.setAttribute("aria-label", `${session.label}, position ${index + 1} of ${sessions.length}`);

    const image = document.createElement("img");
    image.src = session.icon;
    image.alt = "";

    const copy = document.createElement("span");
    copy.className = "session-order-copy";
    const name = document.createElement("b");
    name.textContent = session.label;
    const meta = document.createElement("small");
    meta.textContent = index === 0
      ? tr("Opens first after reload")
      : tr("Position {{position}}", { position: index + 1 });
    copy.append(name, meta);

    const defaultBadge = document.createElement("span");
    defaultBadge.className = "session-default-badge";
    defaultBadge.textContent = tr("Default");
    defaultBadge.hidden = index !== 0;

    const actions = document.createElement("span");
    actions.className = "session-order-actions";
    const moveUp = document.createElement("button");
    moveUp.type = "button";
    moveUp.dataset.orderAction = "up";
    moveUp.dataset.sessionId = session.value;
    moveUp.setAttribute("aria-label", `Move ${session.label} earlier`);
    moveUp.textContent = "\u2191";
    moveUp.disabled = index === 0;
    const moveDown = document.createElement("button");
    moveDown.type = "button";
    moveDown.dataset.orderAction = "down";
    moveDown.dataset.sessionId = session.value;
    moveDown.setAttribute("aria-label", `Move ${session.label} later`);
    moveDown.textContent = "\u2193";
    moveDown.disabled = index === sessions.length - 1;
    actions.append(moveUp, moveDown);

    item.append(image, copy, defaultBadge, actions);
    editor.appendChild(item);
  });
}

function installLongPressReorder(container, itemSelector, onCommit) {
  if (!container) return;
  let interaction = null;

  const removeWindowListeners = () => {
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerEnd);
    window.removeEventListener("pointercancel", onPointerEnd);
  };

  const updateGhostPosition = (clientX, clientY) => {
    if (!interaction?.ghost) return;
    interaction.ghost.style.setProperty("--drag-x", `${clientX - interaction.offsetX}px`);
    interaction.ghost.style.setProperty("--drag-y", `${clientY - interaction.offsetY}px`);
  };

  const queueGhostPosition = () => {
    if (!interaction?.ghost || interaction.frameId) return;
    interaction.frameId = window.requestAnimationFrame(() => {
      if (!interaction) return;
      interaction.frameId = 0;
      updateGhostPosition(interaction.latestX, interaction.latestY);
    });
  };

  const activate = () => {
    if (!interaction || interaction.active) return;
    const rect = interaction.source.getBoundingClientRect();
    const ghost = interaction.source.cloneNode(true);
    ghost.removeAttribute("id");
    ghost.removeAttribute("aria-pressed");
    ghost.classList.remove("is-selected", "is-drag-source");
    ghost.classList.add("session-drag-ghost");
    ghost.style.width = `${rect.width}px`;
    ghost.style.height = `${rect.height}px`;
    ghost.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
      button.tabIndex = -1;
    });
    document.body.appendChild(ghost);

    interaction.active = true;
    interaction.ghost = ghost;
    interaction.offsetX = interaction.latestX - rect.left;
    interaction.offsetY = interaction.latestY - rect.top;
    interaction.source.classList.add("is-drag-source");
    container.classList.add("is-reordering");
    document.body.classList.add("is-session-reordering");
    updateGhostPosition(interaction.latestX, interaction.latestY);
    if (navigator.vibrate) navigator.vibrate(24);
  };

  function onPointerMove(event) {
    if (!interaction || event.pointerId !== interaction.pointerId) return;
    interaction.latestX = event.clientX;
    interaction.latestY = event.clientY;

    if (!interaction.active) {
      const distance = Math.hypot(event.clientX - interaction.startX, event.clientY - interaction.startY);
      if (distance > 10) {
        window.clearTimeout(interaction.timer);
        interaction.timer = null;
      }
      return;
    }

    event.preventDefault();
    queueGhostPosition();
    const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(itemSelector);
    if (!target || target === interaction.source || target.parentElement !== container) {
      interaction.lastTarget = null;
      return;
    }
    if (target === interaction.lastTarget) return;
    interaction.lastTarget = target;

    const items = [...container.querySelectorAll(itemSelector)];
    const startRects = new Map(items.map((item) => [item, item.getBoundingClientRect()]));
    const sourceIndex = items.indexOf(interaction.source);
    const targetIndex = items.indexOf(target);
    if (sourceIndex < targetIndex) target.after(interaction.source);
    else target.before(interaction.source);

    items.forEach((item) => {
      if (item === interaction.source || !item.animate) return;
      const start = startRects.get(item);
      const end = item.getBoundingClientRect();
      const x = start.left - end.left;
      const y = start.top - end.top;
      if (!x && !y) return;
      item.getAnimations?.().forEach((animation) => animation.cancel());
      item.animate(
        [{ transform: `translate3d(${x}px, ${y}px, 0)` }, { transform: "translate3d(0, 0, 0)" }],
        { duration: 210, easing: "cubic-bezier(.22,.75,.18,1)" }
      );
    });
  }

  function onPointerEnd(event) {
    if (!interaction || event.pointerId !== interaction.pointerId) return;
    window.clearTimeout(interaction.timer);
    if (interaction.frameId) window.cancelAnimationFrame(interaction.frameId);
    removeWindowListeners();

    if (interaction.active) {
      event.preventDefault();
      const order = [...container.querySelectorAll(itemSelector)].map((item) => item.dataset.sessionId);
      interaction.source.classList.remove("is-drag-source");
      interaction.ghost?.remove();
      container.classList.remove("is-reordering");
      document.body.classList.remove("is-session-reordering");
      suppressSessionClickUntil = Date.now() + 500;
      onCommit(order);
    }
    interaction = null;
  }

  container.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    if (event.target.closest("[data-order-action]")) return;
    const source = event.target.closest(itemSelector);
    if (!source || source.parentElement !== container) return;

    interaction = {
      active: false,
      ghost: null,
      frameId: 0,
      lastTarget: null,
      latestX: event.clientX,
      latestY: event.clientY,
      offsetX: 0,
      offsetY: 0,
      pointerId: event.pointerId,
      source,
      startX: event.clientX,
      startY: event.clientY,
      timer: null,
    };
    interaction.timer = window.setTimeout(activate, 420);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerEnd, { passive: false });
    window.addEventListener("pointercancel", onPointerEnd, { passive: false });
  });

  container.addEventListener("contextmenu", (event) => {
    if (interaction?.active && event.target.closest(itemSelector)) event.preventDefault();
  });
}

function renderSessionCards() {
  const container = byId("sessionCards");
  container.replaceChildren();

  getOrderedSessions().forEach((session) => {
    const mode = session.modes[0];
    const config = getSessionSettings(session.value, mode);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "session-card";
    button.dataset.sessionId = session.value;
    button.setAttribute("aria-pressed", String(state.sessionKind === session.value));
    if (state.sessionKind === session.value) button.classList.add("is-selected");

    const image = document.createElement("img");
    image.src = session.icon;
    image.alt = "";

    const copy = document.createElement("span");
    copy.className = "session-card-copy";
    const name = document.createElement("b");
    name.textContent = session.label;
    const meta = document.createElement("small");
    meta.textContent = tr("{{minutes}} min to first game", { minutes: config.delayMinutes });
    copy.append(name, meta);
    button.append(image, copy);

    button.addEventListener("click", () => {
      if (Date.now() < suppressSessionClickUntil) return;
      if (state.sessionKind !== session.value) {
        state.additionalHostIds = [];
        state.additionalHostComposerOpen = false;
        byId("additionalHostId").value = "";
      }
      state.sessionKind = session.value;
      renderBuilder();
    });

    container.appendChild(button);
  });
}

function renderSessionNumberField() {
  const field = byId("sessionNumberCard");
  const input = byId("sessionNumberInput");
  field.hidden = state.sessionKind !== "247";
  input.value = state.sessionNumber;
}

function saveRecentHostIds() {
  try {
    localStorage.setItem(STORAGE.recentHostIds, JSON.stringify(state.recentHostIds));
  } catch {
    // Browser storage is optional.
  }
}

function addAdditionalHost(value) {
  const id = normalizeDiscordId(value);
  if (!id) {
    showToast("Enter a valid numeric Discord user ID");
    return;
  }
  if (id === state.discordId.trim() || state.additionalHostIds.includes(id)) {
    showToast("This host is already included");
    return;
  }
  if (state.additionalHostIds.length >= 4) {
    showToast("You can add up to four additional hosts");
    return;
  }

  state.additionalHostIds.push(id);
  state.recentHostIds = [id, ...state.recentHostIds.filter((recentId) => recentId !== id)].slice(0, 5);
  byId("additionalHostId").value = "";
  saveRecentHostIds();
  renderAdditionalHosts();
  renderAnnouncement();
}

function removeAdditionalHost(id) {
  state.additionalHostIds = state.additionalHostIds.filter((hostId) => hostId !== id);
  renderAdditionalHosts();
  renderAnnouncement();
}

function renderAdditionalHosts() {
  const chips = byId("additionalHostChips");
  const composer = byId("additionalHostComposer");
  const toggle = byId("toggleAdditionalHost");
  const recent = byId("recentHosts");
  const recentButtons = byId("recentHostButtons");

  chips.replaceChildren();
  state.additionalHostIds.forEach((id) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "additional-host-chip";
    button.setAttribute("aria-label", `Remove additional host ${id}`);
    button.innerHTML = `<span>&lt;@${id}&gt;</span><span aria-hidden="true">&times;</span>`;
    button.addEventListener("click", () => removeAdditionalHost(id));
    chips.appendChild(button);
  });
  chips.hidden = state.additionalHostIds.length === 0;

  composer.hidden = !state.additionalHostComposerOpen;
  toggle.setAttribute("aria-expanded", String(state.additionalHostComposerOpen));
  toggle.classList.toggle("is-open", state.additionalHostComposerOpen);

  recentButtons.replaceChildren();
  state.recentHostIds.forEach((id) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recent-host-button";
    button.textContent = `<@${id}>`;
    button.addEventListener("click", () => addAdditionalHost(id));
    recentButtons.appendChild(button);
  });
  recent.hidden = state.recentHostIds.length === 0;
}

function renderQueueButtons() {
  const block = byId("queueTypeBlock");
  const container = byId("queueButtons");
  const session = getSession();
  const singleMode = session.modes.length === 1;
  const selectedMode = getMode();
  block.hidden = singleMode;
  container.replaceChildren();

  if (singleMode) return;

  session.modes.map((value) => ({ value, label: getModeLabel(value) })).forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment-button";
    if (mode.value === "late_night") button.classList.add("is-late-night");
    button.textContent = mode.label;
    button.setAttribute("aria-pressed", String(selectedMode === mode.value));
    if (selectedMode === mode.value) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      state.queueType = mode.value;
      renderBuilder();
    });
    container.appendChild(button);
  });
}

function formatLobbyOffsetHint(minutes) {
  return minutes === 0
    ? tr("Uses the same registration time")
    : tr("Registration shifts by {{minutes}} minutes", { minutes });
}

function renderLobbyControls() {
  byId("secondLobby").checked = state.includeSecondLobby;
  byId("thirdLobby").checked = state.includeThirdLobby;
  byId("secondLobbyHint").textContent = formatLobbyOffsetHint(state.settings.secondLobbyOffsetMinutes);
  byId("thirdLobbyHint").textContent = formatLobbyOffsetHint(state.settings.thirdLobbyOffsetMinutes);
}

function formatClock(unix) {
  if (unix === null) return "--:--";
  return new Intl.DateTimeFormat(getInterfaceLocale(), {
    hour: "2-digit",
    minute: "2-digit",
    hour12: state.timeFormat === "12h",
  }).format(new Date(unix * 1000));
}

function formatHeroDate(unix) {
  if (unix === null) return tr("Select a date and time");
  return new Intl.DateTimeFormat(getInterfaceLocale(), {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(unix * 1000));
}

function renderTimeline() {
  const config = getSessionSettings();
  const lobby = getLobbyVariant();
  const offset = getLobbyOffsetMinutes();
  const registrationUnix = state.unix === null ? null : state.unix + offset * 60;
  const firstGameUnix = registrationUnix === null ? null : registrationUnix + config.delayMinutes * 60;

  byId("timelineRegistration").textContent = formatClock(registrationUnix);
  byId("timelineGame").textContent = formatClock(firstGameUnix);
  byId("timelineDelay").textContent = `+${config.delayMinutes} min`;
  byId("heroTime").textContent = formatClock(registrationUnix);
  byId("heroDate").textContent = formatHeroDate(registrationUnix);
  const summary = lobby !== "primary"
    ? `${state.sessionKind === "solos" || state.sessionKind === "solos_closed" ? config.secondReacts : config.firstReacts}+ required for this lobby`
    : `${config.firstReacts}+ for 1 lobby / ${config.secondReacts}+ for 2`;
  byId("reactTargetSummary").textContent = summary;
}

function buildPreview(unix, format) {
  const date = new Date(unix * 1000);
  if (format === "R") {
    const diffSeconds = Math.round((date.getTime() - Date.now()) / 1000);
    const absolute = Math.abs(diffSeconds);
    const units = [
      { name: "year", seconds: 31536000 },
      { name: "month", seconds: 2592000 },
      { name: "day", seconds: 86400 },
      { name: "hour", seconds: 3600 },
      { name: "minute", seconds: 60 },
      { name: "second", seconds: 1 },
    ];
    const unit = units.find((candidate) => absolute >= candidate.seconds) || units.at(-1);
    const value = Math.max(1, Math.round(absolute / unit.seconds));
    const label = `${value} ${unit.name}${value === 1 ? "" : "s"}`;
    return diffSeconds >= 0 ? `in ${label}` : `${label} ago`;
  }

  const options = {
    d: { dateStyle: "short" },
    D: { dateStyle: "full" },
    t: { timeStyle: "short" },
    T: { timeStyle: "medium" },
    f: { dateStyle: "medium", timeStyle: "short" },
    F: { dateStyle: "full", timeStyle: "short" },
  };
  return new Intl.DateTimeFormat(undefined, options[format] || options.f).format(date);
}

function renderFormatTable() {
  const body = byId("formatRows");
  body.replaceChildren();
  if (state.unix === null) return;

  [...FORMATS, { code: "unix", label: "Raw timestamp" }].forEach((format) => {
    const row = document.createElement("tr");
    const formatCell = document.createElement("td");
    const formatLabel = document.createElement("span");
    formatLabel.className = "timestamp-format";
    const code = document.createElement("code");
    code.textContent = format.code;
    const label = document.createElement("span");
    label.textContent = format.label;
    formatLabel.append(code, label);
    formatCell.appendChild(formatLabel);

    const syntaxCell = document.createElement("td");
    const copyField = document.createElement("div");
    copyField.className = "copy-field";
    const input = document.createElement("input");
    input.type = "text";
    input.readOnly = true;
    input.className = "syntax-input";
    const snippet =
      format.code === "unix"
        ? String(state.unix)
        : format.code === "f"
          ? `<t:${state.unix}>`
          : `<t:${state.unix}:${format.code}>`;
    input.value = snippet;
    input.addEventListener("focus", () => input.select());
    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "mini-copy";
    copyButton.textContent = "Copy";
    copyButton.addEventListener("click", () => copyText(snippet, `${format.label} copied`));
    copyField.append(input, copyButton);
    syntaxCell.appendChild(copyField);

    const previewCell = document.createElement("td");
    previewCell.textContent = format.code === "unix" ? String(state.unix) : buildPreview(state.unix, format.code);
    row.append(formatCell, syntaxCell, previewCell);
    body.appendChild(row);
  });
}

function buildAnnouncementText() {
  if (!state.announceMode || state.unix === null) return "";

  const session = getSession();
  const mode = getMode();
  const config = getSessionSettings();
  const templateKey = getLobbyVariant();
  const offset = getLobbyOffsetMinutes();
  const registrationUnix = state.unix + offset * 60;
  const firstGameUnix = registrationUnix + config.delayMinutes * 60;
  const queueSuffix = mode === "squads" ? " (Squads)" : "";
  const hostIds = [...new Set([state.discordId.trim(), ...state.additionalHostIds].filter(Boolean))];
  const host = hostIds.length ? hostIds.map((id) => `<@${id}>`).join(" & ") : "<@USER>";
  const unit = mode === "squads" ? "squad" : mode === "duos" || mode === "late_night" ? "duo" : "player";
  const templateSource = templateKey === "third" ? "second" : templateKey;
  let template = config.templates?.[templateSource] || createDefaultTemplate(session, mode, templateSource);
  if (templateKey === "third") {
    template = template.replace(/\*\*Second Lobby\*\*/gi, "**Third Lobby**");
  }
  const values = {
    session_title: isLateNightMode()
      ? "Noble Division 0 Practice Late Night Session ( 2 GAMES )"
      : session.value === "247"
      ? `Noble 24/7 Session ${getTwentyFourSevenSessionNumber()}`
      : session.title,
    mode: getModeLabel(mode),
    mode_suffix: queueSuffix,
    emoji: session.emoji,
    registration: `<t:${registrationUnix}:t>`,
    first_game: `<t:${firstGameUnix}:t>`,
    host,
    channels: session.channels,
    extra: session.extra || "",
    first_reacts: String(config.firstReacts),
    second_reacts: String(config.secondReacts),
    unit,
  };

  return template.replace(/\{\{([a-z_]+)\}\}/g, (match, token) =>
    Object.prototype.hasOwnProperty.call(values, token) ? values[token] : match
  );
}

function isDiscordUserId(value) {
  return /^\d{17,20}$/.test(String(value || "").trim());
}

function sanitizeAnnouncementHistory(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 20).map((item, index) => {
    const session = SESSION_KINDS.find((candidate) => candidate.value === item?.sessionKind) || SESSION_KINDS[0];
    const queueType = session.modes.includes(item?.queueType) ? item.queueType : session.modes[0];
    const lobby = ["primary", "second", "third"].includes(item?.lobby) ? item.lobby : "primary";
    const unix = Number.isFinite(Number(item?.unix)) ? Math.floor(Number(item.unix)) : Math.floor(Date.now() / 1000);
    return {
      id: String(item?.id || `history-${Date.now()}-${index}`).slice(0, 80),
      createdAt: Number.isFinite(Number(item?.createdAt)) ? Number(item.createdAt) : Date.now(),
      label: String(item?.label || session.label).slice(0, 100),
      sessionKind: session.value,
      queueType,
      lobby,
      unix,
      sessionNumber: String(item?.sessionNumber || "1").replace(/\D/g, "").slice(0, 4) || "1",
      discordId: isDiscordUserId(item?.discordId) ? String(item.discordId) : "",
      additionalHostIds: [...new Set((Array.isArray(item?.additionalHostIds) ? item.additionalHostIds : []).filter(isDiscordUserId))].slice(0, 5),
      text: String(item?.text || "").slice(0, 20000),
    };
  }).filter((item) => item.text);
}

function persistAnnouncementHistory() {
  try {
    localStorage.setItem(STORAGE.announcementHistory, JSON.stringify(state.announcementHistory));
  } catch (error) {
    console.warn("Announcement history could not be saved", error);
  }
}

function rememberCurrentAnnouncement() {
  const text = byId("announcementText").value;
  if (!text) return;
  const duplicateIndex = state.announcementHistory.findIndex((item) => item.text === text);
  if (duplicateIndex >= 0) state.announcementHistory.splice(duplicateIndex, 1);
  state.announcementHistory.unshift({
    id: `announcement-${Date.now().toString(36)}`,
    createdAt: Date.now(),
    label: byId("announceSessionTitle").textContent,
    sessionKind: state.sessionKind,
    queueType: getMode(),
    lobby: getLobbyVariant(),
    unix: state.unix,
    sessionNumber: String(getTwentyFourSevenSessionNumber()),
    discordId: state.discordId,
    additionalHostIds: [...state.additionalHostIds],
    text,
  });
  state.announcementHistory = sanitizeAnnouncementHistory(state.announcementHistory);
  persistAnnouncementHistory();
  renderAnnouncementHistory();
}

function formatHistoryDate(timestamp) {
  return new Intl.DateTimeFormat(getInterfaceLocale(), {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: state.timeFormat === "12h",
  }).format(new Date(timestamp));
}

function renderAnnouncementHistory() {
  const list = byId("announcementHistoryList");
  const count = byId("announcementHistoryCount");
  if (!list || !count) return;
  count.textContent = `${state.announcementHistory.length} saved`;
  byId("clearAnnouncementHistory").disabled = state.announcementHistory.length === 0;
  list.replaceChildren();

  if (!state.announcementHistory.length) {
    const empty = document.createElement("div");
    empty.className = "history-empty";
    const title = document.createElement("b");
    title.textContent = "No copied announcements yet";
    const detail = document.createElement("span");
    detail.textContent = "A session appears here after it is copied.";
    empty.append(title, detail);
    list.append(empty);
    return;
  }

  state.announcementHistory.forEach((entry) => {
    const session = SESSION_KINDS.find((item) => item.value === entry.sessionKind) || SESSION_KINDS[0];
    const item = document.createElement("article");
    item.className = "history-item";
    item.dataset.historyId = entry.id;
    const image = document.createElement("img");
    image.src = session.icon;
    image.alt = "";
    const copy = document.createElement("span");
    copy.className = "history-item-copy";
    const title = document.createElement("b");
    title.textContent = entry.label;
    const meta = document.createElement("small");
    meta.textContent = `${formatHistoryDate(entry.createdAt)} · Registration ${formatClock(entry.unix)}`;
    copy.append(title, meta);
    const actions = document.createElement("span");
    actions.className = "history-item-actions";
    [
      ["restore", "Restore"],
      ["copy", "Copy again"],
      ["delete", "Delete"],
    ].forEach(([action, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.historyAction = action;
      button.textContent = label;
      actions.append(button);
    });
    item.append(image, copy, actions);
    list.append(item);
  });
}

function restoreAnnouncementHistoryEntry(entry) {
  const session = SESSION_KINDS.find((item) => item.value === entry.sessionKind) || SESSION_KINDS[0];
  state.sessionKind = session.value;
  state.queueType = session.modes.includes(entry.queueType) ? entry.queueType : session.modes[0];
  state.unix = entry.unix;
  state.includeSecondLobby = entry.lobby === "second";
  state.includeThirdLobby = entry.lobby === "third";
  state.sessionNumber = entry.sessionNumber;
  state.discordId = entry.discordId;
  state.additionalHostIds = [...entry.additionalHostIds];
  state.additionalHostComposerOpen = false;
  state.announceMode = true;

  byId("datetime").value = dateTimeStringFromDate(new Date(state.unix * 1000));
  byId("discordId").value = state.discordId;
  byId("announceMode").checked = true;
  byId("sessionNumberInput").value = state.sessionNumber;
  byId("additionalHostId").value = "";
  try {
    if (state.discordId) localStorage.setItem(STORAGE.discordId, state.discordId);
    localStorage.setItem(STORAGE.announceMode, "1");
  } catch {
    // Browser storage is optional.
  }
  renderBuilder();
  byId("announceSection").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Session restored from history");
}

function renderAnnouncement() {
  const session = getSession();
  const lobby = getLobbyVariant();
  const baseLabel = isLateNightMode() ? `${session.label} \u00b7 Late Night` : session.label;
  const outputLabel = lobby === "primary"
    ? baseLabel
    : `${baseLabel} \u00b7 ${lobby === "third" ? "Third" : "Second"} Lobby`;
  const output = byId("announcementText");
  const copyButton = byId("copyAnnouncement");

  byId("announceSessionTitle").textContent = outputLabel;
  byId("selectedSessionName").textContent = outputLabel;
  byId("announceSessionIcon").src = session.icon;
  byId("announceSessionIcon").alt = session.label;

  if (!state.announceMode) {
    output.value = "Turn on Build announcement to generate a Discord-ready message.";
    copyButton.disabled = true;
    return;
  }
  if (state.unix === null) {
    output.value = "Choose a registration time to generate the announcement.";
    copyButton.disabled = true;
    return;
  }

  output.value = buildAnnouncementText();
  copyButton.disabled = false;
}

function renderBuilder() {
  renderQuickTimes();
  renderMinuteAdjustButtons();
  renderSessionCards();
  renderSessionNumberField();
  renderAdditionalHosts();
  renderQueueButtons();
  renderLobbyControls();
  renderTimeline();
  renderAnnouncement();
  renderFormatTable();
}

function berlinLocalToUtc(year, month, day, hour, minute) {
  let utcMs = Date.UTC(year, month - 1, day, hour, minute, 0, 0);
  let date = new Date(utcMs);
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const berlinHour = Number.parseInt(parts.find((part) => part.type === "hour").value, 10);
  const berlinMinute = Number.parseInt(parts.find((part) => part.type === "minute").value, 10);
  const difference = hour * 60 + minute - (berlinHour * 60 + berlinMinute);
  if (difference !== 0) {
    utcMs += difference * 60000;
    date = new Date(utcMs);
  }
  return date;
}

function getScrimCategory(categoryId = state.scrimQueueType) {
  return state.settings.scrimCategories.find((category) => category.id === categoryId)
    || state.settings.scrimCategories[0];
}

function computeNextScrimUnix(categoryId) {
  const now = Date.now();
  const category = getScrimCategory(categoryId);
  const dateFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  for (let index = 0; index < 10; index += 1) {
    const base = new Date(now + index * 86400000);
    const parts = dateFormatter.formatToParts(base);
    const year = Number.parseInt(parts.find((part) => part.type === "year").value, 10);
    const month = Number.parseInt(parts.find((part) => part.type === "month").value, 10);
    const day = Number.parseInt(parts.find((part) => part.type === "day").value, 10);
    const weekday = new Date(Date.UTC(year, month - 1, day, 12)).getUTCDay();
    const weekend = weekday === 0 || weekday === 6;
    const [hour, minute] = (weekend ? category.weekendTime : category.weekdayTime)
      .split(":")
      .map((value) => Number.parseInt(value, 10));
    const candidate = berlinLocalToUtc(year, month, day, hour, minute);
    if (candidate.getTime() > now) return Math.floor(candidate.getTime() / 1000);
  }

  return Math.floor(now / 1000);
}

function renderScrimTemplate(template) {
  const category = getScrimCategory();
  const values = {
    scrim_time: `<t:${state.scrimUnix}:t>`,
    scrim_relative: `<t:${state.scrimUnix}:R>`,
    queue_label: category.label,
    queue_name: category.messageName,
  };
  return template.replace(/\{\{([a-z_]+)\}\}/g, (match, token) =>
    Object.prototype.hasOwnProperty.call(values, token) ? values[token] : match
  );
}

function renderScrimQueueButtons() {
  const container = byId("scrimQueueButtons");
  container.replaceChildren();
  state.settings.scrimCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment-button";
    button.textContent = category.label;
    button.setAttribute("aria-pressed", String(state.scrimQueueType === category.id));
    if (state.scrimQueueType === category.id) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      state.scrimQueueType = category.id;
      state.scrimUnix = computeNextScrimUnix(category.id);
      byId("scrimTimeInput").value = dateTimeStringFromDate(new Date(state.scrimUnix * 1000));
      renderScrims();
    });
    container.appendChild(button);
  });
}

function renderScrims() {
  if (!state.settings.scrimCategories.some((category) => category.id === state.scrimQueueType)) {
    state.scrimQueueType = state.settings.scrimCategories[0].id;
  }
  renderScrimQueueButtons();
  if (state.scrimUnix === null) return;
  const date = new Date(state.scrimUnix * 1000);
  const berlinTime = new Intl.DateTimeFormat(getInterfaceLocale(), {
    timeZone: "Europe/Berlin",
    dateStyle: "medium",
    timeStyle: "short",
    hour12: state.timeFormat === "12h",
  }).format(date);
  byId("scrimTimePreview").textContent = tr("Berlin schedule: {{time}} / Discord: {{discord}}", {
    time: berlinTime,
    discord: `<t:${state.scrimUnix}:t>`,
  });
  const category = getScrimCategory();
  byId("scrimFirstText").value = renderScrimTemplate(category.firstTemplate);
  byId("scrimConcludeText").value = renderScrimTemplate(category.concludeTemplate);
}

function createStepperButton(input, direction, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "stepper-button";
  button.textContent = direction < 0 ? "\u2212" : "+";
  button.setAttribute("aria-label", label);
  button.addEventListener("click", () => {
    if (direction < 0) input.stepDown();
    else input.stepUp();
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
  return button;
}

function createSettingInput(session, mode, field, suffix, value) {
  const wrapper = document.createElement("div");
  wrapper.className = "compact-number";
  const readableField =
    field === "delayMinutes" ? "Game delay" : field === "firstReacts" ? "One-lobby goal" : "Two-lobby goal";
  const mobileLabel = document.createElement("span");
  mobileLabel.className = "mobile-setting-label";
  mobileLabel.textContent = readableField;
  const input = document.createElement("input");
  input.type = "number";
  input.className = "input";
  input.min = field === "delayMinutes" ? "1" : "0";
  input.max = field === "delayMinutes" ? "180" : "9999";
  input.step = "1";
  input.value = String(value);
  input.dataset.session = session.value;
  input.dataset.mode = mode;
  input.dataset.field = field;
  input.setAttribute("aria-label", `${session.label} ${getModeLabel(mode)} ${readableField.toLowerCase()}`);
  input.title = `${session.label} / ${getModeLabel(mode)} / ${readableField}`;
  const unit = document.createElement("span");
  unit.className = "stepper-unit";
  unit.textContent = suffix;
  const stepper = document.createElement("span");
  stepper.className = "clean-stepper setting-stepper";
  const decreaseButton = createStepperButton(input, -1, `Reduce ${readableField.toLowerCase()}`);
  const increaseButton = createStepperButton(input, 1, `Increase ${readableField.toLowerCase()}`);
  if (suffix) stepper.append(decreaseButton, input, unit, increaseButton);
  else {
    stepper.classList.add("no-unit");
    stepper.append(decreaseButton, input, increaseButton);
  }
  wrapper.append(mobileLabel, stepper);

  input.addEventListener("input", () => {
    const fallback = getSessionSettings(session.value, mode)[field];
    const maximum = field === "delayMinutes" ? 180 : 9999;
    state.settings.sessions[session.value].modes[mode][field] = clampInteger(
      input.value,
      fallback,
      field === "delayMinutes" ? 1 : 0,
      maximum
    );
    markSettingsDirty();
    renderSessionCards();
    renderTimeline();
    renderAnnouncement();
  });
  return wrapper;
}

function renderQuickAdjustmentSettings() {
  const editor = byId("quickAdjustmentSettings");
  editor.replaceChildren();

  state.settings.quickAdjustments.forEach((value, index) => {
    const item = document.createElement("div");
    item.className = "quick-adjust-setting";
    const label = document.createElement("span");
    label.className = "quick-adjust-label";
    label.textContent = `Button ${index + 1}`;
    const input = document.createElement("input");
    input.type = "number";
    input.className = "input number-input";
    input.min = "-180";
    input.max = "180";
    input.step = "5";
    input.value = String(value);
    input.setAttribute("aria-label", `Quick time adjustment button ${index + 1} in minutes`);
    const unit = document.createElement("span");
    unit.className = "stepper-unit";
    unit.textContent = "min";
    const stepper = document.createElement("span");
    stepper.className = "clean-stepper";
    stepper.append(
      createStepperButton(input, -1, `Reduce quick button ${index + 1}`),
      input,
      unit,
      createStepperButton(input, 1, `Increase quick button ${index + 1}`)
    );
    input.addEventListener("input", () => {
      state.settings.quickAdjustments[index] = clampInteger(input.value, value, -180, 180);
      markSettingsDirty();
      renderMinuteAdjustButtons();
    });
    item.append(label, stepper);
    editor.appendChild(item);
  });
}

function renderSettingsEditor() {
  const editor = byId("settingsEditor");
  editor.replaceChildren();
  byId("secondLobbyOffset").value = String(state.settings.secondLobbyOffsetMinutes);
  byId("thirdLobbyOffset").value = String(state.settings.thirdLobbyOffsetMinutes);
  renderQuickAdjustmentSettings();

  getOrderedSessions().forEach((session) => {
    const server = document.createElement("article");
    server.className = "settings-server";
    const identity = document.createElement("div");
    identity.className = "settings-server-identity";
    const image = document.createElement("img");
    image.src = session.icon;
    image.alt = "";
    const identityCopy = document.createElement("span");
    const name = document.createElement("b");
    name.textContent = session.label;
    const meta = document.createElement("small");
    meta.textContent = session.modes.length === 1 ? tr("1 game mode") : tr("{{count}} game modes", { count: session.modes.length });
    identityCopy.append(name, meta);
    identity.append(image, identityCopy);

    const modeList = document.createElement("div");
    modeList.className = "settings-mode-list";
    const columnHead = document.createElement("div");
    columnHead.className = "settings-mode-columns";
    ["Mode", "Game delay", "1 lobby", "2 lobbies"].forEach((column) => {
      const label = document.createElement("span");
      label.textContent = tr(column);
      columnHead.appendChild(label);
    });
    modeList.appendChild(columnHead);
    session.modes.forEach((mode) => {
      const config = getSessionSettings(session.value, mode);
      const row = document.createElement("div");
      row.className = "settings-mode-row";
      const modeName = document.createElement("span");
      modeName.className = "mode-name";
      modeName.textContent = tr(getModeLabel(mode));
      row.append(
        modeName,
        createSettingInput(session, mode, "delayMinutes", "min", config.delayMinutes),
        createSettingInput(session, mode, "firstReacts", "", config.firstReacts),
        createSettingInput(session, mode, "secondReacts", "", config.secondReacts)
      );
      modeList.appendChild(row);
    });

    server.append(identity, modeList);
    editor.appendChild(server);
  });
}

function getTemplateSession() {
  return SESSION_KINDS.find((session) => session.value === state.templateSessionKind) || getOrderedSessions()[0] || SESSION_KINDS[0];
}

function updateSelectedTemplate(value) {
  const config = getSessionSettings(state.templateSessionKind, state.templateMode);
  config.templates[state.templateLobby] = value;
  markSettingsDirty();
  renderAnnouncement();
}

function renderTemplateEditor() {
  const selectedSession = getTemplateSession();
  if (!selectedSession.modes.includes(state.templateMode)) {
    state.templateMode = selectedSession.modes[0];
  }

  const serverButtons = byId("templateServerButtons");
  serverButtons.replaceChildren();
  getOrderedSessions().forEach((session) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "template-server-button";
    button.setAttribute("aria-pressed", String(session.value === state.templateSessionKind));
    if (session.value === state.templateSessionKind) button.classList.add("is-selected");
    const image = document.createElement("img");
    image.src = session.icon;
    image.alt = "";
    const label = document.createElement("span");
    label.textContent = session.short;
    button.append(image, label);
    button.addEventListener("click", () => {
      state.templateSessionKind = session.value;
      state.templateMode = session.modes[0];
      renderTemplateEditor();
    });
    serverButtons.appendChild(button);
  });

  const modeButtons = byId("templateModeButtons");
  modeButtons.replaceChildren();
  selectedSession.modes.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment-button";
    button.textContent = tr(getModeLabel(mode));
    button.setAttribute("aria-pressed", String(mode === state.templateMode));
    if (mode === state.templateMode) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      state.templateMode = mode;
      renderTemplateEditor();
    });
    modeButtons.appendChild(button);
  });

  const lobbyButtons = byId("templateLobbyButtons");
  lobbyButtons.replaceChildren();
  [
    { value: "primary", label: "Normal lobby" },
    { value: "second", label: "Second / third lobby" },
  ].forEach((lobby) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment-button";
    button.textContent = tr(lobby.label);
    button.setAttribute("aria-pressed", String(lobby.value === state.templateLobby));
    if (lobby.value === state.templateLobby) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      state.templateLobby = lobby.value;
      renderTemplateEditor();
    });
    lobbyButtons.appendChild(button);
  });

  const config = getSessionSettings(state.templateSessionKind, state.templateMode);
  byId("templateText").value = config.templates[state.templateLobby];

  const tokenButtons = byId("templateTokenButtons");
  tokenButtons.replaceChildren();
  [
    ["{{host}}", "Host mention"],
    ["{{registration}}", "Registration time"],
    ["{{first_game}}", "First game time"],
    ["{{first_reacts}}", "One-lobby react goal"],
    ["{{second_reacts}}", "Two-lobby react goal"],
    ["{{session_title}}", "Session title"],
    ["{{mode}}", "Game mode"],
    ["{{mode_suffix}}", "Optional squads title suffix"],
    ["{{emoji}}", "Server arrow emoji"],
    ["{{channels}}", "Rules channels"],
    ["{{extra}}", "Server-specific reward line"],
    ["{{unit}}", "Player, duo, or squad"],
  ].forEach(([token, description]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "template-token";
    button.textContent = token;
    button.title = description;
    button.addEventListener("click", () => {
      const editor = byId("templateText");
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.setRangeText(token, start, end, "end");
      updateSelectedTemplate(editor.value);
      editor.focus();
    });
    tokenButtons.appendChild(button);
  });
}

function getSettingsScrimCategory() {
  const selected = state.settings.scrimCategories.find(
    (category) => category.id === state.settingsScrimCategoryId
  );
  if (selected) return selected;
  state.settingsScrimCategoryId = state.settings.scrimCategories[0].id;
  return state.settings.scrimCategories[0];
}

function renderScrimPresetButtons() {
  const container = byId("scrimPresetButtons");
  container.replaceChildren();
  state.settings.scrimCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "scrim-preset-button";
    button.textContent = category.label;
    button.setAttribute("aria-pressed", String(category.id === state.settingsScrimCategoryId));
    if (category.id === state.settingsScrimCategoryId) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      state.settingsScrimCategoryId = category.id;
      renderScrimPresetEditor();
    });
    container.appendChild(button);
  });
}

function renderScrimPresetEditor() {
  const category = getSettingsScrimCategory();
  renderScrimPresetButtons();
  byId("scrimPresetLabel").value = category.label;
  byId("scrimPresetMessageName").value = category.messageName;
  byId("scrimWeekdayTime").value = category.weekdayTime;
  byId("scrimWeekendTime").value = category.weekendTime;
  byId("scrimFirstTemplate").value = category.firstTemplate;
  byId("scrimConcludeTemplate").value = category.concludeTemplate;

  const deleteButton = byId("deleteScrimCategory");
  deleteButton.disabled = state.settings.scrimCategories.length === 1;

  const tokenButtons = byId("scrimTemplateTokens");
  tokenButtons.replaceChildren();
  [
    ["{{scrim_time}}", "Discord scrim time"],
    ["{{scrim_relative}}", "Relative Discord time"],
    ["{{queue_label}}", "Category display name"],
    ["{{queue_name}}", "Category message name"],
  ].forEach(([token, description]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "template-token";
    button.textContent = token;
    button.title = description;
    button.addEventListener("click", () => {
      const editorId = state.activeScrimTemplateField === "concludeTemplate"
        ? "scrimConcludeTemplate"
        : "scrimFirstTemplate";
      const editor = byId(editorId);
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.setRangeText(token, start, end, "end");
      category[state.activeScrimTemplateField] = editor.value.slice(0, 20000);
      markSettingsDirty();
      renderScrims();
      editor.focus();
    });
    tokenButtons.appendChild(button);
  });
}

function addScrimCategory() {
  if (state.settings.scrimCategories.length >= 8) {
    showToast("You can create up to 8 scrim categories");
    return;
  }
  const source = getSettingsScrimCategory();
  let id = `custom_${Date.now().toString(36)}`;
  while (state.settings.scrimCategories.some((category) => category.id === id)) id += "_new";
  state.settings.scrimCategories.push({
    id,
    label: "New category",
    messageName: "custom",
    weekdayTime: source.weekdayTime,
    weekendTime: source.weekendTime,
    firstTemplate: source.firstTemplate,
    concludeTemplate: source.concludeTemplate,
  });
  state.settingsScrimCategoryId = id;
  markSettingsDirty();
  renderScrimPresetEditor();
  renderScrims();
  byId("scrimPresetLabel").focus();
  byId("scrimPresetLabel").select();
}

function deleteSelectedScrimCategory() {
  if (state.settings.scrimCategories.length === 1) return;
  const category = getSettingsScrimCategory();
  if (!window.confirm(`Delete the ${category.label} scrim category?`)) return;
  state.settings.scrimCategories = state.settings.scrimCategories.filter((item) => item.id !== category.id);
  if (state.scrimQueueType === category.id) {
    state.scrimQueueType = state.settings.scrimCategories[0].id;
    state.scrimUnix = computeNextScrimUnix(state.scrimQueueType);
    byId("scrimTimeInput").value = dateTimeStringFromDate(new Date(state.scrimUnix * 1000));
  }
  state.settingsScrimCategoryId = state.settings.scrimCategories[0].id;
  markSettingsDirty();
  renderScrimPresetEditor();
  renderScrims();
  showToast("Scrim category removed");
}

function setBackupStatus(message, status = "ready") {
  const element = byId("backupStatus");
  if (!element) return;
  element.classList.toggle("is-success", status === "success");
  element.classList.toggle("has-error", status === "error");
  element.lastChild.textContent = ` ${message}`;
}

function buildConfigurationBackup() {
  return {
    app: "noble-staff-helper",
    version: 1,
    exportedAt: new Date().toISOString(),
    configuration: {
      settings: state.settings,
      scheduleSettings: state.scheduleSettings,
      staffLinks: state.staffLinks,
      sessionOrder: state.sessionOrder,
    },
    preferences: {
      language: state.language,
      timeFormat: state.timeFormat,
      theme: state.theme,
      copyAnimationEnabled: state.copyAnimationEnabled,
      discordId: state.discordId,
      recentHostIds: state.recentHostIds,
      announceMode: state.announceMode,
    },
  };
}

function exportConfigurationBackup() {
  const backup = buildConfigurationBackup();
  const payload = JSON.stringify(backup, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `noble-staff-helper-backup-${localDateString(new Date())}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  setBackupStatus(`Exported ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`, "success");
  showToast("Configuration backup downloaded");
}

function sanitizeConfigurationBackup(payload) {
  if (!payload || typeof payload !== "object" || payload.app !== "noble-staff-helper") {
    throw new Error("This is not a Noble Staff Helper backup.");
  }
  if (payload.version !== 1 || !payload.configuration || typeof payload.configuration !== "object") {
    throw new Error("This backup version is not supported.");
  }
  if (!payload.configuration.settings || !payload.configuration.scheduleSettings) {
    throw new Error("The backup is missing required configuration data.");
  }

  const preferences = payload.preferences && typeof payload.preferences === "object" ? payload.preferences : {};
  return {
    settings: mergeSavedSettings(payload.configuration.settings),
    scheduleSettings: mergeScheduleSettings(payload.configuration.scheduleSettings),
    staffLinks: sanitizeStaffLinks(payload.configuration.staffLinks),
    sessionOrder: sanitizeSessionOrder(payload.configuration.sessionOrder),
    language: Object.prototype.hasOwnProperty.call(UI_LOCALES, preferences.language) ? preferences.language : "en",
    timeFormat: preferences.timeFormat === "12h" || preferences.timeFormat === "24h"
      ? preferences.timeFormat
      : getPreferredTimeFormat(),
    theme: preferences.theme === "nobleprac" ? "nobleprac" : "staff",
    copyAnimationEnabled: preferences.copyAnimationEnabled !== false,
    discordId: isDiscordUserId(preferences.discordId) ? String(preferences.discordId) : "",
    recentHostIds: sanitizeRecentHostIds(preferences.recentHostIds),
    announceMode: preferences.announceMode !== false,
  };
}

function persistImportedConfiguration(configuration) {
  localStorage.setItem(STORAGE.settings, JSON.stringify(configuration.settings));
  localStorage.setItem(STORAGE.scheduleSettings, JSON.stringify(configuration.scheduleSettings));
  localStorage.setItem(STORAGE.staffLinks, JSON.stringify(configuration.staffLinks));
  localStorage.setItem(STORAGE.sessionOrder, JSON.stringify(configuration.sessionOrder));
  localStorage.setItem(STORAGE.language, configuration.language);
  localStorage.setItem(STORAGE.timeFormat, configuration.timeFormat);
  localStorage.setItem(STORAGE.theme, configuration.theme);
  localStorage.setItem(STORAGE.copyAnimation, configuration.copyAnimationEnabled ? "1" : "0");
  localStorage.setItem(STORAGE.recentHostIds, JSON.stringify(configuration.recentHostIds));
  localStorage.setItem(STORAGE.announceMode, configuration.announceMode ? "1" : "0");
  if (configuration.discordId) localStorage.setItem(STORAGE.discordId, configuration.discordId);
  else localStorage.removeItem(STORAGE.discordId);
}

function applyImportedConfiguration(configuration) {
  state.settings = configuration.settings;
  state.scheduleSettings = configuration.scheduleSettings;
  state.staffLinks = configuration.staffLinks;
  state.sessionOrder = configuration.sessionOrder;
  state.language = configuration.language;
  state.timeFormat = configuration.timeFormat;
  state.theme = configuration.theme;
  state.copyAnimationEnabled = configuration.copyAnimationEnabled;
  state.discordId = configuration.discordId;
  state.recentHostIds = configuration.recentHostIds;
  state.announceMode = configuration.announceMode;
  state.sessionKind = state.sessionOrder[0];
  state.queueType = getSession().modes[0];
  state.templateSessionKind = state.sessionKind;
  state.templateMode = getMode();
  state.settingsScrimCategoryId = state.settings.scrimCategories[0].id;
  if (!state.settings.scrimCategories.some((category) => category.id === state.scrimQueueType)) {
    state.scrimQueueType = state.settings.scrimCategories[0].id;
  }
  state.settingsDirty = false;

  byId("discordId").value = state.discordId;
  byId("announceMode").checked = state.announceMode;
  applyWorkspaceTheme(state.theme, false);
  renderBuilder();
  renderScrims();
  renderSettingsEditor();
  renderTemplateEditor();
  renderScrimPresetEditor();
  renderStaffLinksEditor();
  renderStaffLinksDock();
  renderSessionOrderEditor();
  renderScheduleBuilder();
  renderScheduleSettings();
  renderLocalizationControls();
  applyInterfaceLanguage();
}

async function importConfigurationBackup(file) {
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    setBackupStatus("File is larger than 2 MB", "error");
    showToast("Backup file is too large");
    return;
  }
  try {
    const payload = JSON.parse(await file.text());
    const configuration = sanitizeConfigurationBackup(payload);
    const confirmed = window.confirm(
      "Import this backup and replace the current server presets, schedules, quick links, and display preferences on this device?"
    );
    if (!confirmed) {
      setBackupStatus("Import cancelled", "ready");
      return;
    }
    persistImportedConfiguration(configuration);
    applyImportedConfiguration(configuration);
    setBackupStatus(`Imported ${file.name}`, "success");
    showToast("Configuration imported successfully");
  } catch (error) {
    console.warn("Configuration backup import rejected", error);
    setBackupStatus(error.message || "Could not read this backup", "error");
    showToast("Could not import this backup");
  } finally {
    byId("configurationBackupFile").value = "";
  }
}

function saveSettings() {
  state.settings = mergeSavedSettings(state.settings);
  state.staffLinks = sanitizeStaffLinks(state.staffLinks);
  try {
    localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
    localStorage.setItem(STORAGE.staffLinks, JSON.stringify(state.staffLinks));
    localStorage.setItem(STORAGE.sessionOrder, JSON.stringify(state.sessionOrder));
  } catch (error) {
    console.error(error);
    showToast("Could not save settings in this browser");
    return;
  }
  state.settingsDirty = false;
  setSaveStatus("", false);
  renderSettingsEditor();
  renderTemplateEditor();
  renderScrimPresetEditor();
  renderStaffLinksEditor();
  renderStaffLinksDock();
  renderSessionOrderEditor();
  byId("templateSaveState").textContent = "Saved locally";
  renderBuilder();
  renderScrims();
  showToast("Experience settings saved");
}

function resetSettings() {
  if (!window.confirm("Restore timing, reaction goals, message templates, server order, and staff links to the Noble defaults?")) return;
  state.settings = cloneDefaults();
  state.staffLinks = cloneStaffLinks();
  state.sessionOrder = [...DEFAULT_SESSION_ORDER];
  state.sessionKind = state.sessionOrder[0];
  state.settingsScrimCategoryId = state.settings.scrimCategories[0].id;
  state.scrimQueueType = state.settings.scrimCategories[0].id;
  state.settingsDirty = true;
  saveSettings();
  showToast("Default settings restored");
}

function applySolosSecondLobbyCorrection() {
  if (localStorage.getItem(STORAGE.solosSecondLobbyCorrection) === "1") return;

  ["solos", "solos_closed"].forEach((sessionKind) => {
    const config = state.settings.sessions?.[sessionKind]?.modes?.solos;
    if (!config) return;
    if (config.secondReacts === 110) config.secondReacts = 200;
    if (typeof config.templates?.second === "string") {
      config.templates.second = config.templates.second.replace(
        "Required at least **{{first_reacts}}+ Reacts** (1 per {{unit}}).",
        "Required at least **{{second_reacts}}+ Reacts** (1 per {{unit}})."
      );
    }
  });

  localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
  localStorage.setItem(STORAGE.solosSecondLobbyCorrection, "1");
}

function applyDiv0DelayCorrection() {
  if (localStorage.getItem(STORAGE.div0DelayCorrection) === "1") return;

  ["duos", "squads"].forEach((mode) => {
    const config = state.settings.sessions?.div0?.modes?.[mode];
    if (config?.delayMinutes === 20) config.delayMinutes = 15;
  });

  localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
  localStorage.setItem(STORAGE.div0DelayCorrection, "1");
}

function applyTwentyFourSevenDelayCorrection() {
  if (localStorage.getItem(STORAGE.twentyFourSevenDelayCorrection) === "1") return;

  ["duos", "squads"].forEach((mode) => {
    const config = state.settings.sessions?.["247"]?.modes?.[mode];
    if (config?.delayMinutes === 15) config.delayMinutes = 20;
  });

  localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
  localStorage.setItem(STORAGE.twentyFourSevenDelayCorrection, "1");
}

function applyLobbyOffsetCorrection() {
  if (localStorage.getItem(STORAGE.lobbyOffsetCorrection) === "1") return;

  state.settings.secondLobbyOffsetMinutes = 0;
  state.settings.thirdLobbyOffsetMinutes = 0;

  const div0Session = SESSION_KINDS.find((session) => session.value === "div0");
  const lateNightTemplates = state.settings.sessions?.div0?.modes?.late_night?.templates;
  if (div0Session && lateNightTemplates?.second === DIV0_LATE_NIGHT_TEMPLATE) {
    lateNightTemplates.second = createDefaultTemplate(div0Session, "late_night", "second");
  }

  localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
  localStorage.setItem(STORAGE.lobbyOffsetCorrection, "1");
}

function applyZnturoStaffLinkCorrection() {
  if (localStorage.getItem(STORAGE.znturoStaffLinkCorrection) === "1") return;

  const znturoDefault = DEFAULT_STAFF_LINKS.find((link) => link.id === "znturo");
  const alreadyIncluded = state.staffLinks.some((link) => {
    try {
      return new URL(link.url).hostname.replace(/^www\./, "") === "znturo.com";
    } catch {
      return false;
    }
  });
  if (!alreadyIncluded && state.staffLinks.length < 8 && znturoDefault) {
    state.staffLinks.push({ ...znturoDefault });
  }

  localStorage.setItem(STORAGE.staffLinks, JSON.stringify(state.staffLinks));
  localStorage.setItem(STORAGE.znturoStaffLinkCorrection, "1");
}

function loadPreferences() {
  try {
    const savedLanguage = localStorage.getItem(STORAGE.language);
    if (savedLanguage && Object.prototype.hasOwnProperty.call(UI_LOCALES, savedLanguage)) {
      state.language = savedLanguage;
    }

    const savedTimeFormat = localStorage.getItem(STORAGE.timeFormat);
    if (savedTimeFormat === "12h" || savedTimeFormat === "24h") state.timeFormat = savedTimeFormat;

    const savedTheme = localStorage.getItem(STORAGE.theme);
    if (savedTheme === "staff" || savedTheme === "nobleprac") state.theme = savedTheme;

    const savedCopyAnimation = localStorage.getItem(STORAGE.copyAnimation);
    if (savedCopyAnimation === "0") state.copyAnimationEnabled = false;
    if (savedCopyAnimation === "1") state.copyAnimationEnabled = true;

    const savedDiscordId = localStorage.getItem(STORAGE.discordId);
    if (savedDiscordId) state.discordId = savedDiscordId;

    const savedRecentHostIds = localStorage.getItem(STORAGE.recentHostIds);
    if (savedRecentHostIds) state.recentHostIds = sanitizeRecentHostIds(JSON.parse(savedRecentHostIds));

    const savedAnnouncementHistory = localStorage.getItem(STORAGE.announcementHistory);
    if (savedAnnouncementHistory) {
      state.announcementHistory = sanitizeAnnouncementHistory(JSON.parse(savedAnnouncementHistory));
    }

    const savedAnnounceMode = localStorage.getItem(STORAGE.announceMode);
    if (savedAnnounceMode === "0") state.announceMode = false;
    if (savedAnnounceMode === "1") state.announceMode = true;

    const savedSessionOrder = localStorage.getItem(STORAGE.sessionOrder);
    if (savedSessionOrder) state.sessionOrder = sanitizeSessionOrder(JSON.parse(savedSessionOrder));
    state.sessionKind = state.sessionOrder[0];

    const savedSettings = localStorage.getItem(STORAGE.settings);
    if (savedSettings) state.settings = mergeSavedSettings(JSON.parse(savedSettings));
    applySolosSecondLobbyCorrection();
    applyDiv0DelayCorrection();
    applyTwentyFourSevenDelayCorrection();
    applyLobbyOffsetCorrection();

    const savedScheduleSettings = localStorage.getItem(STORAGE.scheduleSettings);
    if (savedScheduleSettings) {
      state.scheduleSettings = mergeScheduleSettings(JSON.parse(savedScheduleSettings));
    }

    const savedStaffLinks = localStorage.getItem(STORAGE.staffLinks);
    if (savedStaffLinks) state.staffLinks = sanitizeStaffLinks(JSON.parse(savedStaffLinks));
    applyZnturoStaffLinkCorrection();
  } catch (error) {
    console.warn("Preferences could not be loaded", error);
  }
}

function configureCreatorLink() {
  const link = byId("creatorLink");
  if (CREATOR_DISCORD_USER_ID) {
    link.href = `https://discord.com/users/${CREATOR_DISCORD_USER_ID}`;
    link.setAttribute("aria-label", "Open Sneeky's Discord profile");
  } else {
    link.href = "https://discord.com/";
    link.title = "Add Sneeky's numeric Discord user ID in script.js to link the profile directly";
    link.setAttribute("aria-label", "Made by Sneeky; Discord profile link needs a user ID");
  }
}

function configureStaffGuideVideo() {
  const iframe = byId("staffGuideVideo");
  if (!iframe) return;
  const videoId = iframe.dataset.videoId;
  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId || "")) return;

  const publicOrigin = "https://sneeky1876-cmyk.github.io";
  const pageOrigin = /^https?:$/.test(window.location.protocol) ? window.location.origin : publicOrigin;
  const pageUrl = /^https?:$/.test(window.location.protocol)
    ? `${window.location.origin}${window.location.pathname}`
    : `${publicOrigin}/noble-staff-helper/`;
  const parameters = new URLSearchParams({
    enablejsapi: "1",
    origin: pageOrigin,
    widget_referrer: pageUrl,
    playsinline: "1",
    rel: "0",
  });
  iframe.src = `https://www.youtube.com/embed/${videoId}?${parameters.toString()}`;
}

function bindEvents() {
  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    button.addEventListener("click", () => applyWorkspaceTheme(button.dataset.themeOption));
  });
  byId("copyAnimationToggle").addEventListener("change", (event) => {
    state.copyAnimationEnabled = event.target.checked;
    try {
      localStorage.setItem(STORAGE.copyAnimation, state.copyAnimationEnabled ? "1" : "0");
    } catch {
      // Browser storage is optional.
    }
    showToast(state.copyAnimationEnabled ? "Copy animation enabled" : "Copy animation disabled");
  });
  document.querySelectorAll("[data-time-format-toggle]").forEach((button) => {
    button.addEventListener("click", toggleTimeFormat);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setInterfaceLanguage(button.dataset.language));
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  document.querySelectorAll("[data-view-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.viewJump === "settings") {
        state.templateSessionKind = state.sessionKind;
        state.templateMode = getMode();
        renderTemplateEditor();
      }
      setView(button.dataset.viewJump);
    });
  });
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setView(link.dataset.viewLink);
    });
  });
  window.addEventListener("hashchange", () => setView(getViewFromHash(), false));

  installLongPressReorder(byId("sessionCards"), ".session-card", (order) => applySessionOrder(order));
  installLongPressReorder(byId("sessionOrderEditor"), ".session-order-item", (order) => applySessionOrder(order));
  byId("sessionOrderEditor").addEventListener("click", (event) => {
    const action = event.target.closest("[data-order-action]");
    if (!action) return;
    moveSessionOrder(action.dataset.sessionId, action.dataset.orderAction === "up" ? -1 : 1);
  });

  document.querySelectorAll("[data-step-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = byId(button.dataset.stepTarget);
      if (!input) return;
      if (Number(button.dataset.step) < 0) input.stepDown();
      else input.stepUp();
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });

  byId("datetime").addEventListener("input", (event) => {
    state.unix = toUnixFromLocalInput(event.target.value);
    renderBuilder();
  });
  byId("resetNow").addEventListener("click", () => {
    const now = new Date();
    state.unix = Math.floor(now.getTime() / 1000);
    byId("datetime").value = dateTimeStringFromDate(now);
    renderBuilder();
  });
  byId("discordId").addEventListener("input", (event) => {
    state.discordId = event.target.value.trim();
    state.additionalHostIds = state.additionalHostIds.filter((id) => id !== state.discordId);
    try {
      if (state.discordId) localStorage.setItem(STORAGE.discordId, state.discordId);
      else localStorage.removeItem(STORAGE.discordId);
    } catch {
      // Browser storage is optional.
    }
    renderAdditionalHosts();
    renderAnnouncement();
  });
  byId("toggleAdditionalHost").addEventListener("click", () => {
    state.additionalHostComposerOpen = !state.additionalHostComposerOpen;
    renderAdditionalHosts();
    if (state.additionalHostComposerOpen) byId("additionalHostId").focus();
  });
  byId("addAdditionalHost").addEventListener("click", () => {
    addAdditionalHost(byId("additionalHostId").value);
  });
  byId("additionalHostId").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addAdditionalHost(event.target.value);
  });
  byId("announceMode").addEventListener("change", (event) => {
    state.announceMode = event.target.checked;
    try {
      localStorage.setItem(STORAGE.announceMode, state.announceMode ? "1" : "0");
    } catch {
      // Browser storage is optional.
    }
    renderAnnouncement();
  });
  byId("secondLobby").addEventListener("change", (event) => {
    state.includeSecondLobby = event.target.checked;
    if (state.includeSecondLobby) state.includeThirdLobby = false;
    renderLobbyControls();
    renderTimeline();
    renderAnnouncement();
  });
  byId("thirdLobby").addEventListener("change", (event) => {
    state.includeThirdLobby = event.target.checked;
    if (state.includeThirdLobby) state.includeSecondLobby = false;
    renderLobbyControls();
    renderTimeline();
    renderAnnouncement();
  });
  byId("sessionNumberInput").addEventListener("input", (event) => {
    state.sessionNumber = event.target.value.replace(/\D/g, "").slice(0, 4);
    event.target.value = state.sessionNumber;
    renderAnnouncement();
  });
  byId("sessionNumberInput").addEventListener("blur", (event) => {
    state.sessionNumber = String(getTwentyFourSevenSessionNumber());
    event.target.value = state.sessionNumber;
    renderAnnouncement();
  });
  byId("copyAnnouncement").addEventListener("click", async () => {
    const copied = await copyText(byId("announcementText").value, "Announcement copied and saved to history");
    if (copied) rememberCurrentAnnouncement();
  });
  byId("announcementHistoryList").addEventListener("click", async (event) => {
    const action = event.target.closest("[data-history-action]");
    const item = event.target.closest("[data-history-id]");
    if (!action || !item) return;
    const entry = state.announcementHistory.find((historyItem) => historyItem.id === item.dataset.historyId);
    if (!entry) return;
    if (action.dataset.historyAction === "restore") restoreAnnouncementHistoryEntry(entry);
    if (action.dataset.historyAction === "copy") await copyText(entry.text, "Saved announcement copied");
    if (action.dataset.historyAction === "delete") {
      state.announcementHistory = state.announcementHistory.filter((historyItem) => historyItem.id !== entry.id);
      persistAnnouncementHistory();
      renderAnnouncementHistory();
      showToast("History entry deleted");
    }
  });
  byId("clearAnnouncementHistory").addEventListener("click", () => {
    if (!state.announcementHistory.length) return;
    if (!window.confirm("Clear all copied session announcements from this device?")) return;
    state.announcementHistory = [];
    persistAnnouncementHistory();
    renderAnnouncementHistory();
    showToast("Session history cleared");
  });

  byId("scrimAutoNext").addEventListener("click", () => {
    state.scrimUnix = computeNextScrimUnix(state.scrimQueueType);
    byId("scrimTimeInput").value = dateTimeStringFromDate(new Date(state.scrimUnix * 1000));
    renderScrims();
  });
  byId("scrimTimeInput").addEventListener("input", (event) => {
    state.scrimUnix = toUnixFromLocalInput(event.target.value);
    renderScrims();
  });
  byId("copyScrimFirst").addEventListener("click", () => {
    copyText(byId("scrimFirstText").value, "First match message copied");
  });
  byId("copyScrimConclude").addEventListener("click", () => {
    copyText(byId("scrimConcludeText").value, "Conclude message copied");
  });
  byId("toggleStaffLinks").addEventListener("click", () => setStaffLinksOpen(!state.staffLinksOpen));
  byId("closeStaffLinks").addEventListener("click", () => setStaffLinksOpen(false));
  byId("manageStaffLinks").addEventListener("click", () => {
    setStaffLinksOpen(false);
    setView("settings");
    window.setTimeout(() => byId("staffLinksSettings")?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  });
  byId("addStaffLink").addEventListener("click", addStaffLink);
  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeAppModal(button.dataset.closeModal));
  });
  document.querySelectorAll("[data-schedule-tab]").forEach((button) => {
    button.addEventListener("click", () => setScheduleTab(button.dataset.scheduleTab));
  });
  byId("scheduleDate").addEventListener("input", (event) => {
    state.scheduleDate = event.target.value;
    renderSchedulePreview();
  });
  byId("addScheduleSession").addEventListener("click", addScheduleSession);
  byId("copyScheduleAnnouncement").addEventListener("click", () => {
    copyText(byId("scheduleAnnouncementText").value, "Schedule announcement copied");
  });
  byId("saveScheduleSettings").addEventListener("click", saveScheduleSettings);
  byId("resetSchedulePreset").addEventListener("click", resetSelectedSchedulePreset);
  [
    ["scheduleTitleInput", "title", 80],
    ["scheduleHeaderEmojiInput", "headerEmoji", 120],
    ["scheduleArrowEmojiInput", "arrowEmoji", 120],
    ["scheduleDetailsInput", "details", 500],
    ["scheduleFooterInput", "footer", 2000],
    ["scheduleTemplateInput", "template", 20000],
  ].forEach(([inputId, field, limit]) => {
    byId(inputId).addEventListener("input", (event) => {
      getSchedulePreset(state.scheduleSettingsServer)[field] = event.target.value.slice(0, limit);
      renderSchedulePreview();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openModal = document.querySelector(".app-modal:not([hidden])");
    if (openModal) {
      closeAppModal(openModal.id);
      return;
    }
    if (state.staffLinksOpen) setStaffLinksOpen(false);
  });

  byId("secondLobbyOffset").addEventListener("input", (event) => {
    state.settings.secondLobbyOffsetMinutes = clampInteger(
      event.target.value,
      state.settings.secondLobbyOffsetMinutes,
      0,
      60
    );
    markSettingsDirty();
    renderLobbyControls();
    renderTimeline();
    renderAnnouncement();
  });
  byId("thirdLobbyOffset").addEventListener("input", (event) => {
    state.settings.thirdLobbyOffsetMinutes = clampInteger(
      event.target.value,
      state.settings.thirdLobbyOffsetMinutes,
      0,
      60
    );
    markSettingsDirty();
    renderLobbyControls();
    renderTimeline();
    renderAnnouncement();
  });
  byId("saveSettings").addEventListener("click", saveSettings);
  byId("resetSettings").addEventListener("click", resetSettings);
  byId("exportConfiguration").addEventListener("click", exportConfigurationBackup);
  byId("chooseConfigurationBackup").addEventListener("click", () => byId("configurationBackupFile").click());
  byId("configurationBackupFile").addEventListener("change", (event) => {
    importConfigurationBackup(event.target.files?.[0]);
  });
  byId("templateText").addEventListener("input", (event) => {
    updateSelectedTemplate(event.target.value);
  });
  byId("addScrimCategory").addEventListener("click", addScrimCategory);
  byId("deleteScrimCategory").addEventListener("click", deleteSelectedScrimCategory);
  byId("scrimPresetLabel").addEventListener("input", (event) => {
    const category = getSettingsScrimCategory();
    category.label = event.target.value.slice(0, 32);
    markSettingsDirty();
    renderScrimPresetButtons();
    renderScrimQueueButtons();
    renderScrims();
  });
  byId("scrimPresetMessageName").addEventListener("input", (event) => {
    getSettingsScrimCategory().messageName = event.target.value.slice(0, 32);
    markSettingsDirty();
    renderScrims();
  });
  [
    ["scrimWeekdayTime", "weekdayTime"],
    ["scrimWeekendTime", "weekendTime"],
  ].forEach(([inputId, field]) => {
    byId(inputId).addEventListener("input", (event) => {
      if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(event.target.value)) return;
      const category = getSettingsScrimCategory();
      category[field] = event.target.value;
      markSettingsDirty();
      if (state.scrimQueueType === category.id) {
        state.scrimUnix = computeNextScrimUnix(category.id);
        byId("scrimTimeInput").value = dateTimeStringFromDate(new Date(state.scrimUnix * 1000));
        renderScrims();
      }
    });
  });
  [
    ["scrimFirstTemplate", "firstTemplate"],
    ["scrimConcludeTemplate", "concludeTemplate"],
  ].forEach(([inputId, field]) => {
    const input = byId(inputId);
    input.addEventListener("focus", () => {
      state.activeScrimTemplateField = field;
    });
    input.addEventListener("input", (event) => {
      getSettingsScrimCategory()[field] = event.target.value.slice(0, 20000);
      state.activeScrimTemplateField = field;
      markSettingsDirty();
      renderScrims();
    });
  });
}

function initialize() {
  loadPreferences();
  applyWorkspaceTheme(state.theme, false);
  if (!state.settings.scrimCategories.some((category) => category.id === state.scrimQueueType)) {
    state.scrimQueueType = state.settings.scrimCategories[0].id;
  }
  state.settingsScrimCategoryId = state.scrimQueueType;

  // Seed every time-dependent view before binding the rest of the interface.
  // This keeps the registration time usable even if a later optional control
  // is unavailable or the browser still has stale markup in its cache.
  const now = new Date();
  state.scheduleDate = localDateString(now);
  state.unix = Math.floor(now.getTime() / 1000);
  byId("datetime").value = dateTimeStringFromDate(now);
  byId("discordId").value = state.discordId;
  byId("announceMode").checked = state.announceMode;

  state.scrimUnix = computeNextScrimUnix(state.scrimQueueType);
  byId("scrimTimeInput").value = dateTimeStringFromDate(new Date(state.scrimUnix * 1000));

  setTimezoneLabel();
  configureCreatorLink();
  configureStaffGuideVideo();
  bindEvents();

  renderBuilder();
  renderScrims();
  renderSettingsEditor();
  renderTemplateEditor();
  renderScrimPresetEditor();
  renderStaffLinksEditor();
  renderStaffLinksDock();
  renderSessionOrderEditor();
  renderScheduleBuilder();
  renderScheduleSettings();
  renderLocalizationControls();
  renderAnnouncementHistory();
  setView(getViewFromHash(), false);
  applyInterfaceLanguage();
  startTranslationObserver();
}

document.addEventListener("DOMContentLoaded", initialize);
