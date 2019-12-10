
function ready(){
    add.onclick = function (){
        let item = document.getElementById("input").value;
        let elem = document.createElement('li');
        elem.innerHTML = item;
        let button = document.createElement('button');
        button.innerHTML = "Delete";
        button.onclick = function(){
            elem.remove()
            button.remove()
        };
        document.getElementById("input").value="";
        list.append(elem);
        elem.append(button);
        
    };

}

document.addEventListener("DOMContentLoaded", ready);
