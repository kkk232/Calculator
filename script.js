 
const container = document.querySelector("#container");
const content = document.createElement("div");
let string = "";
const btnMin = document.querySelector("#btnMin");
const btnFin = document.querySelector("#btnFin");
const btnCl = document.querySelector("#clear");

function del(){
    if(string.trimEnd().split(" ").length == 2) string = string.substring(0, string.length - 3);
    else string = string.substring(0, string.length - 1)
    content.textContent = string;
    container.appendChild(content);
}

function addDigit(a){
    if (string[0] == " ") string = "";
    string += a;
    content.textContent = string;
    container.appendChild(content);
}

function addDot(){
    if (string[0] == " ") string = "";
    let str = string.split(" ");
    if ((str.length > 2 && str[2].includes(".")) || (str.length < 2 && str[0].includes(".")))
        {
            content.textContent = string;
            container.appendChild(content);
        }
        else {
            string += ".";
            content.textContent = string;
            container.appendChild(content);
        }
}
function addOperators(a){
    if (string[0] == " ") string = string.trimStart();
    if (string.length != 0 && string[string.length - 1] != "-" && string.includes(" ") == false){
        a == 0 ? string += " + ": a == 1 ? string += " / ": string += " * "
        content.textContent = string;
        container.appendChild(content);
    }
}

btnCl.addEventListener("click", () =>{
    string = "";
    content.textContent = string;
    container.appendChild(content);
})

btnMin.addEventListener("click", () => {
    if (string[0] == " ") string = string.trimStart();
    if(string.length == 0 || (string.includes(" ") && string[string.length - 1] == " ")){
        string += "-";
        content.textContent = string;
        container.appendChild(content);
    }
    else if((string.includes(" ") && string[string.length - 1] !== " ") || string[string.length - 1] == "-" || (string.length == 1 && string.includes(".")) || (string.includes(" ") && string[string.length - 1] == ".")){
        content.textContent = string;
        container.appendChild(content);
    }
    else {
        string += " - ";
        content.textContent = string;
        container.appendChild(content);
    }
    });
btnFin.addEventListener("click", () => {
    if (string[0] == " ") string = string.trimStart();
    if (string.includes(" ") && (string[string.length - 1] != " " || string[string.length - 1] != "-")){
        let a = 0;
        str = string.split(" ");
        switch (str[1]){
            case "+":
                a = +str[0] + +str[2];
                string += ` = ${a}`;
                break;
            case "-":
                a = +str[0] - +str[2];
                string += ` = ${a}`;
                break;
            case "/":
                a = +str[0] / +str[2];
                string += ` = ${a}`;
                break;
            case "*":
                a = +str[0] * +str[2];
                string += ` = ${a}`;
                break;
        }
        content.textContent = string;
        container.appendChild(content);
        string = ` ${a}`;
    }
    
});

