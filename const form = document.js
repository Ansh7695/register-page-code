const form = document.getElementById('registration-form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');
const progressBar = document.createElement('div');
progress.appendChild(progressBar);

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const file = fileInput.files[0];
	const formData = new FormData();
	formData.append('file', file);
	formData.append('name', document.getElementById('name').value);
	formData.append('email', document.getElementById('email').value);
	formData.append('Contact', document.getElementById('Contact').value);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', './Untitled-4.php');
	xhr.upload.addEventListener('progress', (event) => {
		if (event.lengthComputable) {
			progressBar.style.width = (event.loaded / event.total) * 100 + '%';
		}
	});
	xhr.onload = () => {
		if (xhr.status === 200) {
			console.log(xhr.responseText);
			alert('Registration successful');
		} else {
			console.log(xhr.responseText);
			alert('Registration failed');}
	};
	xhr.send(formData);
});