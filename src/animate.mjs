function Animate(fps) {
    //fps : 60 === 16, 165 === 6
    let start = new window.setInterval(() => {
        controls.update();
        window.THREEobjects.Render();
    }, fps);
};

export {Animate};