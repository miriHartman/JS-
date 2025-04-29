//דף הנפשה -הכנת השחקן לבא לקראתו
let tl = gsap.timeline({
    repeat: -1
   });
   tl
    .from(".letters-1", {
     opacity: 0,
     scale: 0.2,
     duration: 0.8
    })
    .to(".letters-1", {
     opacity: 0,
     scale: 3,
     duration: 0.6,
     ease: "expo.in",
     delay: 0.5
    })
    .from(".letters-2", {
     opacity: 0,
     scale: 0.2,
     duration: 0.8
    })
    .to(".letters-2", {
     opacity: 0,
     scale: 3,
     duration: 0.6,
     ease: "expo.in",
     delay: 0.5
    })
    .from(".letters-3", {
     opacity: 0,
     scale: 0.2,
     duration: 0.8
    })
    .to(".letters-3", {
     opacity: 0,
     scale: 3,
     duration: 0.6,
     ease: "expo.in",
     delay: 0.5
    })
    .to(".ml4", {
     opacity: 0,
     duration: 0.5,
     delay: 0.5
    
    }
    );
    //פתיחת דף משחק
    setTimeout(() => {
window.location="../דפי html/game10.html"

    },6000)
   