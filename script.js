function GoToMainPage() {
	window.location.href = IS_USING_GLOBAL_LINK == false ? GO_TO_MAIN_PAGE_LOCAL : GO_TO_MAIN_PAGE_GLOBAL;
	// window.open("https://xusagi111.github.io/Portfolio/");
}

  function goBack() {
    window.history.back();
 }


 //Создать бы класс для этого всего.

  function GoToReleasedGame() {
   window.location.href = IS_USING_GLOBAL_LINK == false ? RELEASED_GAMES_LOCAL : RELEASED_GAMES_GLOBAL;
 }

const IS_USING_GLOBAL_LINK = true;
const RELEASED_GAMES_LOCAL = "file:///G:/Fork/Portfolio_Site/Games/Portfel.html";
const RELEASED_GAMES_GLOBAL = "https://xusagi111.github.io/Portfolio/Games/Portfel.html";

const GO_TO_MAIN_PAGE_LOCAL = "file:///G:/Fork/Portfolio_Site/index.html";
const GO_TO_MAIN_PAGE_GLOBAL = "https://xusagi111.github.io/Portfolio/index.html";


//Item To Cons Element
const items = [
    { title: 'Элемент 1', description: 'Описание элемента 1' },
    { title: 'Элемент 2', description: 'Описание элемента 2' },
    { title: 'Элемент 3', description: 'Описание элемента 3' },
    { title: 'Элемент 4', description: 'Описание элемента 4' },
];

let currentIndex = 0;

function showItemDescription(index) {
    currentIndex = index;
    const item = items[currentIndex];
    const itemDescription = document.getElementById('item-description');
    itemDescription.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div class="navigation-buttons">
            <button onclick="prevItem()">Назад</button>
            <button onclick="nextItem()">Вперед</button>
        </div>
    `;
    itemDescription.style.display = 'block';

    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

function hideItemDescription() {
    const itemDescription = document.getElementById('item-description');
    itemDescription.style.display = 'none';

    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function prevItem() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    showItemDescription(currentIndex);
}

function nextItem() {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    showItemDescription(currentIndex);
}

//ItemEndConstElement