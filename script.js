const fooBtn = document.getElementById('fooBtn');
const barBtn = document.getElementById('barBtn');
const foobarBtn = document.getElementById('foobarBtn');

fooBtn.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Foo';
    document.querySelector('main').appendChild(h3);
});

barBtn.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Bar';
    document.querySelector('main').appendChild(h3);
});

foobarBtn.addEventListener('click', function() {
    const h2 = document.createElement('h2');
    h2.textContent = 'FooBar';
    document.querySelector('main').appendChild(h2);
});
