const firstHalfRedirectLinksDesktop = [
    {
        id: "threads",
        label: "Threads",
        redirectUrl: "https://www.threads.net/@xbox.originals",
        iconSrc: "./assets/imgs/icons/threads.png",
    },
    {
        id: "bsky",
        label: "BlueSky",
        redirectUrl: "https://bsky.app/profile/xboriginals.com.br",
        iconSrc: "./assets/imgs/icons/bluesky.svg",
    },
    {
        id: "x",
        label: "X / Twitter",
        redirectUrl: "https://x.com/XBOriginals",
        iconSrc: "./assets/imgs/icons/x.png",
    },
    {
        id: "telegramN",
        label: "Telegram - Notícias",
        iconSrc: "./assets/imgs/icons/telegram.png",
        redirectUrl: "https://t.me/XboxOriginals"
    },
    {
        id: "youtube",
        label: "YouTube",
        redirectUrl: "https://youtube.com/channel/UCE4rJvmj2scTFA-mJiRpl5A",
        iconSrc: "./assets/imgs/icons/youtube.png",
    },
]

const secondHalfRedirectLinksDesktop = [
    {
        id: "instagram",
        label: "Instagram",
        redirectUrl: "https://instagram.com/xbox.originals",
        iconSrc: "./assets/imgs/icons/instagram.png",
    },
    {
        id: "facebook",
        label: "Facebook",
        redirectUrl: "https://facebook.com/XboxOriginals",
        iconSrc: "./assets/imgs/icons/Facebook.png",
    },
    {
        id: "discord",
        label: "Discord",
        redirectUrl: "https://discord.com/invite/3j2kAUxGvc",
        iconSrc: "./assets/imgs/icons/discord.svg",
    },
    {
        id: "telegramG",
        label: "Telegram - Grupo",
        iconSrc: "./assets/imgs/icons/telegram.png",
        redirectUrl: "https://t.me/XboxOriginalsGrupo"
    },

    {
        id: "twitch",
        label: "Twitch",
        redirectUrl: "https://twitch.tv/xboxoriginals",
        iconSrc: "./assets/imgs/icons/twitch.png",
    },
]

const ButtonLinkDesktop = (object) => {
    const html =
        `
            <button class="link-btn" onclick="redirecionarParaUrlPeloId('${object.id}')">
                <img class="icon-img" width="20" height="20" src="${object.iconSrc}">
                <span>${object.label}</span>
            </button>
    `;

    return html;
}