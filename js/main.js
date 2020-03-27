// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  foucs = document.getElementById('foucs');


// Options
const showAmPm = true;

// Show Time
function showTime(){
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  // Set AM or PM
  const amPM = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;
  
  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet(){
  let today = new Date(),
  hour = today.getHours();
  
  if(hour < 12){
    // Morning
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?morning')";
    greeting.textContent = 'Good Morning';

  }else if(hour < 18){
    // Afternoon
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?afternoon')";
    greeting.textContent = 'Good Afternoon';

  }else{
    // Evening
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?night')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

//Get Name
function getName(){
  if(localStorage.getItem('name') === null){
    name.textContent = '[Enter Name]';
  }
  else{
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e){
  if(e.type === 'keypress'){
    // Make Sure "Enter" is Pressed in all browsers
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  }else{
    localStorage.setItem('name', e.target.innerText);
  }
}

// Set foucs
function setFoucs(e){
  if(e.type === 'keypress'){
    // Make Sure "Enter" is Pressed in all browsers
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('foucs', e.target.innerText);
      foucs.blur();
    }
  }else{
    localStorage.setItem('foucs', e.target.innerText);
  }
}

//Get foucs
function getFoucs(){
  if(localStorage.getItem('foucs') === null){
    foucs.textContent = '[Enter foucs]';
  }
  else{
    foucs.textContent = localStorage.getItem('foucs');
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
foucs.addEventListener('keypress', setFoucs);
foucs.addEventListener('blur', setFoucs);

// Run
showTime();
setBgGreet();
getName();
getFoucs();