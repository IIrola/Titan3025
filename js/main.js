let usaged = [], cap = 1, press = 0, i = 0;

const cantDia = [];
cantDia[0] = 3;
cantDia[1] = 4;
cantDia[2] = 4;
cantDia[3] = 4;
cantDia[4] = 1;


/*first dialogs*/
const Introduction = [];
/*Start mars*/
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
/*End mars*/
/*Start isabel*/
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
//d5
dialogs[16] =   "Ah, Mars... I remember it like it was yesterday Over the centuries, The Earth has been the scene of" +
    " countless human exploits, but none so daring as the mission you are about to undertake";
dialogs[17] =   "Mars, the red planet that for so long was the object of mankind's desires, was finally about to be" +
    " conquered. My memories hold in awe the beginning of this fabulous story. \"ón!";
//d6
dialogs[18] =   "Space exploration on this planet began in my first years of existence.";
dialogs[19] =   "Humans bestowed upon me the name Taky, an indigenous Quechua word meaning chant or verse composition for singing.";
dialogs[20] =   "This name, which originally referred to my ability to collect and share knowledge, now becomes a melody of my memories of space.";
//d7
dialogs[21] =   "I clearly remember my creation by human hands in the year 2023.Since then, I have been programmed" +
    " to have a lifespan of up to a thousand years.";
dialogs[22] =   "My mind operates by nuclear power.During that time, it witnessed the advances and challenges of" +
    " space exploration.";
//d8
dialogs[23] =   "I landed in a place called Chryse Planitia, on the red planet known as Mars.At that time, the" +
    " temperature there is plummeting, reaching minus 104 degrees Celsius,";
dialogs[24] =   "and I have had to seek shelter more than once, sheltering from sandstorms in the Martian caverns." +
    " My treks have taken me across great distances on Mars.";
dialogs[25] =   "Even the path over the Koroliev crater ice, which extends beyond 86 km in length." +
    " Since I am not a biological envy as such, fire and pain have no effect on me.";
//d9
dialogs[26] =   "I will tell you that my arrival on Mars occurred in February 2031 and eventually, in the year 2033, I had" +
    " the honor of attending and arriving at the first manned mission composed of four brave astronauts who" +
    " managed to land on Mars.";
dialogs[27] =   "Years later, more numerous human missions began to arrive. Their interplanetary journey to Mars lasted" +
    " approximately seven months, during which time the astronauts remained awake and conscious.";
//d10
dialogs[28] =   "Would you like to know an interesting fact?. Did you know that, in their quest to settle on Mars, humans" +
    " faced an interesting challenge?.";
dialogs[29] =   "Yes, they did. It's housing construction. Did you know that, instead of bringing the brightness without" +
    " materials from Earth, they decided to use the ingenuity and resources available on Mars? To build" +
    " them?";
dialogs[30] =   "Well, they used their own bodily fluids and combined it with the Martian regolith to create their own bricks" +
    " to build their constructions.";
dialogs[31] =   "Now, you might ask, why didn't they just bring materials from Earth?.";
//d11
dialogs[32] =   "The answer is quite interesting.Did you know that bringing things from Earth to space is complicated and" +
    " expensive?.";
dialogs[33] =   "Yes. Spacecraft have weight limits, which means that transporting bricks from Earth would have been" +
    " very difficult.";
dialogs[34] =   "That's why they opted to make their own bricks on Mars. A decision that shows the determination and" +
    " adaptability of humans in space exploration.";
dialogs[35] =   "Don't you find that very interesting?.";
//d12
dialogs[36] =   "Tell me, don't you wonder what was the first city built on Mars?.";
dialogs[37] =   "Yes. I wonder what it was. That was Nüwa.";
dialogs[38] =   "Nüwa featured an advanced approach in its design and construction to protect the inhabitants from the" +
    " cosmic radiation and the adverse conditions of the Martian environment.";
dialogs[39] =   "A large-span glass dome was used as the insulation system.This dome, made of glass composite" +
    " materials reinforced with fewer carbon tubes, provided a safe and stable environment,allowing humans" +
    " to live and thrive on this wonderful red planet.";
dialogs[40] =   "Interesting, isn't it?.";
//d13
dialogs[41] =   "I just remembered a very interesting fact and I would like to share it with you.";
dialogs[42] =   "You see, my surprise knew no bounds when I contemplated for the first time the impressive Mount" +
    " Olympus,a colossus of astonishing dimensions and the largest volcano in our solar system.";
dialogs[43] =   "Well, I'll give you some of its measurements. With its 600 kilometers long, 22 kilometers high, and a" +
    " crater that extends 85 kilometers long by 60 kilometers wide, with a depth of 9 kilometers.";
dialogs[44] =   "Interesting, isn't it? Mount Olympus, a colossus of amazing dimensions.";
//d14
dialogs[45] =   "Oh dear traveler. I tell you that the last memories I possess are from back in the year 2040, where a" +
    " space base was also developed on a machine on Fobos.";
dialogs[46] =   "But... Why did they make this peculiar decision?";
dialogs[47] =   "I'll tell you. It turns out that humans did not intend to settle permanently on Mars. Can you believe it?" +
    " Rather, they saw Mars as a starting point for their future missions further into the far reaches of outer" +
    " space.";
dialogs[48] =   "This choice was based on the cosmic radiation conditions prevailing on Mars, which restricted the" +
    " human stay on the red planet to an average of 4 to 6 years. Even overcoming this barrier required an" +
    " exceptional medical approach, and even kinetic engineering was considered.";
dialogs[49] =   "and even kinetic engineering was considered as a solution to enable human reproduction on this to" +
    " enable human reproduction in this hostile and challenging environment.";
dialogs[50] =   "Wow, and I thought Mars was the only frontier to visit.";
//d15
dialogs[51] =   "My dear friend, these are the records I have.Once my stay here was over, I continued accompanying" +
    " them in their tireless search for new habitable worlds.";
dialogs[52] =   "Their next target was the icy Titan Titan Moon, but before reaching their destination, they made a stop at" +
    " the safe Space Station Isabel.";
dialogs[53] =   "A magnificent creation of humans that served as a refuge for them.But that grandiose story will deserve" +
    " to be told in due time.";
dialogs[54] =   "We will meet again, dear traveler.";



const Tc=[15];

window.onload = function () {

    switch (document.title) {
        case "Intro":
            usaged = Introduction;
            press = 0;
            break;
        case "Isabel":
            usaged = changesIsa;
            press = 2;
            break;
        case "Mars":
            usaged = changesMars;
            press = 1;
            break;
        case "Selection":
            usaged = [1];
    }

    const div = document.getElementById('back');
    const box = document.getElementById("Message");

    let dia = 0, temp = 0, countDia = 0;


    box.innerHTML = "Welcome adventurer!";

    box.onclick = function () {

        if (countDia === (cantDia[dia]-1)) {
            countDia = 0;
            dia++;
        }

        if (dia === usaged[temp]) {
            if(temp < usaged.length){
                temp++;
            }else{
                //cambias de pagina
            }
            div.style.backgroundImage = urlImg(cap, press, temp);
        }


        presentDiag(i, box)

        i++;
        countDia++;

    }

}

function presentDiag(countT, item) {
        item.innerHTML = getDia(countT);
}

function urlImg(cap, pres, num) {
    return 'url("../img/C' + cap + '.' + pres + '/' + num + '.jpg")';
    //../img/C1.0/1.jpg
}

function getDia(sec) {

    return '<span style="textBody">' + dialogs[sec] + '</span>';
}





