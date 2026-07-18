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
    modes: ["duos", "squads"],
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
  secondLobbyOffsetMinutes: 5,
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
        duos: { delayMinutes: 15, firstReacts: 55, secondReacts: 110 },
        squads: { delayMinutes: 15, firstReacts: 25, secondReacts: 50 },
      },
    },
  },
};

function createDefaultTemplate(session, mode, secondLobby) {
  const lines = [
    "@everyone",
    "",
    "**{{session_title}}{{mode_suffix}}**",
    "",
  ];

  if (secondLobby) lines.push("**Second Lobby**", "");

  lines.push(
    "{{emoji}} Registration opens @ {{registration}}",
    "",
    "{{emoji}} First Game Commences @ {{first_game}}",
    "",
    "The host for this session is: {{host}}, Direct Message them for help.",
    ""
  );

  if (!secondLobby || session.value.startsWith("solos")) {
    lines.push(
      "\u2022 Session lasts 3 Games. **Miss a single game and you will be banned.**",
      "\u2022 Make sure to read {{channels}} before the games."
    );
    if (session.extra) lines.push("{{extra}}");
    lines.push("");
  }

  if (secondLobby) {
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
      primary: createDefaultTemplate(session, mode, false),
      second: createDefaultTemplate(session, mode, true),
    };
  });
});

const STORAGE = {
  discordId: "nobleDiscordId",
  announceMode: "nobleAnnounceMode",
  timestampHelper: "nobleTimestampHelper",
  lastView: "nobleLastPage",
  settings: "nobleCustomSettingsV1",
  scheduleSettings: "nobleScheduleSettingsV1",
  staffLinks: "nobleStaffLinksV1",
  solosSecondLobbyCorrection: "nobleSolosSecondLobby200V1",
  div0DelayCorrection: "nobleDiv0Delay15V1",
};

const CREATOR_DISCORD_USER_ID = "831136990102945833";

const state = {
  unix: null,
  sessionKind: "solos",
  queueType: "duos",
  discordId: "",
  announceMode: true,
  includeSecondLobby: false,
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
};

let toastTimer = null;

function byId(id) {
  return document.getElementById(id);
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
  return SESSION_KINDS.find((session) => session.value === state.sessionKind) || SESSION_KINDS[0];
}

function getMode(sessionKind = state.sessionKind) {
  return sessionKind === "solos" || sessionKind === "solos_closed" ? "solos" : state.queueType;
}

function getModeLabel(mode) {
  if (mode === "solos") return "Solos";
  if (mode === "squads") return "Squads";
  return "Duos";
}

function getSessionSettings(sessionKind = state.sessionKind, mode = getMode(sessionKind)) {
  return state.settings.sessions[sessionKind].modes[mode];
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

async function copyText(text, successMessage = "Copied to clipboard") {
  if (!text) return;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const temporary = document.createElement("textarea");
      temporary.value = text;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();
      document.execCommand("copy");
      temporary.remove();
    }
    showToast(successMessage);
  } catch (error) {
    console.error(error);
    showToast("Clipboard access was blocked");
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
    empty.textContent = "No valid links yet. Add one in settings.";
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
    nameMeta.textContent = "Label";
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
    urlMeta.textContent = "Website URL";
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
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${link.label}`);
    remove.addEventListener("click", () => removeStaffLink(index));

    row.append(order, nameLabel, urlLabel, remove);
    editor.append(row);
  });

  if (!state.staffLinks.length) {
    const empty = document.createElement("p");
    empty.className = "staff-link-editor-empty";
    empty.textContent = "No shortcuts yet. Add a link to rebuild the floating box.";
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
  return ["builder", "scrims", "extension", "settings", "guide"].includes(view) ? view : "builder";
}

function setView(view, updateHash = true) {
  const validView = ["builder", "scrims", "extension", "settings", "guide"].includes(view) ? view : "builder";
  const titles = {
    builder: "Session builder",
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

  byId("activeViewTitle").textContent = titles[validView];

  if (updateHash && window.location.hash !== `#${validView}`) {
    history.pushState(null, "", `#${validView}`);
  }

  try {
    localStorage.setItem(STORAGE.lastView, validView);
  } catch {
    // Browser storage is optional.
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
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
    button.textContent = `${pad(hour)}:00`;

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

function renderSessionCards() {
  const container = byId("sessionCards");
  container.replaceChildren();

  SESSION_KINDS.forEach((session) => {
    const mode = session.modes[0];
    const config = getSessionSettings(session.value, mode);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "session-card";
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
    meta.textContent = `${config.delayMinutes} min to first game`;
    copy.append(name, meta);
    button.append(image, copy);

    button.addEventListener("click", () => {
      state.sessionKind = session.value;
      renderBuilder();
    });

    container.appendChild(button);
  });
}

function renderQueueButtons() {
  const block = byId("queueTypeBlock");
  const container = byId("queueButtons");
  const singleMode = getSession().modes.length === 1;
  block.hidden = singleMode;
  container.replaceChildren();

  if (singleMode) return;

  [
    { value: "duos", label: "Duos" },
    { value: "squads", label: "Squads" },
  ].forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment-button";
    button.textContent = mode.label;
    button.setAttribute("aria-pressed", String(state.queueType === mode.value));
    if (state.queueType === mode.value) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      state.queueType = mode.value;
      renderBuilder();
    });
    container.appendChild(button);
  });
}

