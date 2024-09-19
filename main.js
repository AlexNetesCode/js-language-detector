const userLanguage = navigator.language || navigator.userLanguage;
if (userLanguage.includes("de")){
    window.location.pathname = '/de'
}
else {
    window.location.pathname = '/en'
}