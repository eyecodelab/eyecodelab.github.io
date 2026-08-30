(function () {
    const programTranslations = {
        vi: {
            'program-register': 'Đăng ký tham gia',
            'program-view': 'Xem chương trình',
            'pain-eyebrow': 'BẠN CÓ ĐANG GẶP NHỮNG VẤN ĐỀ NÀY?',
            'pain-heading': 'Muốn tiến xa hơn trong AI & Robotics nhưng chưa biết bắt đầu từ đâu?',
            'pain-1': 'Dành nhiều thời gian học AI & Robotics nhưng <strong>chưa biết kiến thức nào thực sự quan trọng, kỹ thuật nào nên dùng và khi nào nên áp dụng</strong>?',
            'pain-2': 'Muốn ứng tuyển <strong>AI / Computer Vision / Robotics Internship hoặc công việc trong và ngoài nước</strong> nhưng <strong>CV chưa có project đủ nổi bật</strong>?',
            'pain-3': 'Đã biết train model nhưng chưa biết cách xây dựng một <strong>AI/Research project bài bản từ Problem → Experiments → Results</strong>?',
            'pain-4': 'Đọc nhiều paper nhưng chưa biết cách tìm <strong>research problem, research gap và phát triển ý tưởng mới</strong>?',
            'pain-5': 'Có kết quả research nhưng chưa biết cách <strong>phân tích, trình bày và viết một research paper theo tiêu chuẩn quốc tế</strong>?',
            'pain-6': 'Có định hướng phát triển <strong>career trong và ngoài nước hoặc học Master/PhD</strong> nhưng chưa biết nên chuẩn bị <strong>CV, portfolio và research profile</strong> như thế nào?'
        },
        en: {
            'program-register': 'Register Now',
            'program-view': 'View Program',
            'pain-eyebrow': 'ARE YOU FACING THESE CHALLENGES?',
            'pain-heading': 'Want to go further in AI & Robotics but not sure where to start?',
            'pain-1': 'Spending a lot of time learning AI & Robotics but still unsure <strong>which knowledge and techniques really matter, when to use them, and why</strong>?',
            'pain-2': 'Want to apply for <strong>AI / Computer Vision / Robotics internships or jobs locally and internationally</strong>, but your <strong>CV does not yet have strong enough projects</strong>?',
            'pain-3': 'Know how to train models but are not yet confident in building a structured <strong>AI/Research project from Problem → Experiments → Results</strong>?',
            'pain-4': 'Read many research papers but are still unsure how to identify <strong>research problems, research gaps and develop new ideas</strong>?',
            'pain-5': 'Have research results but are not sure how to <strong>analyze, present and turn them into a research paper that meets international academic standards</strong>?',
            'pain-6': 'Planning for a <strong>career locally or internationally, or considering Master/PhD study</strong>, but not sure how to build the right <strong>CV, portfolio and research profile</strong>?'
        }
    };

    const existingChangeLanguage = window.changeLanguage;
    window.changeLanguage = function (lang) {
        const selectedLanguage = programTranslations[lang] ? lang : 'vi';
        if (typeof existingChangeLanguage === 'function') existingChangeLanguage(selectedLanguage);
        document.querySelectorAll('[data-program-i18n]').forEach(function (element) {
            const value = programTranslations[selectedLanguage][element.dataset.programI18n];
            if (value) element.innerHTML = value;
        });
    };

    document.addEventListener('DOMContentLoaded', function () {
        window.changeLanguage(localStorage.getItem('language') || 'vi');
    });
}());
