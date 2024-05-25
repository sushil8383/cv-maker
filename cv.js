function addNewWeField(){
    //console.log("adding")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",2);

    let weObj = document.getElementById("we");
    let weButton=document.getElementById("weButton");

    weObj.insertBefore(newNode, weButton);

}

function addNewAqField(){
    let newNode  = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.setAttribute("rows",2);

    let aqObj = document.getElementById("aq");
    let aqButton = document.getElementById("aqButton");

    aqObj.insertBefore(newNode, aqButton);

}

function addNewPrField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.setAttribute("rows",2);

    let prObj = document.getElementById("pr");
    let prButton = document.getElementById("prButton");
    prObj.insertBefore(newNode, prButton);
}


function generateCV()
{
    let nameField = document.getElementById("nameField").value;
    let tname = document.getElementById("tname");
    tname.innerHTML = nameField;
    document.getElementById("namet2").innerHTML = nameField;

    document.getElementById("tnumber").innerHTML = 
    document.getElementById("contactField").value;

    document.getElementById("tmail").innerHTML= 
    document.getElementById("mailField").value;

    document.getElementById("taddress").innerHTML = 
    document.getElementById("addressField").value;

    document.getElementById("tgithub").innerHTML = 
    document.getElementById("gtField").value;
    document.getElementById("tlink").innerHTML = 
    document.getElementById("linkField").value;



    document.getElementById("tobject").innerHTML = 
    document.getElementById("objective").value;

    let wes = document.getElementsByClassName("weField")
    let str ="";
    for (let e of wes){
        str = str +`<li> ${e.value} </li>`;
    }
    document.getElementById("twe").innerHTML = str;

    let aqs = document.getElementsByClassName("aqField")
    let str1 ="";
    for (let e of aqs){
        str1 = str1 +`<li> ${e.value} </li>`;
    }
    document.getElementById("taq").innerHTML = str1;

    let prs = document.getElementsByClassName("prField");
    let str2="";
    for(let e of prs) {
        str2 = str2 + `<li>${e.value} </li>`;
      
    }
    document.getElementById("tpr").innerHTML = str2;
    


    //image
    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;

    };
    
    




    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

    document.getElementById("nav").style.display="none";

    
    
}

function printCV(){
    window.print();
}






