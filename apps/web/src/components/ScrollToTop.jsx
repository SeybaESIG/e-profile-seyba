/**
 * Runs before paint on route changes so users never see a flash at the wrong scroll position.
 * Supports deep links like `/#projects` after navigating from a detail page.
 */
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        if (pathname === '/' && hash) {
            const id = decodeURIComponent(hash.replace(/^#/, ''));
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'auto', block: 'start' });
                return;
            }
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;