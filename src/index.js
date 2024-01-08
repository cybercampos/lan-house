var { Timer } = require('easytimer.js');
date = new Date().getFullYear();
alert("COPYRIGHT CYBERCAMPOS " + date);
let consoles = ["Console 1", "Console 2", "Console 3", "Console 4"];
addEventListener("DOMContentLoaded", (event) => {
  for (let i = 0; i < consoles.length; i++) {
        let timer = new Timer();
        let text = document.createElement("p");
        let timertext = document.createElement("p");
        let buttonp = document.createElement("button");
        let buttonm = document.createElement("button");
        let buttonc = document.createElement("button");
        let textbox = document.createElement("input");
        let div = document.getElementsByClassName("consolesdiv")[0];
        text.textContent = consoles[i];
        buttonp.textContent = "+";
        buttonp.onclick = function() {starttimer(timer, timertext);}
        buttonm.textContent = "-";
        buttonm.onclick = function() {stoptimer(timer);}
        timer.addEventListener('secondsUpdated', function (e) {
          timertext.innerHTML = timer.getTimeValues().toString();
        }); 
        buttonc.textContent = "C";
        buttonc.onclick = function() {timertext.textContent = "";}
        div.appendChild(text);
        div.appendChild(buttonp);
        div.appendChild(buttonm);
        div.appendChild(buttonc);
        div.appendChild(timertext);
        div.appendChild(textbox);

      }
});
function starttimer(timer) {
  timer.start({countdown: true, startValues: {seconds: 3600}}) /*3600*/
}
function stoptimer(timer) {
  timer.stop();
}
