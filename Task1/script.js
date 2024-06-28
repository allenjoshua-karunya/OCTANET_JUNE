// JavaScript code to handle button click and dynamic content
document.getElementById('buy-now').addEventListener('click', function() {
    alert('Thank you for your interest! We will contact you soon.');
});

window.onload = function() {
    // Example of dynamically changing content
    document.getElementById('car-title').textContent = '1967 Ford Mustang';
    document.getElementById('car-price').textContent = 'Price: $60,000';
    document.getElementById('car-image').src = 'mustang.jpg';
};
