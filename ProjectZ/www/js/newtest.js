function onDeviceReady() {
    console.log('Device ready');
}
document.addEventListener('deviceready', onDeviceReady, false);
var themes = ["Thème 1", "Thème 2", "Thème 3", "Thème 4", "Thème 5", "Thème 6", "Thème 7", "Thème 8", "Thème 9"];
var theme;
var themeListItem;
for (theme in themes) {
    themeListItem ="<a href=\"newtestquizz.html\" class=\"list-group-item list-group-item-action flex-column align-items-start  mh-25 \"><div class=\"d-flex w-100 \"><h4 class=\"mb-1\">" + themes[theme] + "</h4></div><p class=\"mb-1\"></p><hr class = \"interItemLine\"/></a>";
    $(themeListItem).appendTo("#listgroup");
}