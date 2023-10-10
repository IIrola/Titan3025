document.onclick = function () {
    const BG = document.createElement("audio");
    BG.src = "../sounds/background.opus";
    BG.play();
    BG.setAttribute("preload", "auto");
    BG.setAttribute("controls", "none");
    BG.style.display = "none";
    document.body.appendChild(BG);
    BG.loop = true;
    BG.volume = 0.1;
    let nanai = BG.play();

    if (nanai !== undefined) {
        nanai.then(_ => {

        }).catch(error => {
            console.log(error);
        });
    }

}