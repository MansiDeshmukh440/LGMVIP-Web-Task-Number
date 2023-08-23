const inputBox=document.getElementById("input-box");
const ListContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("You must  write soething");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    savedata();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showList(){
    ListContainer.innerHTML=localStorage.getItem("data");

}
showList();