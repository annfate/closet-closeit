//for page title
const title = document.getElementsByClassName("title");


for (i = 0; i < title.length; i++) {
    title[i].style.color = "Sienna";
    title[i].style.fontWeight = "bold";
    title[i].style.textAlign = "center";
    title[i].style.margin = "5px";
    title[i].style.marginBottom = "-50px";
    title[i].style.fontFamily = "Georgia";
    title[i].style.fontSize = "30px";
};

//column fonts
const column = document.getElementsByClassName("column");


for (i = 0; i < column.length; i++) {
    column[i].style.color = "white";
    column[i].style.fontWeight = "bold";
    column[i].style.textAlign = "center";
    column[i].style.fontFamily = "Georgia";
    column[i].style.fontSize = "15px";
};

//directions
const choose = document.getElementsByClassName("choose");


for (i = 0; i < choose.length; i++) {
   
    choose[i].style.color = "Sienna";
    choose[i].style.fontWeight = "bold";
    choose[i].style.textAlign = "center";
    choose[i].style.fontFamily = "Georgia";
    choose[i].style.margin = "10px";
    choose[i].style.fontSize = "15px";
};

const slides = document.getElementsByClassName("carousel-caption");

for (i = 0; i < slides.length; i++) {
    slides[i].style.color = "sienna";
    slides[i].style.fontFamily = "Georgia";
};

//radio list
const check = document.getElementsByClassName("form-check");

for (i = 0; i < check.length; i++) {
    check[i].style.color = "Sienna";
    check[i].style.fontFamily = "Georgia";
};

//footer
const footer = document.getElementsByClassName("footer");

for (i = 0; i < footer.length; i++) {
    footer[i].style.color = "white";
    footer[i].style.fontWeight = "bold";
    footer[i].style.fontFamily = "Georgia";
    footer[i].style.fontSize = "15px";
};

//radiobuttons
window.addEventListener("load", function() {
  console.log("Window and all resources fully loaded");
  
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  
  radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener("mouseover", function() {
          //radio button
          radioButton.style.width = "15px";
          radioButton.style.height = "15px";
          
          //label
          radioButton.nextElementSibling.style.fontSize = "20px"; 
      });

      radioButton.addEventListener("mouseout", function() {
          radioButton.style.width = "10px"; 
          radioButton.style.height = "10px"; 
          
          radioButton.nextElementSibling.style.fontSize = "14px"; 
      });

      //radio label

      const label = radioButton.nextElementSibling;
      label.addEventListener("mouseover", function() {
          radioButton.style.width = "15px";
          radioButton.style.height = "15px";
          label.style.fontSize = "15px";
      });
      
      label.addEventListener("mouseout", function() {
          radioButton.style.width = "10px";
          radioButton.style.height = "10px";
          label.style.fontSize = "14px";
      });
  });
});

// submit button style
const submit = document.querySelector('#submitButton button');
//local storage stores the data assigned for submit button color
//this ensures the availability of data in local storage
if(localStorage.getItem('submitTextColor')){
  submit.style.color = localStorage.getItem('submitTextColor');
} else {
  submit.style.color = "brown"
};

submit.addEventListener("mouseout", e => {
  e.target.style.color = "brown";
  e.target.style.fontFamily  = "Georgia"
  localStorage.setItem('submitTextColor', "brown");
});
//mouseover -font color is brown
submit.addEventListener("mouseover", e =>{
  e.target.style.color = "white";
  e.target.style.fontFamily  = "Georgia"
  localStorage.setItem('submitTextColor', "brown");
});


//modal button big screen
const closeIt = document.querySelector('#reload');

if (localStorage.getItem('closeItTextColor')) {
  closeIt.style.color = localStorage.getItem('closeItTextColor');
} else {
  closeIt.style.color = "sienna";
};

closeIt.style.backgroundColor = "brown";
closeIt.style.color = "white";
//mouseout - font color is white
closeIt.addEventListener("mouseout", e => {
  e.target.style.color = "white";
  e.target.style.fontFamily  = "Georgia"
  localStorage.setItem('closeItTextColor', "sienna");
});
//mouseover -font color is brown
closeIt.addEventListener("mouseover", e =>{
  e.target.style.backgroundColor = "sienna";
  e.target.style.color = "white";
  e.target.style.fontFamily  = "Georgia"
  localStorage.setItem('closeItTextColor', "sienna");
});

//for submit button
document.addEventListener('DOMContentLoaded', () => {
  // Lets open modal
  const submitButton = document.querySelector('[data-target="#reloadModal"]');
  const reload = document.getElementById('reload');

  submitButton.addEventListener('click', () => {
    //lists down selected fits from radio button
    const column1Value = document.querySelector('input[name="Tops"]:checked') ? document.querySelector('input[name="Tops"]:checked').value : null;
    const column2Value = document.querySelector('input[name="Bottoms"]:checked') ? document.querySelector('input[name="Bottoms"]:checked').value : null;
    const column3Value = document.querySelector('input[name="Shoes"]:checked') ? document.querySelector('input[name="Shoes"]:checked').value : null;

    // 1 option only per column
    if (column1Value !== null && column2Value !== null && column3Value !== null) {
      // outffit after clicking modal
      const modalBody = document.getElementById('selectedOptions');
      modalBody.innerHTML = '<p>Selected options:</p>';
      modalBody.innerHTML += '<p>Tops: ' + column1Value + '</p>';
      modalBody.innerHTML += '<p>Bottoms: ' + column2Value + '</p>';
      modalBody.innerHTML += '<p>Shoes: ' + column3Value + '</p>';
    } else {
      //if no radio is selected::
      const modalBody = document.getElementById('selectedOptions');
      modalBody.innerHTML = '<p>Please choose one option from each column.</p>';
    }
  });

  //reloads page using "close-it"
  reload.addEventListener('click', () => {
    // Reload the page
    location.reload();
  });
});
