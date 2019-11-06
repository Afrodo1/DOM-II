// Your code goes here
// Your code goes here
// console.log(document);

// const logo = document.getElementsByClassName('logo-heading');
// console.log(typeof logo);
// logo.addEventListener("mouseover", listener);

// function listener ( event ) {   
//     // highlight the mouseover target
//     event.target.style.color = "orange";
//     console.log('hello');
//     console.log(event);
//     console.log(event.target);
//   }

let yo = document.querySelector('#logo-heading');
let me = document.querySelector('html');
let ho = document.querySelectorAll('#nav-link');
let ya = document.querySelector('#intro');
let ha = document.querySelector('#bus');
let fa = document.querySelector('#content-destination p');
let re = document.querySelectorAll('#img-content');
let so = document.querySelector('.text-content h2');

me.addEventListener("keydown", (event)=>{
  event.target.style.transform = "scale(1.2)";
  setTimeout(function() {
    event.target.style.transform = "";
  }, 500);
}) 

yo.addEventListener("wheel", (event)=>{
  event.target.style.backgroundColor = 'red';

  setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 500);
})
for(let i = 0; i < ho.length; i++){

  ho[i].addEventListener("mouseover", (event)=>{
    event.target.style.color = 'blue';
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  })  

}

ya.addEventListener("dblclick", (event)=>{
  event.target.style.backgroundColor = 'green';
  setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 500);
})

ha.addEventListener("click", (event)=>{
  event.target.style.transform = "scale(1.2)";
  event.target.style.transition = "all 0.3s";
  setTimeout(function() {
    event.target.style.transform = "";
  }, 500);
})

fa.addEventListener("mousedown", (event)=>{
  event.target.style.transform = "scale(1.2)";
  setTimeout(function() {
    event.target.style.transform = "";
  }, 500);
  
})

for(let i = 0; i < re.length; i++){

  re[i].addEventListener("mouseup", (event)=>{
    event.target.style.transform = "scale(1.2)";
    setTimeout(function() {
      event.target.style.transform = "";
    }, 500);
  })  

}


  so.addEventListener("keyup", (event)=>{
    event.target.style.backgroundColor = 'green';
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500);
  }) 

  me.addEventListener("mouseout", (event)=>{
    event.target.style.backgroundColor = 'green';
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500);
  })

  me.addEventListener("mouseenter", (event)=>{
    event.target.style.transform = "scale(1.2)";
    setTimeout(function() {
      event.target.style.transform = "";
    }, 500);
  })
  
  


