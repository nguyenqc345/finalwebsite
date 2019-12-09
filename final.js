
function ready(){
    console.log("Page Ready");
    add.onclick = function (){
        console.log("button");
        let elem = document.createElement('p');
        elem.innerHTML = "Huzzah";
        let button = document.createElement('button');
        button.innerHTML = "Delete";
        button.onclick = function(){
            elem.remove()
            button.remove()
        };

        list.append(elem);
        list.append(button)
    };

}

document.addEventListener("DOMContentLoaded", ready);