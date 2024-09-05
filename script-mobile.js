const redirectLinksMobile = [
    {
        id: "instagram",
        label: "Instagram",
        redirectUrl: "https://instagram.com/xbox.originals",
        iconSrc: "./assets/imgs/icons/instagram.png",
        agregator: false,
    },
    {
        id: "threads",
        label: "Threads",
        redirectUrl: "https://www.threads.net/@xbox.originals",
        iconSrc: "./assets/imgs/icons/threads.png",
        agregator: false,
    },
    {
        id: "bsky",
        label: "BlueSky",
        redirectUrl: "https://bsky.app/profile/xboriginals.com.br",
        iconSrc: "./assets/imgs/icons/bluesky.svg",
        agregator: false,
    },
    {
        id: "facebook",
        label: "Facebook",
        redirectUrl: "https://facebook.com/XboxOriginals",
        iconSrc: "./assets/imgs/icons/facebook-icon.png",
        agregator: false,
    },
    {
        id: "x",
        label: "X / Twitter",
        redirectUrl: "https://x.com/XBOriginals",
        iconSrc: "./assets/imgs/icons/x.png",
        agregator: false,
    },
    {
        id: "telegram",
        label: "Telegram",
        iconSrc: "./assets/imgs/icons/telegram.png",
        agregator: true,
        agregatorLinks: [
            {
                id: "telegramN",
                label: "Notícias",
                redirectUrl: "https://t.me/XboxOriginals",
            },
            {
                id: "telegramG",
                label: "Grupo",
                redirectUrl: "https://t.me/XboxOriginalsGrupo",
            }
        ]
    },
    {
        id: "discord",
        label: "Discord",
        redirectUrl: "https://discord.com/invite/3j2kAUxGvc",
        iconSrc: "./assets/imgs/icons/discord.svg",
        agregator: false,
    },
    {
        id: "twitch",
        label: "Twitch",
        redirectUrl: "https://twitch.tv/xboxoriginals",
        iconSrc: "./assets/imgs/icons/twitch.png",
        agregator: false,
    },
    {
        id: "youtube",
        label: "YouTube",
        redirectUrl: "https://youtube.com/channel/UCE4rJvmj2scTFA-mJiRpl5A",
        iconSrc: "./assets/imgs/icons/youtube.png",
        agregator: false,
    },
]

const AgregatorLink = (object) => {
    const html =
        `<span class="agregator-link" onclick=redirecionarParaUrlPeloId('${object.id}')>
            ${object.label}
        </span>
        `;
    return html;
};

const ButtonLinkMobile = (object) => {

    if (!object.agregator) {
        const html =
            `
                <button class="link-btn" onclick="redirecionarParaUrlPeloId('${object.id}')">
                    <img class="icon-img" width="20" height="20" src="${object.iconSrc}">
                    <span>${object.label}</span>
                </button>
            `;

        return html;
    }

    if (object.agregator) {

        const html =
            `
                <div class="link-agregator">
                    <button class="link-btn agregator">
                        <div class="agregator-header">
                            <img class="icon-img" width="20" height="20" src="${object.iconSrc}">
                            <span>${object.label}</span>
                        </div>

                        <div class="agregator-links">
                            ${object.agregatorLinks.map((link) => AgregatorLink(link)).join(" | ")}
                        </div>
                    </button>
                </div>
            `;

        return html
    }
};