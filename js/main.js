import { cantDia, dialogs } from "./Texts";



const mainName = "<span style='textNom'>Taky: </span>";

const Tc=[1, 11, 8]

window.onload = function () {

    var cap = 1, pres = 0, num = 0, dia = 0, temp=0, countDia=0;

    const div = document.getElementById('back');
    const box = document.getElementById('Message');

    div.onclick = function () {

        while(temp < cantDia[dia]) {

            box.innerHTML = mainName+getDia(countDia);
            box.onclick = function () {temp++;};
            if (temp===cantDia[dia]) {
                temp = 0;
                dia++;
            }
            countDia++;
        }

        if(num < Tc[pres]) {
            num++;
        }
        if(num===Tc[pres]){
            num = 0;
            pres++;
        }

        div.style.backgroundImage = urlImg(cap,pres,num);

    }

}


function urlImg(cap, pres, num) {

    return "url('img/C" + cap + "." + pres + "/" + num + ".jpg')";
}

function getDia(sec) {

    return '<span style="textBody">' + dialogs[sec] + '</span>';
}