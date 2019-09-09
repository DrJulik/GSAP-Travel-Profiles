import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const tl = new TimelineLite();

    tl.fromTo(
      to,
      0.2,
      { opacity: '0.6' },
      {
        opacity: '1',
        ease: Power2.easeOut,
        onComplete: function() {
          from.remove();
          done();
        }
      }
    ).fromTo(
      to,
      1,
      { height: '2vh' },
      {
        height: '100vh',
        ease: Power2.easeOut
      }
    );
  }
  out({ from, done }) {
    const tl = new TimelineLite();

    tl.fromTo(
      from,
      1,
      { opacity: '1', ease: Power2.easeOut },
      { opacity: '0.6' }
    );
    done();
  }
}

export default Fade;
