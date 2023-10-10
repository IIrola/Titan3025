document.onclick = function () {
    const BG = document.createElement("audio");
    BG.src = "../sounds/background.opus";
    BG.play();
    BG.setAttribute("preload", "auto");
    BG.setAttribute("controls", "none");
    BG.style.display = "none";
    document.body.appendChild(BG);
    BG.loop = true;
    let nanai = BG.play();
}