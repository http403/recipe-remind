module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const unread = document.querySelector("#app > div > div > div.AppSidebarLayout > div > div > div > div.AppSidebarLayout-sidebar > div.NavigationList > nav > section:nth-child(2) > ul > li > a > div > div").innerText;

        Franz.setBadge(unread)
    };

    Franz.loop(getMessages);
}