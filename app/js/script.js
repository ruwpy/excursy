// burger menu

const hamburger = document.querySelector('.nav__toggler')
const navMenu = Array.from(document.querySelectorAll('.collapsed'))
const animation = document.querySelector('.nav__list')

hamburger.addEventListener("click", () => {
  navMenu.forEach((collapsible) => {
    collapsible.classList.toggle("collapsed")
  });
});

// scroll to section
