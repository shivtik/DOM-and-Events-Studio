// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const takeoff = document.getElementById('takeoff')
    const up = document.getElementById('up')
    const down = document.getElementById('down')
    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const img = document.getElementById('img')
    const land = document.getElementById('landing')
    const abortMission = document.getElementById('missonAbort')
    const land = document.getElementById('landing')
    const status = document.getElementById('flightStatus')
    const bg = document.getElementById('shuttleBackground')
    const height = document.getElementById('spaceShuttleHeight')

    takeoff.addEventListener('click', (event) => {
        let res = window.confirm("Ready for takeoff?")
        if (res == true) {
            status.innerHTML = "Shuttle in Flight"
            bg.style.background = 'blue'
            height.innerHTML = "10000"
    }
    })
    abortMission.addEventListener('click', (event) => {
        let response = window.confirm("Confirm that you want to abort the mission")
        if (response == true) {
            status.innerHTML = "Mission Aborted"
            bg.style.background = 'green'
            height.innerHTML = "0"
    }
    })

    land.addEventListener('click', (event) => {
        window.alert("The shuttle is landing. Landing gear engaged.")
        status.innerHTML = "Shuttle has landed"
        bg.style.background = 'green'
        height.innerHTML = "0"
    })

    var pos = 0
    up.addEventListener('click', (event) => {
        pos +=10
        img.style.transform = "translate("+pos+ "px)"
    })









  });