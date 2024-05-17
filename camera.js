const video = document.getElementById('video');
const startButton = document.getElementById('startButton');

async function startCamera() {
    const constraints = {
        video: {
            facingMode: 'environment'
        }
    };
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera: ', error);
        }
    } else {
        alert('getUserMedia API is not supported in this browser.');
    }
}

startButton.addEventListener('click', startCamera);
