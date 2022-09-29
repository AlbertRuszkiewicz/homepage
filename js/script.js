console.log("Hello dev :)");

let deleteRandomButtonElement = document.querySelector(".js-deleteRandom");
let randomElement = document.querySelector(".js-random");

let bodyElement = document.querySelector(".js-body");
let headerThemeElement = document.querySelector(".js-headerTheme");
let headerTitleThemeElement = document.querySelector(".js-headerTitleTheme");
let sectionTitleThemeElement = document.querySelector(".js-sectionTitleTheme");
let sectionIdiomThemeElement = document.querySelector(".js-sectionIdiomTheme");
let tableThemeElement = document.querySelector(".js-tableTheme");
let tableCaptionThemeElement = document.querySelector(".js-tableCaptionTheme");
let changeThemeButtonElement = document.querySelector(".js-changeTheme");
let themeNameElement = document.querySelector(".js-themeName");

deleteRandomButtonElement.addEventListener("click", () => {
    randomElement.remove();
});

changeThemeButtonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--dark");
    headerThemeElement.classList.toggle("header--dark");
    headerTitleThemeElement.classList.toggle("header__title--dark");
    sectionTitleThemeElement.classList.toggle("section__title--dark");
    sectionIdiomThemeElement.classList.toggle("section__idiom--dark");
    tableThemeElement.classList.toggle("table--dark");
    tableCaptionThemeElement.classList.toggle("table__caption--dark");

    themeNameElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
});
