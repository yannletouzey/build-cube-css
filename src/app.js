const cube = document.getElementById('cube')
const btn = document.getElementById('btn')
const frontBtn = document.getElementById('frontBtn')
const backBtn = document.getElementById('backBtn')
const topBtn = document.getElementById('topBtn')
const bottomBtn = document.getElementById('bottomBtn')
const rightBtn = document.getElementById('rightBtn')
const leftBtn = document.getElementById('leftBtn')
const faceFront = document.querySelector('.cube__front')
const faceBack = document.querySelector('.cube__back')
const faceTop = document.querySelector('.cube__top')
const faceBottom = document.querySelector('.cube__bottom')
const faceRight = document.querySelector('.cube__right')
const faceLeft = document.querySelector('.cube__left')
const faces = document.querySelectorAll('.cube__face')
function scaleAndRadius(face){
    face.style.transform = "scale(1)";
    face.style.borderRadius = 0
}
function delayOpacity(face) {
    setTimeout(() => {
        face.style.opacity = 0.2;
    }, 2000)
}
function frontFace() {
    cube.style.transform = "rotateY(-25deg) rotateX(-15deg)"
    scaleAndRadius(faceFront)
    setTimeout(() => {
        faceFront.style.transform = "translateZ(5rem)";
        setTimeout(() => {
            faceFront.style.opacity = 0.2;
        }, 2000)
    }, 2000);
}
function backFace() {
    setTimeout(() => {
        scaleAndRadius(faceBack)
    }, 4000);
    setTimeout(() => {
        faceBack.style.transform = "translateZ(-5rem)";
        delayOpacity(faceBack)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(-35deg) rotateX(-25deg)"
        }, 2000)
    }, 6000);
}
function topFace() {
    setTimeout(() => {
        scaleAndRadius(faceTop)
    }, 8000);
    setTimeout(() => {
        faceTop.style.transform = "translateY(-5rem)";
    }, 10000);
    setTimeout(() => {
        faceTop.style.transform = "translateY(-5rem) rotateX(90deg)";
        delayOpacity(faceTop)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(35deg) rotateX(35deg)"
        }, 2000)
    }, 12000);
}
function bottomFace() {
    setTimeout(() => {
        scaleAndRadius(faceBottom)
    },14000);
    setTimeout(() => {
        faceBottom.style.transform = "translateY(5rem)";
    }, 16000);
    setTimeout(() => {
        faceBottom.style.transform = "translateY(5rem) rotateX(90deg)";
        delayOpacity(faceBottom)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(35deg) rotateX(-35deg)"
        }, 2000)
    }, 18000);
}
function rightFace() {
    setTimeout(() => {
        scaleAndRadius(faceRight)
    }, 20000);
    setTimeout(() => {
        faceRight.style.transform = "translateX(-5rem)";
    }, 22000);
    setTimeout(() => {
        faceRight.style.transform = "translateX(-5rem) rotateY(90deg)";
        delayOpacity(faceRight)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(-35deg) rotateX(-35deg)"
        }, 2000)
    }, 24000);
}
function leftFace() {
    setTimeout(() => {
        scaleAndRadius(faceLeft)
    }, 26000);
    setTimeout(() => {
        faceLeft.style.transform = "translateX(5rem)";
    }, 28000);
    setTimeout(() => {
        faceLeft.style.transform = "translateX(5rem) rotateY(90deg)";
        delayOpacity(faceLeft)
        faces.forEach(f => {
            setTimeout(() => {
                f.style.opacity = 0.7
                f.style.border = "2px solid #000"
                f.style.boxShadow = "inset 0px 0px 37px 13px rgba(0,0,0,0.95)";
                cube.style.transform = "rotateY(-755deg) rotateX(-35deg)"
            }, 3000);
        })
    }, 30000);
}
btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.style.display = 'none'
    frontBtn.style.display = 'none'
    frontFace()
    backFace()
    topFace()
    bottomFace()
    rightFace()
    leftFace()
})
frontBtn.addEventListener('click', (e) => { 
    e.preventDefault()
    btn.style.display = 'none'
    frontBtn.style.display = 'none'
    scaleAndRadius(faceFront)
    cube.style.transform = "rotateY(-25deg) rotateX(-15deg)"
    setTimeout(() => {
        faceFront.style.transform = "translateZ(5rem)";
        setTimeout(() => {
            faceFront.style.opacity = 0.2;
            backBtn.style.display = 'block'
        }, 2000)
    }, 2000);
})
backBtn.addEventListener('click', (e) => {   
    e.preventDefault()
    scaleAndRadius(faceBack)
    setTimeout(() => {
        faceBack.style.transform = "translateZ(-5rem)";
        delayOpacity(faceBack)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(-35deg) rotateX(-25deg)"
            topBtn.style.display = 'block'
        }, 2000)
    }, 2000);
})
topBtn.addEventListener('click', (e) => {   
    e.preventDefault()
    scaleAndRadius(faceTop)
    setTimeout(() => {
        faceTop.style.transform = "translateY(-5rem)";
    }, 2000);
    setTimeout(() => {
        faceTop.style.transform = "translateY(-5rem) rotateX(90deg)";
        delayOpacity(faceTop)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(35deg) rotateX(35deg)"
            bottomBtn.style.display = 'block'
        }, 2000)
    }, 4000);
})
bottomBtn.addEventListener('click', (e) => {   
    e.preventDefault()
    scaleAndRadius(faceBottom)
    setTimeout(() => {
        faceBottom.style.transform = "translateY(5rem)";
    }, 2000);
    setTimeout(() => {
        faceBottom.style.transform = "translateY(5rem) rotateX(90deg)";
        delayOpacity(faceBottom)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(35deg) rotateX(-35deg)"
            rightBtn.style.display = 'block'
        }, 2000)
    }, 4000);
})
rightBtn.addEventListener('click', (e) => {   
    e.preventDefault()
    scaleAndRadius(faceRight)
    setTimeout(() => {
        faceRight.style.transform = "translateX(-5rem)";
    }, 2000);
    setTimeout(() => {
        faceRight.style.transform = "translateX(-5rem) rotateY(90deg)";
        delayOpacity(faceRight)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(-35deg) rotateX(-35deg)"
            leftBtn.style.display = 'block'
        }, 2000)
    }, 4000);
})
leftBtn.addEventListener('click', (e) => {   
    e.preventDefault()
    scaleAndRadius(faceLeft)
    setTimeout(() => {
        faceLeft.style.transform = "translateX(5rem)";
    }, 2000);
    setTimeout(() => {
        faceLeft.style.transform = "translateX(5rem) rotateY(90deg)";
        delayOpacity(faceLeft)
        faces.forEach(f => {
            setTimeout(() => {
                f.style.opacity = 0.7
                f.style.border = "2px solid #000"
                f.style.boxShadow = "inset 0px 0px 37px 13px rgba(0,0,0,0.95)";
                cube.style.transform = "rotateY(-755deg) rotateX(-35deg)"
            }, 3000);
        })
    }, 4000);
})