import dice from './js/dice';

(function() {
    var blacklistURL = 'https://static.zeit.de/embed/global-blacklist';
    var embedURL = 'https://static.zeit.de/administratives/embeds/2019/briefkasten-article/briefkasten-article.html';
    var articlePage = document.querySelector('.article-page[data-page-number="1"]');

    // does not support window.fetch or previousElementSibling
    if ( !('fetch' in window) || !('previousElementSibling' in document.documentElement) ) {
        return;
    }

    // already has a mct-embed or tagmanager injection
    if ( document.querySelector('#mycountrytalks-embed') || document.querySelector('#tagmanager-injection') ) {
        return;
    }

    if ( !articlePage ) {
        return;
    }

    // article is too short
    if ( document.querySelectorAll('.article-page > .paragraph').length <= 3 ) {
        return;
    }

    function loadEmbed() {
        var paragraphs = document.querySelectorAll('.article-page[data-page-number="1"] > .paragraph'),
            paragraph,
            previous;
        
        for (var i = paragraphs.length - 1, stop = i - 3; i > -1 && i > stop; i--) {
            paragraph = paragraphs[ i ];
            previous = paragraph.previousElementSibling;

            if (previous && previous.classList.contains('paragraph')) {
                if (!previous.previousElementSibling || !previous.previousElementSibling.classList.contains('ad-container')) {
                    fetch( embedURL ).then( function( response ) {
                        return response.text();
                    }).then( function( html ) {
                        var container = document.createElement( 'div' );
                        container.style.clear = 'both';
                        container.setAttribute('id', 'tagmanager-injection');
                        container.innerHTML = html;
                        previous.insertAdjacentElement( 'beforebegin', container );
                    });

                    // stop iteration
                    return;
                }
            } 
        }
    }

    fetch( blacklistURL ).then( function( response ) {
        return response.json();
    }).then( function( data ) {
        var onBlacklist = data.urls.some( function( element ) {
            return location.href.indexOf(element) !== -1;
        });
        if (!onBlacklist) {
            var canonicalUrl = document.querySelector('meta[property="og:url"]').getAttribute('content') || window.location.href;
            if (dice(canonicalUrl, 2)) {
                loadEmbed();
            }
        }
    });

})();