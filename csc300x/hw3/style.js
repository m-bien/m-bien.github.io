/* --- image gallery --- */

// expand image when clicked - reference: class demo
const gallery = document.querySelectorAll('img');
for (let index = 0; index < gallery.length; index++) {
    const element = gallery[index];
    element.addEventListener('click', expand);
}

function expand(event) {
    const smallImage = event.currentTarget;
    const bigImage = document.querySelector(".expand");
    bigImage.classList.remove('expand');
    bigImage.classList.add('default');
    smallImage.classList.remove('default');
    smallImage.classList.add('expand');
}

// toggle description
let lastElement;

function show(idToShow) {
  const elementToShow = document.getElementById(idToShow);
  if (lastElement != null) {
    lastElement.classList.remove('selected');
  }
  elementToShow.classList.add('selected');
  lastElement = elementToShow;
}

/* --- meal plan --- */

// rip