export class box{
    constructor(sx, sy, ctx){
        this.sx = sx;
        this.sy = sy;
        this.ctx = ctx;
        this.dir = Math.abs(this.sx) > Math.abs(this.sy) ? 1 : 0;
        this.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        this.ctx.globalAlpha = "0.3";
    }

    draw(){
        this.ctx.fillStyle = this.fillStyle;
        if(this.dir === 1){
            if(this.sx === Math.abs(this.sx)){
                this.ctx.fillRect(
                    document.body.clientWidth - (this.sx * 3), 0,
                    document.body.clientWidth, document.body.clientHeight
                );
            }else{
                this.ctx.fillRect(0, 0,  Math.abs(this.sx) * 3, document.body.clientHeight);
            }
        }else{
            if(this.sy === Math.abs(this.sy)){
                this.ctx.fillRect(
                    0, document.body.clientHeight - (this.sy * 3),
                    document.body.clientWidth, document.body.clientHeight
                    )
            }else{
                this.ctx.fillRect(
                    0, 0,
                    document.body.clientWidth, Math.abs(this.sy)
                );
            }
        }
    }
}