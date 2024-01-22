let isModalOffen = false
let ModeToggle = false 

function ToggleMode() {
  ModeToggle = !ModeToggle
  if (ModeToggle) {
    document.body.classList += " dark"
  }
  else {
    document.body.classList.remove("dark")
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