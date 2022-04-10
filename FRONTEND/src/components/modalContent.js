import "../styles/modal.css";

const SERVER = "http://localhost:5000"

export default function ModalContent({post, closeModal}) {
	if(!post) return <></>
	
	return (
		<div className="modal-content">
			<div className="modal-content-image">
				<div className="close" onClick={closeModal}/>
				<img src={`${SERVER}/uploads/${post.image}`} alt={post?.author || ""}/>
				<p className="modal-content-author">{post.author}</p>
			</div>
		</div>
	)
}