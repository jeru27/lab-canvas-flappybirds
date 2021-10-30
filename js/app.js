const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Background{
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "../images/bg.png"; // ./=> in the same level ../=> in a different level 
        this.imgGameOver = new Image();

    }
    //metodos
    draw(){
        if(this.x <- canvas.width){
            this.x = 0;
        }
        this.x--;
    // dibujar la imagen
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
        ctx.fillText = ("Te moriste mi rey", 250, 200);
        //ctx.drawImage(this.imgGameOver, 50,50,100,100);

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
    //metodos
    draw(){
        //validar gravedad



        //dibujar
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
