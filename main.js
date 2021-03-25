let greeting = `
		<div>
			<h3>This is when no conditional is met</h3>
			<p>No content to show</p>
		</div>
	`;

document.getElementById('button-a').addEventListener('click', () => {
	greeting = `
			<div>
				<h3>Here you can display Train content</h3>
				<p>And show whatever content you like</p>
			</div>
		`;

	updateRender();
});

document.getElementById('button-b').addEventListener('click', () => {
	greeting = `
			<div>
				<h3>Bus content</h3>
				<p>And the same here</p>
			</div>
		`;

	updateRender();
});

const updateRender = () =>
	(document.getElementById('container').innerHTML = greeting);

document.getElementById('container').innerHTML = greeting;
