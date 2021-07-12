let num = 0;

function count() {
  num++;
  localStorage.getItem('counter');
  document.querySelector('h1').innerHTML = num;
  localStorage.setItem('counter', num);
  console.log(num);
}

if (!localStorage.getItem('counter')) {
  localStorage.setItem('counter', num);
}

function localStorageCounter() {
  let counter = localStorage.getItem('counter');
  counter++;
  document.querySelector('h1').innerHTML = counter;
  localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('h1').innerHTML = localStorage.getItem('counter');
  document.querySelector('button').onclick = localStorageCounter;
  //setInterval(() => count(), 1000);
});
