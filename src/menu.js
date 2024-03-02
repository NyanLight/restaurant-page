import cake from './assets/cake.png';
import iceCream from './assets/ice-cream.png';
import ramen from './assets/ramen.jpg';

const span = document.createElement('span');
span.classList.add('Description');

const p1 = document.createElement('p');
p1.classList.add('item');
const p2 = document.createElement('p');
p2.classList.add('item');
const p3 = document.createElement('p');
p3.classList.add('item');

const cakePic = document.createElement('img');
cakePic.src = cake;
cakePic.setAttribute('alt', 'picture of tasty cake');
cakePic.classList.add('food');

const cakeDesc = document.createElement('span');
cakeDesc.classList.add('foodDescription');
cakeDesc.textContent = "Adorable Hello Kitty cake: A delightful confection featuring everyone's favorite feline character, adorned with colorful icing and sweet details";

const icecreamPic = document.createElement('img');
icecreamPic.src = iceCream;
icecreamPic.setAttribute('alt', 'picture of tasty ice cream');
icecreamPic.classList.add('food');

const isecreamDesc = document.createElement('span');
isecreamDesc.classList.add('foodDescription');
isecreamDesc.textContent = "Hello Kitty ice cream: Playful scoops of creamy goodness inspired by the iconic character, with a swirl of happiness in every bite";

const ramenPic = document.createElement('img');
ramenPic.src = ramen;
ramenPic.setAttribute('alt', 'picture of tasty ramen');
ramenPic.classList.add('food');

const ramenDesc = document.createElement('span');
ramenDesc.classList.add('foodDescription');
ramenDesc.textContent = "Hello Kitty ramen: A whimsical twist on a traditional favorite, featuring cute Hello Kitty-shaped noodles swimming in savory broth, bringing joy with every slurp.";

p1.appendChild(cakePic);
p1.appendChild(cakeDesc);
p2.appendChild(icecreamPic);
p2.appendChild(isecreamDesc);
p3.appendChild(ramenPic);
p3.appendChild(ramenDesc);

span.appendChild(p1);
span.appendChild(p2);
span.appendChild(p3);

export function displayMenu() {
    content.innerHTML = '';
    content.appendChild(span);
}



