AFRAME.registerComponent("play-on-click", {
     schema: {
        isPlaying: {type: "boolean", default: false}
     },
     init : function(){
       this.videoEl = this.el.getAttribute("material").src
       this.onClick(); 
     },
     onClick : function(){
        window.addEventListener("click", ()=>{
            var isPlaying = this.el.getAttribute("play-on-click").isPlaying
            this.el.object3D.visible = true;

            if(!isPlaying){
                this.el.setAttribute("play-on-click", {
                    isPlaying: true
                  });
                this.videoEl.play();
            }
            if(isPlaying){
                this.el.setAttribute("play-on-click", {
                    isPlaying: false
                  });
                this.videoEl.pause();
            }
        })
     },
})