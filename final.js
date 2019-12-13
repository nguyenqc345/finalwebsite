
function ready(){
    add.onclick = function (){
        let item = document.getElementById("input").value;
        let elem = document.createElement('li');
        elem.innerHTML = item;
        let button = document.createElement('span');
        button.innerHTML = "X";
        button.onclick = function(){
            elem.remove()
            button.remove()
        };
        button.className = "close"
        document.getElementById("input").value="";
        list.append(elem);
        elem.appendChild(button);
        
    };

}

document.addEventListener("DOMContentLoaded", ready);
