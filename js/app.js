const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Background{
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "../images/bg.png";
        this.imgGameOver = new Image();

    }
    //methods
    draw(){
        if(this.x <- canvas.width){
            this.x = 0;
        }
        this.x--;
    
        // draw an image
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx.drawImage(
            this.image,
            this.x + this.width,
            this.y,
            this.width,
            this.height);
    }

    gameOver(){
        ctx.font = '80px Arial';
        ctx.fillText = ("You died, sorry!", 250, 200);
    }
}

class Flappy{
    constructor(x,y,w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.vy = 2; //gravity
        this.userPull = 0; //gravity
        this.image = new Image();
        this.image.src = "../images/flappy.png";
    }
    
    //methods
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y 

        )
    }

}
