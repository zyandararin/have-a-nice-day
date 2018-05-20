// @flow
import 'particles.js';
import 'sanitize.css/sanitize.css';
import 'spinkit/css/spinners/5-pulse.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import waitLoading from './loading';
import '../css/app.pcss';
import particleSettings from './particles.setting';

const { particlesJS } = window;
if (particlesJS != null) {
  particlesJS('particles', particleSettings);
}

const mainElement = document.getElementById('container');
const loadingElement = document.getElementById('loading');

if (mainElement != null && loadingElement != null) {
  waitLoading()
    .then(
      () =>
        new Promise(resolve => {
          mainElement.setAttribute('data-is-loading', 'done');
          loadingElement.setAttribute('data-is-loading', 'done');
          AOS.init({
            easing: 'ease-out'
          });
          setTimeout(() => resolve(), 2000);
        })
    )
    .then(() => {
      mainElement.setAttribute('data-is-loading', 'ended');
      loadingElement.setAttribute('data-is-loading', 'ended');
    });
}
