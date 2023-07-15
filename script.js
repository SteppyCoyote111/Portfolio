function openLink() {
	window.location.href = "file:///G:/Fork/Portfolio_Site/Games/Portfel.html";
	// window.open("https://xusagi111.github.io/Portfolio/Games/");
    //window.open("https://www.example.com");
}

function GoToMainPage() {
	window.location.href = "file:///G:/Fork/Portfolio_Site/index.html";
	// window.open("https://xusagi111.github.io/Portfolio/");
}

  function goBack() {
    window.history.back();
 }


 //Создать бы класс для этого всего.

  function GoToReleasedGame() {
   window.location.href = IS_USING_GLOBAL_LINK == false ? RELEASED_GAMES_LOCAL : RELEASED_GAMES_GLOBAL;
 }


const IS_USING_GLOBAL_LINK = false;
const RELEASED_GAMES_LOCAL = "file:///G:/Fork/Portfolio_Site/Games/Portfel.html";
const RELEASED_GAMES_GLOBAL = "https://xusagi111.github.io/Portfolio/Games/";
