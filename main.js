gsap.from('.swiper-slide', {duration: 3, y:'-200%', ease:'elastic'})
gsap.from('.heading', {duration: 1, opacity:0, delay:0.5, stagger:0.1})

// text plugin
// const heading = document.getElementsByClassName('heading');

// TweenLite.to(heading, 5,{
//    text:{
//         value:'Hello',
//         delimiter:'',
//         oldClass:'class1',
//         newClass:'class2'

//     },
//     ease:Linear.easeNone
// });