const Window = function (tabs) {
    this.tabs = tabs;
};

Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab');
    return this;
};


Window.prototype.tabClose = function (index) {
    this.tabs.splice(index, 1);
    return this;
};

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);


const finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);