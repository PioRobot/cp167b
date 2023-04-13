AFRAME.registerComponent("play-on-click", {
 //Añadimos el código aquí.
 schema: { isPlaying: { type: "boolean", default: false } },
 init: function() { 
    //Para guardar el video que se va a reproducir 
    this.videoEl = this.el.getAttribute("material").src; 
    //bind()unir, le une el video a la función onclcik es como si se lo enviaramos como parametro
    this.onClick = this.onClick.bind(this); },
    play: function() { 
    //Si se siente un click o touch en la pantalla 
    window.addEventListener("click", this.onClick); },
    onClick: function(){
        if (!this.videoEl) {
            return
        }
        var isPlaying= this.el.getAttribute("play-on-click").isPlaying
        if (!isPlaying) {
            this.el.setAttribute("play-on-click",{isPlaying:true})
            this.videoEl.play()
        } else{
            this.el.setAttribute("play-on-click",{isPlaying:false})
            this.videoEl.pause()
        }
    }
});
