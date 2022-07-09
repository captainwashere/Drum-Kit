function palyMusic(e){
    
    const aud=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!aud)
    {
        return;
    }
    aud.play();
    aud.currentTime=0;
    console.log(key);
   

};
window.addEventListener('keyup',palyMusic);

  
    
    
    


