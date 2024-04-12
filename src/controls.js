var controlsVisible = true;

//"hide/show controls" button
export default function initControls() {
    document.querySelector('#control-toggle').addEventListener('click', ()=> {
        if(controlsVisible) {
            document.querySelector('.leaflet-control-container').style.display = 'none';
            document.querySelector('#control-toggle').innerText = 'Show\nControls';
            controlsVisible = false;
        } else {
            document.querySelector('.leaflet-control-container').style.display = 'unset';
            document.querySelector('#control-toggle').innerText = 'Hide\nControls';
            controlsVisible = true;
        }
    });
}