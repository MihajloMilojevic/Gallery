import GLOBALS from "../../globals.json";

export default function Add() {
	return (
		<>
			<form action={`${GLOBALS.SERVER}/api/post`} method="post" encType="multipart/form-data">
				<label htmlFor="author">Name:</label> <br/>
				<input type="text" id="author" name="author" required/> <br/>
				<label htmlFor="image">Image:</label> <br/>
				<input type="file" id="image" name="image" required/> <br/>
				<input type="submit" value="Kreiraj"/>
			</form>
		</>
	)
}