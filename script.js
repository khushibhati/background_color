const mainbutton =document.querySelector("button")
const body = document.body

const current = document.querySelector(".current")
console.log(body)

 function randamcolormaker() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

      const randomcolor =  `rgb(${red}, ${green} , ${blue})`
      return randomcolor;
}


    mainbutton.addEventListener("click" , ()=>{
     const random_color = randamcolormaker();
    console.log(random_color)
    body.style.backgroundColor = random_color;
    current.textContent = random_color;
    
})
const main = document.querySelector("main")
const todoinput =document.querySelector("main  ul");
const todolist =document.querySelector(".todo-list")
console.log(todoinput);


mainbutton.addEventListener("click",(e)=>
{
  e.preventDefault();
 const newtodo = randamcolormaker()
 const newli = document.createElement("li")
 const newliinnerHTML = `<span class="text">${newtodo}</span>
 <div class="todo-buttons">
   <button class="todo-btn done">Done</button>
   <button class="todo-btn remove">Remove</button>
 </div>`

 newli.innerHTML=newliinnerHTML;
 todolist.append(newli);
  newli.style.backgroundColor= randamcolormaker();
});
  
todolist.addEventListener("click" ,(e) =>{
  // check  if user clicked on done button
    if(e.target.classList.contains("remove")){
      const parentnod = e.target.parentNode.parentNode;
      parentnod.remove();
    }

    if(e.target.classList.contains("done")){
      const lispan = e.target.parentNode.previousElementSibling;
       lispan.style.textDecoration ="line-through"
    }

})







  // mainbutton.addEventListener("click", ()=>{

  // })




// math.radom() = ye ham ko .0 se lekrt 1 ke biche m random number deta rahta hai 
//isme kabhi bhi 10 nhi atata hai
 // ham iska use krge  
 // Math.floor(math.random()*10)= to yw 1 se 10 ke bich ka number dega
 // Math.floor(math.random()*256)= to yw 1 se 255 ke bich ka number dega
 


 // using the event bubbling and event degration
 //check  if user clicked on done button
 