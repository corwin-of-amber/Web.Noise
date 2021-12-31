window.addEventListener('dragover', ev => {
    ev.preventDefault();
});

window.addEventListener('drop', ev => {
    ev.preventDefault();
    var dropped = ev.dataTransfer.files[0];
    if (dropped) {
        console.log('opening', dropped);
        initAudio(URL.createObjectURL(dropped));
    }
});