export default function background() {
	const light = document.querySelector('.backgroundJS');
	if (light) {
		const speed = 0.08;
		const pos = {
			X: 0,
			Y: 0,
		};
		const cursor = {
			X: 0,
			Y: 0,
		};

		function follow() {
			pos.X += (cursor.X - pos.X) * speed;
			pos.Y += (cursor.Y - pos.Y) * speed;

			light.style.left = pos.X + 'px';
			light.style.top = pos.Y + 'px';

			cursor.Y > window.innerHeight / 2
				? light.classList.add('filter')
				: light.classList.remove('filter');

			const animate = requestAnimationFrame(follow);
		}
		follow();

		window.addEventListener('mousemove', (e) => {
			cursor.X = e.clientX;
			cursor.Y = e.clientY;
		});
	}
}
