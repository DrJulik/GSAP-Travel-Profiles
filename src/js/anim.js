import { Power2 } from 'gsap';

// Index animation
const tl = new TimelineLite();

tl.fromTo(
  '.section-1',
  0.7,
  { height: '10vh', ease: Power2.easeOut },
  { height: '100vh' }
)
  .fromTo(
    '.section-2',
    0.7,
    { height: '10vh', ease: Power2.easeOut },
    { height: '100vh' },
    '-=0.7'
  )
  .fromTo(
    '.section-3',
    0.7,
    { height: '10vh', ease: Power2.easeOut },
    { height: '100vh' },
    '-=0.7'
  )
  .fromTo(
    '.front-link',
    0.7,
    { opacity: '0', x: '70', ease: Power2.easeOut },
    { opacity: '1', x: '0' },
    '-=0.4'
  );
// London Animation
const tl1 = new TimelineLite();

tl1
  .fromTo(
    '.half-image',
    0.6,
    { width: '33vw', ease: Power2.easeOut },
    { width: '50vw' }
  )
  .fromTo(
    '.half-image',
    0.6,
    { opacity: '0.5', ease: Power2.easeOut },
    { opacity: '1' },
    '-=0.3'
  )
  .fromTo(
    '.socials',
    0.4,
    { opacity: '0', x: '-50', ease: Power2.easeOut },
    { opacity: '1', x: '0' },
    '-=0.5'
  )
  .fromTo(
    '.description-text',
    0.4,
    { opacity: '0', x: '-50', ease: Power2.easeOut },
    { opacity: '1', x: '0' },
    '-=0.4'
  )
  .fromTo(
    '.back-button',
    0.4,
    { opacity: '0', y: '-50', ease: Power2.easeOut },
    { opacity: '1', y: '0' },
    '-=0.4'
  )
  .fromTo(
    '#logo',
    0.4,
    { opacity: '0', y: '-50', ease: Power2.easeOut },
    { opacity: '1', y: '0' },
    '-=0.4'
  );

// istanbul animation

const tl2 = new TimelineLite();

tl2
  .fromTo('.image-third', 0.5, { y: '-1500', ease: Power2.easeOut }, { y: '0' })
  .fromTo(
    '.image-third',
    0.5,
    { width: '2vw', ease: Power2.easeOut },
    { width: '40vw' },
    '-=0.2'
  )
  .fromTo(
    '.image-third',
    0.7,
    { opacity: '0.5', ease: Power2.easeOut },
    { opacity: '1' },
    '-=0.5'
  )
  .fromTo(
    '.socials-istanbul',
    0.4,
    { opacity: '0', x: '-50', ease: Power2.easeOut },
    { opacity: '1', x: '0' },
    '-=0.5'
  )
  .fromTo(
    '.text',
    0.4,
    { opacity: '0', x: '-150', ease: Power2.easeOut },
    { opacity: '1', x: '0' },
    '-=0.4'
  )
  .fromTo(
    '.back-button-istanbul',
    0.4,
    { opacity: '0', y: '-50', ease: Power2.easeOut },
    { opacity: '1', y: '0' },
    '-=0.4'
  )
  .fromTo(
    '#logo-istanbul',
    0.4,
    { opacity: '0', y: '-50', ease: Power2.easeOut },
    { opacity: '1', y: '0' },
    '-=0.4'
  );

// taipei animation

const tl3 = new TimelineLite();

tl3.fromTo(
  '.taipei-half-image',
  0.5,
  { y: '-500', ease: Power2.easeOut },
  { y: '0' }
);
