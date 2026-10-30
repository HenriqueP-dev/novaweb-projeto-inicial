// Dados fixos da demonstração (login apenas visual, sem autenticação real)
const USUARIO_DEMO = { email: "demo@novaweb.com", senha: "senha123" };
const CHAVE_SESSAO = "novaweb-logado";

// Protege as páginas internas: sem "login" volta para a tela inicial
function protegerPagina() {
    if (sessionStorage.getItem(CHAVE_SESSAO) !== "sim") {
        window.location.replace("../index.html");
    }
}

// Link "Sair" encerra a sessão de demonstração
function configurarSair() {
    const sair = document.getElementById("link-sair");
    if (sair) {
        sair.addEventListener("click", () => sessionStorage.removeItem(CHAVE_SESSAO));
    }
}

// ----- Login -----
function mostrarErro(campo, mensagem) {
    const aviso = document.getElementById(campo.id + "-erro");
    aviso.textContent = mensagem;
    if (mensagem) {
        campo.setAttribute("aria-invalid", "true");
    } else {
        campo.removeAttribute("aria-invalid");
    }
    return mensagem === "";
}

function configurarLogin() {
    const form = document.getElementById("form-login");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const erroGeral = document.getElementById("erro-geral");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        erroGeral.textContent = "";

        const valorEmail = email.value.trim();
        let msgEmail = "";
        if (valorEmail === "") {
            msgEmail = "Informe seu e-mail.";
        } else if (!email.checkValidity()) {
            msgEmail = "Digite um e-mail válido, como nome@empresa.com.";
        }
        const msgSenha = senha.value === "" ? "Informe sua senha." : "";

        const emailOk = mostrarErro(email, msgEmail);
        const senhaOk = mostrarErro(senha, msgSenha);

        if (!emailOk) {
            email.focus();
            return;
        }
        if (!senhaOk) {
            senha.focus();
            return;
        }

        if (valorEmail.toLowerCase() === USUARIO_DEMO.email && senha.value === USUARIO_DEMO.senha) {
            sessionStorage.setItem(CHAVE_SESSAO, "sim");
            window.location.href = "pages/perfil.html";
        } else {
            erroGeral.textContent = "E-mail ou senha incorretos. Use os dados de demonstração abaixo.";
        }
    });
}

// ----- Consulta -----
function configurarBusca() {
    const busca = document.getElementById("busca");
    const linhas = document.querySelectorAll("#tabela-corpo tr[data-linha]");
    const semResultado = document.getElementById("sem-resultado");
    const contador = document.getElementById("contador");

    function filtrar() {
        const termo = busca.value.trim().toLowerCase();
        let visiveis = 0;

        linhas.forEach((linha) => {
            const combina = linha.textContent.toLowerCase().includes(termo);
            linha.hidden = !combina;
            if (combina) {
                visiveis++;
            }
        });

        semResultado.hidden = visiveis !== 0;
        contador.textContent = visiveis === 1 ? "1 registro encontrado" : visiveis + " registros encontrados";
    }

    busca.addEventListener("input", filtrar);
    filtrar();
}

// ----- Inicialização por página -----
const pagina = document.body.dataset.pagina;
if (pagina === "login") {
    configurarLogin();
} else {
    protegerPagina();
    configurarSair();
    if (pagina === "consulta") {
        configurarBusca();
    }
}
