'use strict'

var initialized = false,
    accordionDefaultOptions = {
        "baseSelector": ".js-accordion",
        "linkSelector": ".js-accordion-link",
        "headerClass": "js-accordion__header",
        "active": 0,
        "animate": true,
        "collapsible": true,
        "heightStyle": "content"
    },
    accordionInitOptions = {},
    $cache = {},
    hash = window.location.hash,
    isExpandedAccordionByAnchor = false;

var isHashExist = hash.length > 0;

/**
 * @function
 * @description Initialize cache
 * @returns {void}
 */

function initCache() {
    $cache.document = $(document);
}

/**
 * @function
 * @description Initialize default accordion options
 * @param {Object} params
 * @returns {void}
 */
function initAccordionOptions(params) {
   // accordionInitOptions = $.extend({}, accordionDefaultOptions, params || {});
}

/**
 * @function
 * @description Initialize custom accordion plugin based on jQuery UI Accordion
 * @returns {void}
 */
function initAccordion(context) {

}

/**
 * @function
 * @description Initialize events
 * @returns {void}
 */
function initEvents() {
    
}

module.exports = {
    init: function (params) {
        if (initialized) return;
        initCache();
        initAccordionOptions(params);
        initAccordion(params.container || document);
        initEvents();
        initialized = true;
    }
};
