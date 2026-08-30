(function () {
    const headerTranslations = {
        en: {
            home: 'Home',
            about: 'About Us',
            services: 'Our Services',
            careers: 'Careers',
            course: 'Training & Internship',
            blog: 'Technology Blog',
            contact: 'Contact'
        },
        vi: {
            home: 'Trang chủ',
            about: 'Giới thiệu',
            services: 'Dịch vụ',
            careers: 'Tuyển dụng',
            course: 'Đào tạo & Thực tập',
            blog: 'Blog Công nghệ',
            contact: 'Liên hệ'
        }
    };

    const existingChangeLanguage = window.changeLanguage;

    window.changeLanguage = function (lang) {
        const selectedLanguage = headerTranslations[lang] ? lang : 'vi';
        if (typeof existingChangeLanguage === 'function') {
            existingChangeLanguage(selectedLanguage);
        }
        localStorage.setItem('language', selectedLanguage);
        document.querySelectorAll('.header [data-i18n]').forEach(function (element) {
            const translation = headerTranslations[selectedLanguage][element.dataset.i18n];
            if (translation) element.textContent = translation;
        });
        const currentLanguage = document.getElementById('lang-current');
        if (currentLanguage) currentLanguage.textContent = selectedLanguage.toUpperCase();
    };

    window.setLanguage = window.changeLanguage;

    function standardizeFooter() {
        const footer = document.querySelector('.footer, .program-footer');
        if (!footer) return;

        footer.outerHTML = '<footer class="site-footer"><div class="site-footer-inner"><div class="site-footer-brand"><p>We make technology work for you.</p></div><nav class="site-footer-nav" aria-label="Footer navigation"><h2>Explore</h2><a href="index.html">Home</a><a href="course.html">Training &amp; Internship</a><a href="careers.html">Careers</a><a href="index.html#contact">Contact</a></nav><div class="site-footer-contact"><h2>Contact</h2><a href="mailto:eyecode@eyecodetech.com">eyecode@eyecodetech.com</a><a href="https://www.facebook.com/eyecodetech.co" target="_blank" rel="noopener noreferrer">Fanpage EyeCode Tech</a></div></div><div class="site-footer-bottom">Copyright &copy; 2026 EyeCode Tech. All Rights Reserved.</div></footer>';
    }

    document.addEventListener('DOMContentLoaded', function () {
        standardizeFooter();
        window.changeLanguage(localStorage.getItem('language') || 'vi');
    });
}());
