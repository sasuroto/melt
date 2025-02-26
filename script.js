document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Спасибо за сообщение! Мы свяжемся с вами.");
        this.reset();
    });
});