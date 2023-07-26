function solve() {
    const departButton=document.querySelector('#depart');
    const arriveButtno=document.querySelector('#arrive');
    const busInfoBox = document.querySelector('#info .info');

    let busStopInfo = {
        name: '',
        next: 'depot',
    };

    function depart() {
        
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
        .then((res)=>res.json())
        .then((bustStopID)=>{
            busStopInfo=bustStopID;
            departButton.disabled=true;
            arriveButtno.disabled=false;
            busInfoBox.textContent=`Next stop ${busStopInfo.name}`;
        })
        .catch(()=>{
            departButton.disabled=false;
            arriveButtno.disabled=false;
            busInfoBox.textContent=`Error`;
        });
    }

    async function arrive() {
        departButton.disabled=false;
        arriveButtno.disabled=true;
        busInfoBox.textContent=`Arriving at ${busStopInfo.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();