const cube = document.getElementById('cube')
const frontBtn = document.getElementById('frontBtn')
const faceFront = document.querySelector('.cube__front')
const faceBack = document.querySelector('.cube__back')
const faceTop = document.querySelector('.cube__top')
const faceBottom = document.querySelector('.cube__bottom')
const faceRight = document.querySelector('.cube__right')
const faceLeft = document.querySelector('.cube__left')
const faces = document.querySelectorAll('.cube__face')
frontBtn.addEventListener('click', () => {
    frontBtn.style.display = 'none'
    

    cube.style.transform = "rotateY(-25deg) rotateX(-15deg)"

    faceFront.style.transform = "scale(1)";
    faceFront.style.borderRadius = 0

    setTimeout(() => {
        faceFront.style.transform = "translateZ(5rem)";
        setTimeout(() => {
            faceFront.style.opacity = 0.2;
        }, 2000)
    }, 2000);
    setTimeout(() => {
        faceBack.style.borderRadius = 0
        faceBack.style.transform = "scale(1)";
    }, 4000);
    setTimeout(() => {
        faceBack.style.transform = "translateZ(-5rem)";
        setTimeout(() => {
            faceBack.style.opacity = 0.2;
        }, 2000)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(-35deg) rotateX(-25deg)"
        }, 2000)
    }, 6000);
    setTimeout(() => {
        faceTop.style.borderRadius = 0
        faceTop.style.transform = "scale(1)";
    }, 8000);
    setTimeout(() => {
        faceTop.style.transform = "translateY(-5rem)";
    }, 10000);
    setTimeout(() => {
        faceTop.style.transform = "translateY(-5rem) rotateX(90deg)";
        setTimeout(() => {
            faceTop.style.opacity = 0.2;
        }, 2000)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(35deg) rotateX(35deg)"
        }, 2000)
    }, 12000);
    setTimeout(() => {
        faceBottom.style.borderRadius = 0
        faceBottom.style.transform = "scale(1)";
    },14000);
    setTimeout(() => {
        faceBottom.style.transform = "translateY(5rem)";
    }, 16000);
    setTimeout(() => {
        faceBottom.style.transform = "translateY(5rem) rotateX(90deg)";
        setTimeout(() => {
            faceBottom.style.opacity = 0.2;
        }, 2000)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(35deg) rotateX(-35deg)"
        }, 2000)
    }, 18000);
    setTimeout(() => {
        faceRight.style.borderRadius = 0
        faceRight.style.transform = "scale(1)";
    }, 20000);
    setTimeout(() => {
        faceRight.style.transform = "translateX(-5rem)";
    }, 22000);
    setTimeout(() => {
        faceRight.style.transform = "translateX(-5rem) rotateY(90deg)";
        setTimeout(() => {
            faceRight.style.opacity = 0.2;
        }, 2000)
        setTimeout(() => {
            cube.style.transitionDuration = "1s"
            cube.style.transform = "rotateY(-35deg) rotateX(-35deg)"
        }, 2000)
    }, 24000);
    setTimeout(() => {
        faceLeft.style.borderRadius = 0
        faceLeft.style.transform = "scale(1)";
    }, 26000);
    setTimeout(() => {
        faceLeft.style.transform = "translateX(5rem)";
    }, 28000);
    setTimeout(() => {
        faceLeft.style.transform = "translateX(5rem) rotateY(90deg)";
        setTimeout(() => {
            faceLeft.style.opacity = 0.2;
        }, 2000)
        faces.forEach(f => {
            setTimeout(() => {
                f.style.opacity = 0.7
                f.style.border = "2px solid #000"
                f.style.boxShadow = "inset 0px 0px 37px 13px rgba(0,0,0,0.95)";
            }, 3000);
        })
    }, 30000);
})