import { initVideo } from './js/video';

(() => {
    const startVideoButton = document.querySelector('#startVideoButton');
    if (!startVideoButton) {
        return;
    }
    startVideoButton.addEventListener('click', (event) => initVideo(event));
})();
