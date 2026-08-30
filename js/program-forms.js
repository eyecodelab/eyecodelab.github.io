(function () {
    // Keep these URLs independent: they represent two separate application pathways.
    const RESEARCH_INTERNSHIP_FORM_URL = 'https://forms.gle/rcUdxac672b1rxYj9';
    const TRAINING_INTERNSHIP_FORM_URL = 'https://forms.gle/K93pWCMpfXfk7P1b7';

    const formUrls = {
        researchInternship: RESEARCH_INTERNSHIP_FORM_URL,
        trainingInternship: TRAINING_INTERNSHIP_FORM_URL
    };

    document.querySelectorAll('[data-form-key]').forEach(function (link) {
        const formUrl = formUrls[link.dataset.formKey];
        if (formUrl) {
            link.href = formUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            return;
        }

        link.setAttribute('aria-disabled', 'true');
        link.addEventListener('click', function (event) {
            event.preventDefault();
        });
    });
}());
