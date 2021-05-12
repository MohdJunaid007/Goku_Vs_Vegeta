audio=new Audio('game/music.MP3');
audiogo = new Audio('game/police.MP3');
setTimeout(() => {
    audio.play();
}, 1000);
score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38 ||e.keyCode == 32 ||e.keyCode == 87 ) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 39 ||e.keyCode == 68  ) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 150 + 'px';
    }
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 37 || e.keyCode == 65) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 150) + 'px';
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    //console.log(offsetX,offsetY);
    if (offsetX < 100 && offsetY < 100) {
        gameOver.innerHTML='Game Over';
        dino = document.querySelector('.dino');
        dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
        dino.style.top=700 +'px';

        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 100 && cross && offsetY < 300) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.15;
            obstacle.style.animationDuration = newDur + 's';
            console.log("New Animation Duration",newDur);
        }, 500);
    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score : " + score;

}
