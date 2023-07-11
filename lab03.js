let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(function(button) {
  button.addEventListener('click', function(e) {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'C') {
        string = "";
        document.querySelector('input').value = string;
    } else if (e.target.innerHTML === '√') {
       if(!isNaN(parseFloat(string)))
        string = Math.sqrt(parseFloat(string));
        document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'sin') {
        if(!isNaN(parseFloat(string)))
        string = Math.sin(parseFloat(string));
        document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'cos') {
        if(!isNaN(parseFloat(string)))
        string = Math.cos(parseFloat(string));
        document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'tan') {
        if(!isNaN(parseFloat(string)))
        string = Math.tan(parseFloat(string));
        document.querySelector('input').value = string;
    }
      else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
  });
});

function myFunc() {
    alert("You clicked me!")
}