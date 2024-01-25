let isModalOffen = false;
let ModeToggle = localStorage.getItem("darkMode") === "true";

function ToggleMode() {
  ModeToggle = !ModeToggle;
  localStorage.setItem("darkMode", ModeToggle.toString());

  if (ModeToggle) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

if (ModeToggle) {
  document.body.classList.add("dark");
}


const scaleFactor = 1 / 20;

function HinterGrund(event) {
  const formen = document.querySelectorAll(".form");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < formen.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;

    formen[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function Kontakt(event) {
  event.preventDefault();
  const laden = document.querySelector(".modal__overlay--laden");
  const ok = document.querySelector(".modal__overlay--ok");
  laden.classList += " modal__overlay--sichtbar";
  emailjs.sendForm(
      "service_8nzey77",
      "template_3skq1nt",
      event.target,
      "KInLe15jJWbzGK_lv"
    ).then(() => {
      laden.classList.remove("modal__overlay--sichtbar");
      ok.classList += " modal__overlay--sichtbar";
    }).catch(() => {
      laden.classList.remove("modal__overlay--sichtbar");
      alert(
        "Der E-Mail-Dienst ist vorübergehend nicht verfügbar. Bitte kontaktieren Sie mich direkt unter mohammaddakki@gmail.com"
      );
    });
}

function ToggleModal() {
    if (isModalOffen) {
        isModalOffen = false;
        return document.body.classList.remove("modal__offen");
      }
      isModalOffen = true;
      document.body.classList += " modal__offen";
      
}
