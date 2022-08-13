let btnsxyz = Array.from(document.querySelectorAll('.btn'))

for(var i = 0; i < btnsxyz.length; i++){
    var buttonxyz = btnsxyz[i]
    playSounds(btnsxyz[i])
}

function playSounds(btn){
    btn.addEventListener("click", function(){
        stopSound()
        document.getElementById((btn.innerText)).play()
    })
    
}

function stopSound(){
    for(var i = 0; i < btnsxyz.length-1;i++){
        const sound = document.getElementById(btnsxyz[i].innerText)
        sound.pause()
        sound.currentTime = 0;
    }
}