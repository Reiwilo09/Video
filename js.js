const video = document.querySelector('video')
const val = document.querySelector('input')
const volume = document.querySelector('.volume')
const playback = document.querySelector('.playback')
playback.value = 1

function go() {
    if(video.paused) { 
        video.play()
        document.querySelector('.go').innerHTML = 'Pause'
    } else {
        video.pause()
        document.querySelector('.go').innerHTML = 'Play'
    }
}

video.addEventListener('timeupdate', () => {
    var ends = Math.floor(video.duration % 60)
    var endm = Math.floor(video.duration / 60)
    var sekundy;
    if(video.currentTime % 60 < 10) {
        sekundy = '0' + Math.floor(video.currentTime % 60)
    } else {
        sekundy = Math.floor(video.currentTime % 60)
    }
    var minuty = Math.floor(video.currentTime / 60)
    document.querySelector('.time').innerHTML = minuty + ':' + sekundy + ' / ' + endm + ':' + ends
    var vol = volume.value / 100
    video.volume = vol
    video.playbackRate = playback.value
})
document.querySelector('.go').addEventListener('click', go)
document.querySelector('.pocz').addEventListener('click', function () {
    video.currentTime = 0
})
video.addEventListener('click', go)
document.onkeydown = function(e) {
    if(e.keyCode === 13) { //enter
        if(val.value === '') return
        if(Number(val.value) > 607) return
       video.currentTime = val.value
       if(video.paused) { 
        video.play()
        document.querySelector('.go').innerHTML = 'Pause'
       }
    }
}

