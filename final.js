
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
        var check = document.createElement("INPUT");
        check.setAttribute("type", "checkbox");

        list.append(elem);
        elem.append(button);
        elem.prepend(check)
    };

}

document.addEventListener("DOMContentLoaded", ready);
