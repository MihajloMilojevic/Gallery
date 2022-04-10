const SERVER = "http://localhost:5000"

export default function Add() {
	return (
		<>
			<form action={`${SERVER}/api/post`} method="post" encType="multipart/form-data">
				<label htmlFor="author">Name:</label> <br/>
				<input type="text" id="author" name="author" required/> <br/>
				<label htmlFor="image">Image:</label> <br/>
				<input type="file" id="image" name="image" required/> <br/>
				<input type="submit" value="Kreiraj"/>
			</form>
		</>
	)
}