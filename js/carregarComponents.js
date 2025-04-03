export async function iniciarComponents() {

    async function carregarComponente(id, url) {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(id).innerHTML = html
    }

    await Promise.all([
        carregarComponente("header","./components/header.html"),
        carregarComponente("main", "./components/main.html"),
        carregarComponente("aboutUs", "./components/sobrenos.html"),
        carregarComponente("banners", "./components/banners.html"),
        carregarComponente("carrossel", "./components/carrossel.html"),
        carregarComponente("classes", "./components/classes.html"),
        carregarComponente("video", "./components/video.html"),
        carregarComponente("programacao", "./components/programacao.html"),
        carregarComponente("treinadores", "./components/treinadores.html"),
        carregarComponente("blog", "./components/blog.html"),
        carregarComponente("footer", "./components/footer.html")
    ]);
}
