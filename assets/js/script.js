
/* Background (Left) */
TweenMax.to('.bg-left', 2, {delay: .8, width: '50%', ease: Power2.easeInOut})

/* Background (Right) */
TweenMax.to('.bg-right', 2, {delay: .6, width: '50%', ease: Power3.easeInOut})

/* Nav */
TweenMax.staggerFrom('nav ul li', 2, {delay: 1, x: -1000, ease: Circ.easeInOut}, 0.08)

/* Text Intro */
TweenMax.from('.text-intro', 2, {delay: 1.5, x: -600, ease: Power3.easeInOut})

/* Image 02 */
TweenMax.to('.image-container.img-01 .img-bg', 2, {delay: 2.5, width: '420px', ease: Power2.easeInOut})
TweenMax.to('.image-container.img-02 .img-bg', 2, {delay: 2, width: '370px', ease: Power2.easeInOut})

/* Image 03 */
TweenMax.to('.image-container.img-03', 2, {delay: 2.5, top: '50%', ease: Power2.easeInOut})
TweenMax.to('.image-container.img-03 .img-bg', 2, {delay: 3, opacity: 1, ease: Power2.easeInOut})

/* Image 04 */
TweenMax.to('.image-container.img-04', 2, {delay: 3, bottom: '-2%', ease: Power2.easeInOut})
TweenMax.to('.image-container.img-04 .img-bg', 3, {delay: 3, opacity: 1, ease: Power2.easeInOut})

/* Image 05 */
TweenMax.to('.image-container.img-05', 2, {delay: 3, right: '-1%', ease: Power2.easeInOut})
TweenMax.to('.image-container.img-05 .img-bg', 3, {delay: 3, opacity: 1, ease: Power2.easeInOut})



// TweenMax.from('.main-title', 2, {
// 	delay: .6,
// 	x: 1000,
// 	ease: Circ.easeInOut
// })