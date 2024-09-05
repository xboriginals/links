
var isMobileScreen = window.matchMedia("(max-width: 600px)").matches;

const portalLink = {
    id: "xboriginals",
    label: "Portal Xbox Originals",
    redirectUrl: "https://xboriginals.com.br",
    iconSrc: "./assets/imgs/icons/xboriginals.png",
    agregator: false,
};

const ListItem = (object) => {
    return `<li>${isMobileScreen ? ButtonLinkMobile(object) : ButtonLinkDesktop(object)}</li>`
}

function redirecionarParaUrlPeloId(id) {
    if (id == 'xboriginals') {
        window.open(portalLink.redirectUrl, "_blank");
        return;
    }

    const allLinks = firstHalfRedirectLinksDesktop.concat(secondHalfRedirectLinksDesktop);
    const linkWithId = allLinks.find(x => x.id == id);
    if (!linkWithId || !linkWithId.redirectUrl) {
        alert("Ocorre um erro ao redirecionar para a página, entre em contato com a Xbox Originals via DM no Twitter/X ou outras redes.")
        return;
    }

    window.open(linkWithId.redirectUrl, "_blank");
}

function gerarAlertRecrutamento() {
    console.info(`               
                                           ███
                                          ███
                                         ███

                █████████  ███       ██████████   ███
                ███   ███  ███       ███    ███   ███
                ███   ███  ███       ██████████   ███
                ███   ███  ███       ███    ███ 
                █████████  ████████  ███    ███   ███

          Se você está lendo isso, é porque sabe das artimanhas.
        Mas o que talvez você não saiba, é que estamos recrutando.
    Caso tenha interesse nos contate através de nossas redes sociais.


                Agregador desenvolvido por: Vinicius Marcante
                        https://x.com/VMarcante
        `);
}

function reiniciaListas() {
    const desktopWrapper = document.getElementById("list-wrapper-desktop");
    const wrapperMobile = document.getElementById("list-wrapper-mobile");
    const firstHalfWrapper = document.getElementById("list-first-half");
    const secondHalfWrapper = document.getElementById("list-second-half");
    firstHalfWrapper.innerHTML = "";
    secondHalfWrapper.innerHTML = "";
    wrapperMobile.style.display = 'none';
    desktopWrapper.style.display = 'none';

}

function gerarTelaMobile() {
    const wrapperMobile = document.getElementById("list-wrapper-mobile");
    wrapperMobile.style.display = 'block';
    wrapperMobile.innerHTML = "";
    redirectLinksMobile.forEach((object) => {
        wrapperMobile.innerHTML += ListItem(object);
    });
}

function gerarTelaDesktop() {
    const desktopWrapper = document.getElementById("list-wrapper-desktop");
    const firstHalfWrapper = document.getElementById("list-first-half");
    const secondHalfWrapper = document.getElementById("list-second-half");

    desktopWrapper.style.display = 'flex';
    firstHalfWrapper.innerHTML = "";
    secondHalfWrapper.innerHTML = "";
    firstHalfRedirectLinksDesktop.forEach((object) => {
        firstHalfWrapper.innerHTML += ListItem(object);
    });

    secondHalfRedirectLinksDesktop.forEach((object) => {
        secondHalfWrapper.innerHTML += ListItem(object);
    });
}

function gerarFooter() {
    document.getElementById("footer-wrapper").innerHTML +=
        `<span>Xbox Originals © ${new Date().getFullYear()}. Todos direitos reservados.</span>`;
}

function renderizarBotoes() {
    const portalWrapper = document.getElementById("portal-wrapper");
    portalWrapper.innerHTML = ButtonLinkDesktop(portalLink, -1);
    reiniciaListas();
    isMobileScreen ? gerarTelaMobile() : gerarTelaDesktop();
}

function manipularRedimensionamento() {
    const novoStatusTelaMobile = window.matchMedia("(max-width: 600px)").matches;
    console.log({ novoStatusTelaMobile, isMobileScreen })
    if (novoStatusTelaMobile != isMobileScreen) {
        isMobileScreen = novoStatusTelaMobile;
        renderizarBotoes();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarBotoes();
    gerarFooter();
    gerarAlertRecrutamento();
    window.addEventListener('resize', manipularRedimensionamento)
});