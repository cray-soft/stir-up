// Stir Up — install instructions page.
// Flow: pick language -> 18+ gate -> teaser + platform pick -> instruction image.
// Instruction images live in images/ named stir-up-<platform>-instructions-<lang>.png

// Production app URL (EAS Hosting prod alias). Swap to stirup.app if that
// custom domain goes live.
const APP_URL = 'https://stir-up.expo.app';

const COPY = {
  en: {
    tagline: 'The party game that turns up the heat.',
    teaser:
      'Gather 4–10 players and climb three rising levels. Draw a card, take the dare, earn your points. Innocent on the surface… a little spicier underneath. Adults only.',
    levelWarm: 'Warm',
    levelHot: 'Hot',
    levelFire: 'On Fire',
    whyNote:
      "Because of its adult content, Stir Up isn't allowed on the App Store or Google Play. Instead, add it to your home screen — it then opens full-screen, just like an installed app.",
    installHeading: 'Add Stir Up to your home screen',
    iosButton: 'iPhone / iPad',
    androidButton: 'Android',
    changeLang: 'Change language',
    backButton: 'BACK',
    imgAlt: 'Step-by-step instructions to add Stir Up to your home screen',
    ageTitle: 'ARE YOU 18+?',
    ageBody: 'Stir Up is an adults-only party game with suggestive content. You must be 18 or older to continue.',
    ageConfirm: "I'M 18 OR OLDER",
    ageDeny: "I'M UNDER 18",
    ageBlocked: 'Sorry — Stir Up is for adults only.',
    openApp: 'OPEN STIR UP',
  },
  es: {
    tagline: 'El juego de fiesta que sube la temperatura.',
    teaser:
      'Reúne de 4 a 10 jugadores y avanza por tres niveles cada vez más intensos. Saca una carta, acepta el reto, gana tus puntos. Inocente por fuera… picante por dentro. Solo para adultos.',
    levelWarm: 'Tibio',
    levelHot: 'Caliente',
    levelFire: 'En Llamas',
    whyNote:
      'Por su contenido para adultos, Stir Up no está permitido en la App Store ni en Google Play. En su lugar, agrégalo a tu pantalla de inicio: se abrirá en pantalla completa, igual que una app instalada.',
    installHeading: 'Agrega Stir Up a tu pantalla de inicio',
    iosButton: 'iPhone / iPad',
    androidButton: 'Android',
    changeLang: 'Cambiar idioma',
    backButton: 'VOLVER',
    imgAlt: 'Instrucciones paso a paso para agregar Stir Up a tu pantalla de inicio',
    ageTitle: '¿ERES MAYOR DE 18?',
    ageBody: 'Stir Up es un juego de fiesta solo para adultos con contenido sugerente. Debes tener 18 años o más para continuar.',
    ageConfirm: 'TENGO 18 O MÁS',
    ageDeny: 'SOY MENOR DE 18',
    ageBlocked: 'Lo sentimos — Stir Up es solo para adultos.',
    openApp: 'ABRIR STIR UP',
  },
};

let lang = 'en';

const steps = {
  lang: document.getElementById('lang-screen'),
  age: document.getElementById('age-screen'),
  teaser: document.getElementById('teaser-screen'),
  instructions: document.getElementById('instructions-screen'),
};

function show(step) {
  Object.values(steps).forEach((s) => s.classList.remove('is-active'));
  steps[step].classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyCopy() {
  const c = COPY[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (c[key]) el.textContent = c[key];
  });
}

// Language pick -> 18+ gate
document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    lang = btn.getAttribute('data-lang');
    applyCopy();
    document.getElementById('age-blocked').hidden = true;
    show('age');
  });
});

// 18+ gate
document.getElementById('age-confirm').addEventListener('click', () => {
  document.getElementById('app-link').href = APP_URL;
  show('teaser');
});
document.getElementById('age-deny').addEventListener('click', () => {
  document.getElementById('age-blocked').hidden = false;
});

// Platform pick -> load the matching instruction image
document.querySelectorAll('[data-platform]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const platform = btn.getAttribute('data-platform');
    const c = COPY[lang];
    const img = document.getElementById('instructions-img');
    img.src = `images/stir-up-${platform}-instructions-${lang}.png`;
    img.alt = c.imgAlt;
    document.getElementById('instructions-app-link').href = APP_URL;
    show('instructions');
  });
});

// Back / change-language links
document.querySelectorAll('[data-back]').forEach((btn) => {
  btn.addEventListener('click', () => show(btn.getAttribute('data-back')));
});
