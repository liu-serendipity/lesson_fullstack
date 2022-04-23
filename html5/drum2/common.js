// keydown event name -> window
window.addEventListener('keydown', 
function(event) {
    // 键值
    let keyCode = event.keyCode;
    // console.log(keycode)
    let audioEle = document.querySelector(`audio[data-key="${keyCode}"]`);
    // console.log(audioEle);
    if(!audioEle) return;
    audioEle.play();

    let keyEle = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!keyEle) return;
    keyEle.classList.add('playing');
    // 定时器
    // setTimeout(function() {
    //     console.log('-------')
    //     keyEle.classList.remove('playing');
    // },200)
})

const keys = document.querySelectorAll('.key');
for(let key of keys) {
    // console.log(key)
    // event 一个个加， 不能给集体加
    key.addEventListener('transitionend',function(event){
        // console.log('-------')
        event.target.classList.remove('playing');
    })
}