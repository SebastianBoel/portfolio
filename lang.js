document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = btn.getAttribute('data-set-lang');
            document.documentElement.classList.remove('lang-da', 'lang-en');
            document.documentElement.classList.add('lang-' + lang);
            document.documentElement.lang = lang;
            localStorage.setItem('lang', lang);
        });
    });
});
