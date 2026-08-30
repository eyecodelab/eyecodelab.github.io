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

    document.addEventListener('DOMContentLoaded', function () {
        window.changeLanguage(localStorage.getItem('language') || 'vi');
    });
}());
