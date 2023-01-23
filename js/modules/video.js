export default function video() {
	const videos = document.querySelectorAll('.videoJS');
	videos.forEach((video) => {
		const src = video.getAttribute('data-src');
		setTimeout(() => {
			video.src = src;
		}, 2000);
	});
}
