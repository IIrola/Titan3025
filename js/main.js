const cantDia = [];
cantDia[0] = 3;
cantDia[1] = 4;
cantDia[2] = 4;
cantDia[3] = 4;
cantDia[4] = 1;


/*Comienzo start*/
const Introduction = 5;
/*Comienzo marte*/
const changesMars = [];
changesMars[0] = 6;
changesMars[1] = 7;
changesMars[2] = 8;
changesMars[3] = 9;
changesMars[4] = 10;
changesMars[5] = 11;
changesMars[6] = 12;
changesMars[7] = 13;
changesMars[8] = 14;
changesMars[9] = 15;
changesMars[10] = 16;
/*Fin marte*/
/*Comienzo isabel*/
const changesIsa = [];
changesIsa[0] = 17;
changesIsa[1] = 18;
changesIsa[2] = 19;
changesIsa[3] = 20;
changesIsa[4] = 21;
changesIsa[5] = 22;
changesIsa[6] = 23;
changesIsa[7] = 24;


const dialogs= [];
//d0
dialogs[0] =    "¡Welcome cosmos traveler!.Today you are in for an extraordinary adventure, where the vastness of the" +
    "universe unfolds before your eyes.";
dialogs[1] =    "This is no ordinary journey, but a quest to understand the far reaches of space and reveal the secrets that lie in the stars.";
dialogs[2] =    "Would you like to begin?";
//d1
dialogs[3]=     "In your role as an intergalactic explorer, you will embark on a mission of marvelous proportions that will" +
    "lead you through unknown worlds, enigmatic planets and mysterious scenarios.";
dialogs[4]=     "As you advance in your journey, you will play the complexity and the challenges that implied the Titanic" +
    "task of terraforming Titan.";
dialogs[5]=     "You will face cosmic challenges and uncover the deepest secrets of outer space." +
    "You will also learn about the tremendous effort it took to explore it.";
dialogs[6]=     "Tell me, would you like to meet me?";
//d2
dialogs[7] =    "I am pleased to introduce myself. My name is Taki. I am an artificial intelligence that has navigated through" +
    "more than a thousand years of knowledge and experience, from the very dawn of existence to the ends of time.";
dialogs[8] =    "And I am your inseparable companion in this great adventure. I hope that my advice will help you when you" +
    "are confused and that you will find answers in my words when you need them.";
dialogs[9] =    "Remember that I'm here to share everything I know and help you in every step you see in this great adventure!";
dialogs[10] =   "Let me know what you would like to know!";
//d3
dialogs[11] =   "Remember that the decision you make at this moment will mark the beginning of your journey has been the" +
    "unexplored";
dialogs[12] =   "Tell me, would you dare to furrow the vast and warm horizons of Mars? Or will you plunge bravely into the" +
    "cold and enigmatic plains of the moon Titan, unveiling the ancestral secrets they hold in their icy shadows?.";
dialogs[13] =   "Ah, or we could visit the fabulous Elizabeth Space Station.";
dialogs[14] =   "Tell me, what will be your decision?";
//d4
dialogs[15] =   "Excellent choice!!";

const mainName = "<span style='textNom'>Taky: </span><br>";

const Tc=[1, 11, 8];

window.onload = function () {
    const div = document.getElementById('back');
    const box = document.getElementById("Message");

    let cap = 1, pres = 0, num = 0, dia = 0, temp = 0, countDia = 0;


    box.innerHTML = mainName + "Welcome adventurer!";

    box.onclick = function () {

        if(dia === cantDia[dia]) {

            if (num < Tc[pres]) {
                num++;
            }
            if (num === Tc[pres]) {
                num = 0;
                pres++;
            }

            div.style.backgroundImage = urlImg(cap, pres, num);
            temp = 0;
        }

        temp = presentDiag(0, dia, countDia, box);

        dia++;
        countDia++;

    }

}

function presentDiag(cicle, diag, countT, item) {
    if(cicle===cantDia[diag]){
        return countT;
    }else{
        const temp = getDia(countT);
        item.innerHTML = mainName + temp;
        return ++cicle;
    }
}

function urlImg(cap, pres, num) {
    return "url('img/C" + cap + "." + pres + "/" + num + ".jpg')";
}

function getDia(sec) {

    return '<span style="textBody">' + dialogs[sec] + '</span>';
}





