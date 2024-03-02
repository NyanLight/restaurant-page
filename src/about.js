const span = document.createElement('span');
span.classList.add('Description');
span.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa soluta rem, molestias quis eius praesentium voluptatum eos nulla obcaecati sint corporis quos distinctio ad, doloribus pariatur tempore amet unde libero fuga quae harum vitae ea impedit alias. Accusamus, eveniet saepe.';

export function displayAbout() {
    content.innerHTML = '';
    content.appendChild(span);
}