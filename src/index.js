import html from './index.html';
import css from './style.css';
import {displayHome} from './home.js';
import { displayAbout } from './about.js';
import { displayMenu } from './menu.js';

const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const menuBtn = document.getElementById('menuBtn');
const content = document.getElementById('content');

homeBtn.addEventListener('click', displayHome);
aboutBtn.addEventListener('click', displayAbout);
menuBtn.addEventListener('click', displayMenu);

displayHome();