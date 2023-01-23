export default function parallax() {
	VanillaTilt.init(document.querySelectorAll('.prlJS'), {
		reverse: true,
		max: 2,
		speed: 1000,
	});
}
