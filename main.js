window.onload = function(){
  document.body.onclick = function(){
    if(this.webkitRequestFullScreen){
      this.webkitRequestFullScreen();
    }else if(this.mozRequestFullScreen){
      this.mozRequestFullScreen();
    }else {
      alert("not found")
    }
  };
};
