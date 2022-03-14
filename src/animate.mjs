import { Queue } from './queue.mjs';

class Animate {
    constructor() {
        this.fps = 4;
        this.animateWorker;
        this.renderList = new Queue();
        this.dequeueTimer;
        this.dequeuetimerHealth = false;
        this.renderTimer;
        this.renderPerformanceChecker = [];
        this.benchmark;

        // animate initialize
        this.Start();

        // render performance checker initialize
        //this.renderPerformanceChecker[0] = window.THREEobjects.renderer.info.render.frame;
        //this.RenderPerformanceCheckStart();
    }

    Start() {
        this.animateWorker = setInterval(() => {
            window.THREEobjects.controls.update();
            window.THREEobjects.Render();
        }, this.fps);
    }

    Stop() {
        clearInterval(this.animateWorker);
    }

    Enqueue() {
        console.log("data receieved by server");
        this.renderList.enqueue(true);
        this.Dequeue();
    }

    Dequeue() {
        if(!this.dequeuetimerHealth) {
            let self = this;
            self.dequeuetimerHealth = true;
            self.dequeueTimer = setInterval(() => {
                self.renderList.dequeue();
                // 프로퍼티 분산 할당 메소드 넣어야 함
                console.log("property assign");
                if(!self.renderList.front()) {
                    self.dequeuetimerHealth = false;
                    console.log("properties setting is done!!");
                    clearInterval(self.dequeueTimer);
                }
            }, 12); // 4ms가 브라우저 최솟값이며 setInterval 4ms로 돌리는 것이 while보다 더 빠르다고 함.
        }
    }

    // 사용 보류    
    RenderPerformanceCheckStart() {
        let self = this;
        this.renderTimer = setInterval(() => {
            self.renderPerformanceChecker[1] = window.THREEobjects.renderer.info.render.frame;
            self.benchmark = self.renderPerformanceChecker[1] - self.renderPerformanceChecker[0];
            console.log(`${self.benchmark} fps`);
            self.renderPerformanceChecker.shift();

            let fps = Math.floor(1000 / self.benchmark);
            if(fps > 4) {
                if(fps !== self.fps) {
                    self.fps = fps;
                    self.Stop();
                    self.Start();
                    console.log(`fps is changed as ${self.fps}`);
                }
            }else if(self.fps > 4 && fps <= 4) {
                self.fps = 4;
                self.Stop();
                self.Start();
                console.log(`fps is changed as ${self.fps}`);
            }
            
        }, 1000);
    }
};

export { Animate };