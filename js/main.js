const cantDia = [];
cantDia[0] = 3;
cantDia[1] = 4;
cantDia[2] = 6;
cantDia[3] = 5;
cantDia[4] = 1;

const dialogs= [];

dialogs[0] =    "Bienvenido, viajero del cosmos, Hoy te encuentras ante una aventura extraordinaria, donde la vastedad del universo se despliega ante tus ojos.";
dialogs[1] =    "Este no es un viaje común, sino una búsqueda para comprender los confines del espacio y desvelar los secretos que yacen en las estrellas.";
dialogs[2] =    "¿Te gustaría comenzar?";
dialogs[3]=     "En tu papel como explorador intergaláctico, te lanzarás a una misión de proporciones maravillosas que te conducirán a través de mundos desconocidos, planetas enigmáticos y escenarios misteriosos.";
dialogs[4]=     "A medida que avanzas en tu viaje, desentrañarás la complejidad y los desafíos que implicó la titánica tarea de terraformar Titán.";
dialogs[5]=     "Enfrentarás desafíos cósmicos y desvelarás los secretos más profundos del espacio exterior, así mismo conocerás el tremendo esfuerzo que conllevo explorarlo.";
dialogs[6]=     "¿Te gustaría conocerme?";
dialogs[7] =    "Me complace presentarme.";
dialogs[8] =    "Mi nombre es Taky, soy una Inteligencia Artificial que ha navegado a través de más de 1.000 años de conocimiento y experiencia.";
dialogs[9] =    "Desde los albores mismos de la existencia hasta los confines finales del tiempo y seré tu compañera inseparable en esta gran aventura.";
dialogs[10] =   "Espero que mis consejos te ayuden cuando estés confundido y que encuentres respuestas en mis palabras cuando las necesites.";
dialogs[11] =   "Recuerda que estoy aquí para compartir todo lo que sé y ayudarte en cada paso que des en tu aventura.";
dialogs[12] =   "¿Qué te gustaría conocer?";
dialogs[13] =   "Recuerda que: La decisión que tomes en este momento marcará el inicio de tu viaje hacia lo inexplorado.";
dialogs[14] =   "¿Te atreverás a surcar los extensos y cálidos horizontes de Marte?";
dialogs[15] =   "¿O te sumergirás valientemente en las frías y enigmáticas planicies de la luna Titán, desvelando los secretos ancestrales que guardan en sus sombras gélidas?";
dialogs[16] =   "O podemos visitar la enigmática Estación Espacial Isabel.";
dialogs[17] =   "¿Cuál será tu elección?.";
dialogs[18] =   "¡Excelente elección!";

const mainName = "<span style='textNom'>Taky: </span>";

const Tc=[1, 11, 8];

window.onload = function () {
    const div = document.getElementById('back');
    const box = document.getElementById("Message");

    let cap = 1, pres = 0, num = 0, dia = 0, temp = 0, countDia = 0;


    div.onclick = function () {

        temp = presentDiag(0, dia, countDia, box);



        if(temp === cantDia[dia]) {

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





