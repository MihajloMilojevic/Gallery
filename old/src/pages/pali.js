import React, { useState } from "react"

export default function Pali() {
	const [images, setImages] = useState([]);
	const [url, setUrl] = useState("")
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				setImages([...images, url]);
				setUrl("");
			}}>
				<input type="text" value={url} onChange={e => {
					setUrl(e.target.value);
				}}/>
				<button type="submit">Dodaj</button>
			</form>
			{
				images.map((img, ind) => (<img src={img} key={ind} alt={img} style={{
					width: 300,
					height: 300,
					margin: 15
				}}/>))
			}
		</div>
	)
}