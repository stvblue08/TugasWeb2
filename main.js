import './style.css';
import {button} from './button.js';
import $ from "jquery";

$('#app').html(`
  <div class="persegi">
    <h2 id="heading">haloo</h2>
    <button id="changeText" class="btn">jangan ditekan</button>
  </div>
`);

button($('#changeText'));