function formatClock(unix) {
  if (unix === null) return "--:--";
  return new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit" }).format(new Date(unix * 1000));
}

function formatHeroDate(unix) {
  if (unix === null) return "Select a date and time";
  return new Intl.DateTimeFormat([], {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(unix * 1000));
}

function renderTimeline() {
  const config = getSessionSettings();
  const offset = state.includeSecondLobby ? state.settings.secondLobbyOffsetMinutes : 0;
  const registrationUnix = state.unix === null ? null : state.unix + offset * 60;
  const firstGameUnix = registrationUnix === null ? null : registrationUnix + config.delayMinutes * 60;

  byId("timelineRegistration").textContent = formatClock(registrationUnix);
  byId("timelineGame").textContent = formatClock(firstGameUnix);
  byId("timelineDelay").textContent = `+${config.delayMinutes} min`;
  byId("heroTime").textContent = formatClock(registrationUnix);
  byId("heroDate").textContent = formatHeroDate(registrationUnix);
  byId("secondLobbyHint").textContent = `Registration shifts by ${state.settings.secondLobbyOffsetMinutes} minutes`;

  const summary = state.includeSecondLobby
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
  const offset = state.includeSecondLobby ? state.settings.secondLobbyOffsetMinutes : 0;
  const registrationUnix = state.unix + offset * 60;
  const firstGameUnix = registrationUnix + config.delayMinutes * 60;
  const queueSuffix = mode === "squads" ? " (Squads)" : "";
  const host = state.discordId.trim() ? `<@${state.discordId.trim()}>` : "<@USER>";
  const unit = mode === "squads" ? "squad" : mode === "duos" ? "duo" : "player";
  const templateKey = state.includeSecondLobby ? "second" : "primary";
  const template = config.templates?.[templateKey] || createDefaultTemplate(session, mode, state.includeSecondLobby);
  const values = {
    session_title: session.title,
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

function renderAnnouncement() {
  const session = getSession();
  const output = byId("announcementText");
  const copyButton = byId("copyAnnouncement");

  byId("announceSessionTitle").textContent = session.label;
  byId("selectedSessionName").textContent = session.label;
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
  renderQueueButtons();
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
  const berlinTime = new Intl.DateTimeFormat([], {
    timeZone: "Europe/Berlin",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
  byId("scrimTimePreview").textContent = `Berlin schedule: ${berlinTime} / Discord: <t:${state.scrimUnix}:t>`;
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
  renderQuickAdjustmentSettings();

  SESSION_KINDS.forEach((session) => {
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
    meta.textContent = session.modes.length === 1 ? "1 game mode" : `${session.modes.length} game modes`;
    identityCopy.append(name, meta);
    identity.append(image, identityCopy);

    const modeList = document.createElement("div");
    modeList.className = "settings-mode-list";
    const columnHead = document.createElement("div");
    columnHead.className = "settings-mode-columns";
    ["Mode", "Game delay", "1 lobby", "2 lobbies"].forEach((column) => {
      const label = document.createElement("span");
      label.textContent = column;
      columnHead.appendChild(label);
    });
    modeList.appendChild(columnHead);
    session.modes.forEach((mode) => {
      const config = getSessionSettings(session.value, mode);
      const row = document.createElement("div");
      row.className = "settings-mode-row";
      const modeName = document.createElement("span");
      modeName.className = "mode-name";
      modeName.textContent = getModeLabel(mode);
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
  return SESSION_KINDS.find((session) => session.value === state.templateSessionKind) || SESSION_KINDS[0];
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
  SESSION_KINDS.forEach((session) => {
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
    button.textContent = getModeLabel(mode);
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
    { value: "second", label: "Second lobby" },
  ].forEach((lobby) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment-button";
    button.textContent = lobby.label;
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

function saveSettings() {
  state.settings = mergeSavedSettings(state.settings);
  state.staffLinks = sanitizeStaffLinks(state.staffLinks);
  try {
    localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
    localStorage.setItem(STORAGE.staffLinks, JSON.stringify(state.staffLinks));
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
  byId("templateSaveState").textContent = "Saved locally";
  renderBuilder();
  renderScrims();
  showToast("Experience settings saved");
}

function resetSettings() {
  if (!window.confirm("Restore timing, reaction goals, message templates, and staff links to the Noble defaults?")) return;
  state.settings = cloneDefaults();
  state.staffLinks = cloneStaffLinks();
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

function loadPreferences() {
  try {
    const savedDiscordId = localStorage.getItem(STORAGE.discordId);
    if (savedDiscordId) state.discordId = savedDiscordId;

    const savedAnnounceMode = localStorage.getItem(STORAGE.announceMode);
    if (savedAnnounceMode === "0") state.announceMode = false;
    if (savedAnnounceMode === "1") state.announceMode = true;

    const savedSettings = localStorage.getItem(STORAGE.settings);
    if (savedSettings) state.settings = mergeSavedSettings(JSON.parse(savedSettings));
    applySolosSecondLobbyCorrection();
    applyDiv0DelayCorrection();

    const savedScheduleSettings = localStorage.getItem(STORAGE.scheduleSettings);
    if (savedScheduleSettings) {
      state.scheduleSettings = mergeScheduleSettings(JSON.parse(savedScheduleSettings));
    }

    const savedStaffLinks = localStorage.getItem(STORAGE.staffLinks);
    if (savedStaffLinks) state.staffLinks = sanitizeStaffLinks(JSON.parse(savedStaffLinks));
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

function bindEvents() {
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
    try {
      if (state.discordId) localStorage.setItem(STORAGE.discordId, state.discordId);
      else localStorage.removeItem(STORAGE.discordId);
    } catch {
      // Browser storage is optional.
    }
    renderAnnouncement();
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
    renderTimeline();
    renderAnnouncement();
  });
  byId("copyAnnouncement").addEventListener("click", () => {
    copyText(byId("announcementText").value, "Announcement copied");
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
  byId("openScheduleModal").addEventListener("click", () => {
    renderScheduleBuilder();
    setScheduleTab("builder");
    openAppModal("scheduleModal");
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
    renderTimeline();
    renderAnnouncement();
  });
  byId("saveSettings").addEventListener("click", saveSettings);
  byId("resetSettings").addEventListener("click", resetSettings);
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
  if (!state.settings.scrimCategories.some((category) => category.id === state.scrimQueueType)) {
    state.scrimQueueType = state.settings.scrimCategories[0].id;
  }
  state.settingsScrimCategoryId = state.scrimQueueType;
  setTimezoneLabel();
  configureCreatorLink();
  bindEvents();

  const now = new Date();
  state.scheduleDate = localDateString(now);
  state.unix = Math.floor(now.getTime() / 1000);
  byId("datetime").value = dateTimeStringFromDate(now);
  byId("discordId").value = state.discordId;
  byId("announceMode").checked = state.announceMode;

  state.scrimUnix = computeNextScrimUnix(state.scrimQueueType);
  byId("scrimTimeInput").value = dateTimeStringFromDate(new Date(state.scrimUnix * 1000));

  renderBuilder();
  renderScrims();
  renderSettingsEditor();
  renderTemplateEditor();
  renderScrimPresetEditor();
  renderStaffLinksEditor();
  renderStaffLinksDock();
  renderScheduleBuilder();
  renderScheduleSettings();
  setView(getViewFromHash(), false);
}

document.addEventListener("DOMContentLoaded", initialize);
