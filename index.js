(function() {
    'use strict';

    const script = document.createElement('script');
    script.src = 'https://luke-chang.github.io/js-spatial-navigation/spatial_navigation.js';
    script.onload = function() {
        initSpatialNavigation();
    };
    document.head.appendChild(script);

    function initSpatialNavigation() {
document.querySelectorAll(".header-group, .header-setting, #header_right, .share-buttons, #discussion, #schedule-block, #footer, .sb-donate, #pick_menu, .clearfix, .block_area.block_area_sidebar.block_area-connecting").forEach((e)=>{e.remove()})
document.querySelector("#mobile_menu").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
				document.querySelector("#mobile_menu").click()
    }
});
        const focusableElements = document.querySelectorAll('a, .focusable, button, video, input, #mobile_menu');

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '5px solid red !important';
                element.style.border = '5px solid red !important';
            });
			document.head.innerHTML += `<style>
    /* Add style to the focused elements */
    :focus {
      outline: 6px solid red !important;
    } </style>`

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.border = '';
            });
        });
window.SpatialNavigation.disable("#sidebar_menu, #sidebar_menu>*, .swiper-slide, .swiper-slide>*")
window.SpatialNavigation.enable("#sidebar_menu.active, #sidebar_menu.active>*")
       window.SpatialNavigation.enable("#swiper-slide-active")
        window.SpatialNavigation.add({
    selector: 'a, .focusable, button, video, input, #mobile_menu'
});

        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
 window.SpatialNavigation.init();
    }
})();
