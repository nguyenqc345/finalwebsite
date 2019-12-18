
add.onclick = function (){
        let item = document.getElementById("input").value;
        let item2 = document.getElementById("input2").value;
        let elem = document.createElement('li');
        elem.innerHTML = item
        elem.setAttribute('id', "color");
        let button = document.createElement('span');
        let check = document.createElement("input")
        check.setAttribute("type", "checkbox");
        check.innerHTML = "";
        button.innerHTML = "X";
        button.onclick = function(){
            elem.remove()
            button.remove()
        };
        let menu = document.createElement('select');
        menu.setAttribute('id', "cool")
        let color0 = "<option value = 0>Select Color</option>"
        let color1 = "<option value = 1>Gray</option>";
        let color2 = "<option value = 2>Purple</option>";
        let color3 = "<option value = 3>Important</option>";
            menu.innerHTML= color0 + color1 + color2 + color3;
        document.addEventListener("input", function (event){
            if (event.target.id !== "cool") return;
                if (event.target.value === '0') {
                document.getElementById('color').style.background = "cornsilk";
                }
                if (event.target.value === '1') {
                    document.getElementById('color').style.background = "#eee";
                }
                if (event.target.value === '2') {
                    document.getElementById('color').style.background = "#b581e3";
                }
                if (event.target.value === '3') {
                    let x = 0 
                    setInterval(() =>{
                        if (x % 2 == 0){
                            document.getElementById('color').style.background = "#b581e3";}
                        if (x % 2 == 1){
                            document.getElementById('color').style.background = "#eee";}
                        x++;
                    },500)
                }
        }, false);
        button.className = "close";
        document.getElementById("input").value="";
        document.getElementById("input2").value=""
        check.onclick = function(){
            elem.className = "checked"
            document.getElementById('color').style.background = "gray";
        }
        list.append(elem);
        elem.append(button);
        elem.append(menu);
        elem.prepend(check);

        check.onmouseover = function(){
            elem.innerHTML = "Due Date:" + item2
        };
        elem.onmouseout = function(){
            elem.innerHTML = item
            list.append(elem);
            elem.append(button);
            elem.append(menu);
            elem.prepend(check);
        }
        
    };
