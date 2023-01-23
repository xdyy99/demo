//===== IMPORT MODULES =====//

import background from './modules/background.js';
import header from './modules/header.js';
import parallax from './modules/parallax.js';
import video from './modules/video.js';
import hover from './modules/hover.js';
import smoothScroll from './modules/smoothScroll.js';
import loader from './modules/loader.js';

//===== EXECUTE =====//
window.addEventListener('load', () => {
	try {
		background();
	} catch {
		console.error('Background light is not working!');
	}
	try {
		header();
	} catch {
		console.error('Header scroll is not working!');
	}
	try {
		parallax();
	} catch {
		console.error('Parallax hover is not working!');
	}
	try {
		video();
	} catch {
		console.error('Video is not working!');
	}
	try {
		smoothScroll();
	} catch {
		console.error('Smooth scroll is not working!');
	}
	try {
		hover();
	} catch {
		console.error('Hover is not working!');
	}
	try {
		loader();
	} catch {
		console.error('Loader is not working!');
	}
});
