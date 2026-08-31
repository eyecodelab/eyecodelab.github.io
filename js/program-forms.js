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

    if (document.body.classList.contains('ai-program-page')) {
        document.querySelectorAll('[data-form-key="trainingInternship"]').forEach(function (link) {
            if (link.dataset.gaApplyTracked === 'true') return;
            link.dataset.gaApplyTracked = 'true';

            link.addEventListener('click', function () {
                const query = new URLSearchParams(window.location.search);
                const eventParameters = {
                    program: 'ai_research_sep2026',
                    page_path: window.location.pathname,
                    link_url: link.href,
                    utm_source: query.get('utm_source') || '',
                    utm_medium: query.get('utm_medium') || '',
                    utm_campaign: query.get('utm_campaign') || '',
                    utm_content: query.get('utm_content') || ''
                };
                const sendEvent = typeof window.gtag === 'function' ? window.gtag : function () {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push(arguments);
                };

                sendEvent('event', 'apply_click', eventParameters);
            });
        });
    }
}());
