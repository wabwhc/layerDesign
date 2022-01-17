import { box } from "./box.js";

export class background{
    constructor(){
        this.backs = [];
    }

    init(sx, sy, count, ctx){
        this.sx = sx;
        this.sy = sy;
        this.count = count;
        this.ctx = ctx;
        this.backs[this.count - 1] = new box(this.sx, this.sy, this.ctx);
        this.ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight);
        this.draw();
    }

    draw(){
        
        for(let i = 0; i < this.count; i++){
            this.backs[i].draw();
        }
    }
}