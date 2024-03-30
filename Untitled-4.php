<?php
if (isset($_FILES['file'])) {
	$target_dir = "uploads/";
	$target_file = $target_dir . basename($_FILES['file']['name']);
	move_uploaded_file($_FILES['file']['tmp_name'], $target_file);

	$name = $_POST['name'];
	$email = $_POST['email'];

	// Save the name, email, and file path to the database
	// ...

	echo 'File uploaded successfully';
}