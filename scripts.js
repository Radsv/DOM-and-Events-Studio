// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function (e) {




    let takeOffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right');
    let leftButton = document.getElementById('left');


    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');


    const rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    resetRocketPosition();

    takeOffButton.addEventListener('click', function () {
        console.log('My button is clicking');
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response) {
           
            flightStatus.innerText = "Shuttle in flight.";
           
            shuttleBackground.style.backgroundColor = 'blue';

            let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);

            spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;

        }
    });

    //let landButton = document.getElementById('landing');

    landButton.addEventListener('click', function () {
        let response = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (response) {
            
            flightStatus.innerText = "The shuttle has landed.";
            
            shuttleBackground.style.backgroundColor = 'green';
            
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    //let abortButton = document.getElementById('missionAbort')
    abortButton.addEventListener('click', function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
           
            flightStatus.innerText = "Mission aborted.";
            
            shuttleBackground.style.backgroundColor = 'green';

            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener('click' , function(){

        if(spaceShuttleHeight.innerHTML == '0'){
            window.alert("Space shuttle has not launched yet!")

        }else{
            let currentRocketHeight = parseInt(rocket.style.bottom);
			rocket.style.bottom = currentRocketHeight + 10 + "px";
            let currentHeight = Number(spaceShuttleHeight.innerHTML);
			spaceShuttleHeight.innerHTML = currentHeight + 10000;
        }
    });

    downButton.addEventListener('click' , function(){
        if(spaceShuttleHeight.innerHTML == '0'){
            window.alert("Space shuttle has not launched yet!")

        }else{
            let currentRocketHeight = parseInt(rocket.style.bottom);
			rocket.style.bottom = currentRocketHeight - 10 + "px";
            let currentHeight = Number(spaceShuttleHeight.innerHTML);
			spaceShuttleHeight.innerHTML = currentHeight - 10000;
        }
    });

    leftButton.addEventListener('click' , function(){
        if(spaceShuttleHeight.innerHTML == '0'){
            window.alert("Space shuttle has not launched yet!")

        }else{
            let currentRocketHeight = parseInt(rocket.style.left);
			rocket.style.bottom = currentRocketHeight - 10 + "px";
        }
    });

    rightButton.addEventListener('click' , function(){
        if(spaceShuttleHeight.innerHTML == '0'){
            window.alert("Space shuttle has not launched yet!")

        }else{
            let currentRocketHeight = parseInt(rocket.style.left);
			rocket.style.bottom = currentRocketHeight + 10 + "px";
        }
    });


function resetRocketPosition(){
    rocket.style.bottom = 0;
    rocket.style.left = 0;
}




});