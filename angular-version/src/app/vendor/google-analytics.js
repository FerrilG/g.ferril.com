(
    function () {
        'use strict';
        var gtagSuffix = 1;
        var host = window.location.host;

        window.dataLayer = window.dataLayer || [];
        window.analytics_id = 'UA-114105270-' + gtagSuffix;

        var script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + analytics_id;
        script.async = true;
        document.head.appendChild(script);

        window.gtag = function () {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', analytics_id, {
            'send_page_view': false,
        });
    }
)();