export default function header() {
	// Menu resize mobile //
	let header = document.querySelector('.hdJS');
	window.scrollY > 0
		? header.classList.add('scroll')
		: header.classList.remove('scroll');
	// Menu resize scroll and header hidden //
	window.addEventListener('scroll', () => {
		window.scrollY > 0
			? header.classList.add('scroll')
			: header.classList.remove('scroll');
	});
}
