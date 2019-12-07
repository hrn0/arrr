window.onload = function() {
   //alert("あああ");
    document.body.onclick = function() {
        if (this.webkitRequestFullScreen) {
             this.webkitRequestFullScreen();
        }
        else if (this. mozRequestFullScreen) {
            this. mozRequestFullScreen();
        }
        else {
            alert("not found")
        }
    };
};

let can = document.getElementById("can");
let con = can.getContext("2d");

let i_si_x = 80;
let i_si_y = 125;
let i_y = 25;
let go_p = 3;
let su_p = 1;

let b_x = 380;

let bimage;
bimage = new Image();
bimage.src = "5.png";

function draw(){

  b_x = b_x-1;

  // if(b_x <= -30)b_x = 380;
  // if(go_p==3){
  //   if(i_si_x*go_p+80 >= b_x)go_p = 2;
  // }else if(go_p==2){
  //   if(i_si_x*go_p+80 >= b_x)go_p = 1;
  // }else if(go_p==1){
  //   if(i_si_x*go_p+80 >= b_x)go_p = 0;
  // }else{
  //   if(i_si_x*go_p+80 >= b_x)go_p = -1;
  // }

  con.fillStyle = '#996666';
  con.fillRect(0,150,400,25);
  con.fillRect(0,300,400,25);
  con.fillRect(0,450,400,25);

  con.fillStyle = 'deeppink';
  con.fillRect(b_x,70,30,30);

  con.fillStyle = "white"
  con.fillRect(i_si_x*go_p,i_y*su_p,i_si_x,i_si_y)
  //con.drawImage(bimage,i_si_x*go_p,i_y,i_si_x,i_si_y)

}

function clear(){
  con.clearRect(0,0,450,800)
}

    var touchStartY;
    var touchMoveY;

    // 開始時
    window.addEventListener("touchstart", function(event) {
    touchStartY = event.touches[0].pageY;
    }, false);

    // 移動時
    window.addEventListener("touchmove", function(event) {
    touchMoveY = event.changedTouches[0].pageY;
    }, false);

    // 終了時
    window.addEventListener("touchend", function(event) {
    // 移動量の判定
    if (touchStartY > touchMoveY) {
        if (touchStartY > (touchMoveY + 50)) {
        su_p = su_p-1;
        }
    } else if (touchStartY < touchMoveY) {
        if ((touchStartY + 50) < touchMoveY) {
        su_p = su_p+1;
        }
    }
    if(su_p<0)i_y=0;
    if(su_p>2)i_y=2;
    }, false);


function main(){
clear();
draw();
}

setInterval(main,10);
