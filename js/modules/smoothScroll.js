export default function smoothScroll() {
	const smoothWrap = document.querySelector('#smooth-wrapper');
	const body = document.body;
	const maxHeight = Math.floor(smoothWrap.getBoundingClientRect().height - 1);
	body.style.height = maxHeight + 'px';

	const speed = 0.08;
	var offset = 0;

	const scrollTriggers = document.querySelectorAll('.scrollTrigger');

	function scroller() {
		const body = document.body;
		const maxHeight = Math.floor(smoothWrap.getBoundingClientRect().height - 1);
		body.style.height = maxHeight + 'px';

		offset += (window.pageYOffset - offset) * speed;

		var scroll = `translate3D(0,-${offset}px,0)`;
		smoothWrap.style.transform = scroll;

		if (body.classList.contains('welcome')) {
			scrollTriggers.forEach((el) => {
				const start = el.offsetTop - window.innerHeight / 2;
				const end = el.offsetTop - window.innerHeight + el.offsetHeight;
				if (offset > start || offset > end) {
					el.classList.add('active');
				}
			});
		}

		const animate = requestAnimationFrame(scroller);
	}
	scroller();
}
