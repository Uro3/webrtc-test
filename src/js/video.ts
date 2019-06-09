const handleSuccess = (stream: MediaStream): boolean => {
    const video: HTMLMediaElement|null = document.querySelector('#mainVideo');
    if (!video) {
        return false;
    }
    video.autoplay = true;
    video.muted = true;
    video.srcObject = stream;
    return true;
}

const initVideo = async (event: any) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
                height: { ideal: 540 },
                width: { ideal: 960 },
            },
        });
        handleSuccess(stream);
        event.target.disabled = true;
    } catch (error) {
        console.log(error);
    }
};

export {
    initVideo,
};
