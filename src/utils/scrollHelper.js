/**
 * Smoothly scrolls to a section by its ID
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

/**
 * Scrolls to the top of the page
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

/**
 * Gets the current scroll position
 * @returns {number} The current scroll position in pixels
 */
export const getScrollPosition = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Checks if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if the element is in the viewport
 */
export const isInViewport = (element) => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
