let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let currMode = "light";

btn.addEventListener("click", ()=> {
if( currMode === "light"){
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
     h1.classList.remove("h1l");
    h1.classList.add("h2l");
      btn.classList.remove('btd')
      btn.classList.add("btl");
    
    
   
    
}
else{currMode = "light"; 
     body.classList.add("light");
     body.classList.remove("dark");
     h1.classList.remove("h2l");
     h1.classList.add("h1l");
      btn.classList.remove('btl');
  btn.classList.add("btd");
  
}

console.log(currMode);
}
);
