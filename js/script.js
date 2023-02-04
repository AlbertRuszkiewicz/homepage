{
    const welcome = () => { console.log("Hello dev :)") };

    const removeRandomSection = () => {
        const randomElement = document.querySelector(".js-random");
        randomElement.remove();
    };

    const changeTheme = () => {
        const bodyElement = document.querySelector(".js-body");
        const headerThemeElement = document.querySelector(".js-headerTheme");
        const headerTitleThemeElement = document.querySelector(".js-headerTitleTheme");
        const sectionTitleThemeElement = document.querySelector(".js-sectionTitleTheme");
        const sectionIdiomThemeElement = document.querySelector(".js-sectionIdiomTheme");
        const tableThemeElement = document.querySelector(".js-tableTheme");
        const tableCaptionThemeElement = document.querySelector(".js-tableCaptionTheme");
        const themeNameElement = document.querySelector(".js-themeName");

        bodyElement.classList.toggle("body--dark");
        headerThemeElement.classList.toggle("header--dark");
        headerTitleThemeElement.classList.toggle("header__title--dark");
        sectionTitleThemeElement.classList.toggle("section__title--dark");
        sectionIdiomThemeElement.classList.toggle("section__idiom--dark");
        tableThemeElement.classList.toggle("table--dark");
        tableCaptionThemeElement.classList.toggle("table__caption--dark");
        themeNameElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
    };
    
    const init = () => {
        welcome();

        const deleteRandomButtonElement = document.querySelector(".js-deleteRandom");
        const changeThemeButtonElement = document.querySelector(".js-changeTheme");

        deleteRandomButtonElement.addEventListener("click", removeRandomSection);
        changeThemeButtonElement.addEventListener("click", changeTheme);
    };

    init();
}