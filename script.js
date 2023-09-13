const redirectLinks = [
    {
        label: "Portal Xbox Originals",
        redirectUrl: "https://xboriginals.com.br",
        iconSrc: "./assets/imgs/icons/xboriginals.png",
    },
    {
        label: "X (Twitter)",
        redirectUrl: "https://twitter.com/XBOriginals",
        iconSrc: "./assets/imgs/icons/x.png",
    },
    {
        label: "Facebook",
        redirectUrl: "https://twitter.com/XBOriginals",
        iconSrc: "./assets/imgs/icons/Facebook.png",
    },
    {
        label: "Discord",
        redirectUrl: "https://discord.com/invite/3j2kAUxGvc",
        iconSrc: "./assets/imgs/icons/discord.svg",
    },
    {
        label: "Telegram - Notícias",
        redirectUrl: "https://t.me/XBOriginals",
        iconSrc: "./assets/imgs/icons/telegram.png",
    },
    {
        label: "Telegram - Grupo",
        redirectUrl: "https://t.me/XBOriginalsGrupo",
        iconSrc: "./assets/imgs/icons/telegram.png",
    },
    {
        label: "YouTube",
        redirectUrl: "https://youtube.com/channel/UCE4rJvmj2scTFA-mJiRpl5A",
        iconSrc: "./assets/imgs/icons/youtube.png",
    },
    {
        label: "Twitch",
        redirectUrl: "https://twitch.tv/xboxoriginals",
        iconSrc: "./assets/imgs/icons/twitch.png",
    }
]
const RedirectLink = (object, index) => {
    const html =
        `   <li>
                <button class="link-btn" onclick="redirectToUrl(${index})">
                    <img class="icon-img" width="20" height="20" src="${object.iconSrc}">
                    <span>${object.label}</span>
                </button>
            </li>
        `;

    return html;
};

function redirectToUrl(index) {
    const redirectObj = redirectLinks[index];
    if (!redirectObj || !redirectObj.redirectUrl) {
        alert("Ocorre um erro ao redirecionar para a página, entre em contato com a Xbox Originals via DM no Twitter/X")
        return;
    }

    window.open(redirectObj.redirectUrl, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    const listWrapper = document.getElementById("list-wrapper");
    redirectLinks.forEach((object, index) => {
        listWrapper.innerHTML += RedirectLink(object, index);
    });
});
