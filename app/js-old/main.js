window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 'fluid', grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 'fluid' },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};






var mymodule = (function () {
//Private

//Public
    return {
        $$: function (id) {
            'use strict';
            if (typeof id != 'undefined') {
                return document.getElementById(id);
            }
            else {
                return 'undefined'
            }
        },

        showDivs: function (arg) {
            document.getElementById(arg).style.visibility = 'visible';
        },

        hideDivs: function (arg) {
            document.getElementById(arg).style.visibility = 'hidden';
        }

    }
})();


//AddEventListener





