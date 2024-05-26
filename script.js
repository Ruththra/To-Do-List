const inputbox=document.getElementById('input-box');
const listcontainer=document.getElementById('listcontainer');
const clear=document.getElementById('clear')
function addTask(){
    if (inputbox.value===''){
        alert("You must enter the Task")
    }
    else{
        let li=document.createElement('li');
        li.textContent=inputbox.value;
        listcontainer.appendChild(li);
        inputbox.value=''
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span)
        // clear.style.display='block';

    }savedata();

}


listcontainer.addEventListener('click',function(x){
    if(x.target.tagName==='LI'){
        x.target.classList.toggle('checked');
        savedata();
    }
    else if (x.target.tagName==='SPAN'){
        x.target.parentElement.remove();
        savedata();
    }

 })
 function savedata(){
    localStorage.setItem('history',listcontainer.innerHTML);
 }
 function showtask(){
    listcontainer.innerHTML=localStorage.getItem('history')
 }
 
 
// function clr(){
//     listcontainer.removeChild()
//     savedata();
// } 
 
 
 
 
 
 
 showtask();
  

 