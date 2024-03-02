import cafe from './assets/cafe.png';

const h1 = document.createElement('h1');
h1.textContent = 'Hello Kitty Café';

const cafePic = document.createElement('img');
cafePic.src = cafe;
cafePic.setAttribute('alt', 'our beautiful interior');
cafePic.id = 'cafePic';

const span  = document.createElement('span');
span.classList.add('Description');

const p = document.createElement('p');
p.textContent = 'Welcome, to our Hello Kitty Café!';

span.appendChild(p);
span.textContent = "It's a beautiful and fascinating place to spend time with loved ones, make new friends, or even enjoy our cuisine by yourself. We ensure that everyone receives top-notch serivce and a personalized approach.";


export function displayHome() {
    content.innerHTML = '';
    content.appendChild(h1);
    content.appendChild(cafePic);
    content.appendChild(span);
}

