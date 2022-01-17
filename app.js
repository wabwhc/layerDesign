import { background } from "./background.js";
class app{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.fx;
        this.fy;
        this.sx;
        this.sy;
        this.count = 0;
        this.back = new background();
        document.body.addEventListener('mousedown', (e) => {
            this.fx = e.clientX;
            this.fy = e.clientY;
        })
        document.body.addEventListener('mouseup', (e) => {
            this.sx = this.fx - e.clientX;
            this.sy = this.fy - e.clientY;
            this.count += 1;       
            this.back.init(this.sx, this.sy, this.count, this.ctx)
        })
        this.resize();
        
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight
    }
}

window.onload = () =>{
    new app;
}