document.addEventListener('DOMContentLoaded', function(){
    console.log("Content Loaded")
    // keydown
    function playSound(e) {
        const keyCode = e.keyCode;
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${keyCode}"]`)
        // play audio
        if(!audio) return;
        audio.currentTime = 0;
        audio.play()
        key.classList.add('playing')
    }
    
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        // this is referring to key on line 24
        this.classList.remove('playing')
    }
    
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    
    window.addEventListener('keydown', playSound)
})