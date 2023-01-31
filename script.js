let startStop = false;
const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const startStopButton = document.getElementById("startStopButton");  
let started = false;

function handleStartStopClick() {
	started = !started;
	if (started) {
	  startStopButton.innerHTML = "Stop";
	  startStopButton.style.backgroundColor = "red";
	  started = true
	  return;
	} else {
	  startStopButton.innerHTML = "Start";
	  startStopButton.style.backgroundColor = "green";
	  started = false
	  return;
	}
  }	  

document.addEventListener('DOMContentLoaded', function () {
	startStopButton.addEventListener("click", handleStartStopClick);
	field1.addEventListener("input", handleInput);
	field2.addEventListener("input", handleInput);
});



const convertToSeconds = time => {
	const [minutes, seconds] = time.split(':').map(Number);
	return minutes * 60 + seconds;
  };

  const areFieldsPopulated = () => {
	return field1.value.trim() !== '' && field2.value.trim() !== '';
  };


  function startScript(isStarted) {
	isStarted = started;
	if(isStarted){
		if(document.getElementsByTagName('video')[0].currentTime > 5) {
			document.getElementsByTagName('video')[0].currentTime = 20
			}
		}
	console.log*(started);
  }


setInterval(function() {
	//if(startStop == true){
	//var startTime = field1.value;
	//var stopTime = field2.value;
	console.log(started)
	if(started==true){
	if(document.getElementsByTagName('video')[0].currentTime > 5) {
		document.getElementsByTagName('video')[0].currentTime = 20
		}
	}
  }, 1000);

function handleInput(event) {
  const target = event.target;
  const value = target.value;
  const numbers = value.replace(/\D/g, "").split("");

  if (numbers.length === 0) {
    target.value = "";
    return;
  }

  if (numbers.length > 4) {
    target.value = value.slice(0, -1);
    return;
  }

  if (numbers.length === 3) {
    target.value = `${numbers[0]}:${numbers[1]}${numbers[2]}`;
    return;
  }

  if (numbers.length === 4) {
    target.value = `${numbers[0]}${numbers[1]}:${numbers[2]}${numbers[3]}`;
    return;
  }
}

function changeToTrue(variable, changing) {
	
  }
