import React, {useState} from "react";

import Modal from "react-modal";
import ModalContent from "../components/modalContent";
import Pagination from "../components/pagination";

import useFetch from "../utils/useFetch";
import "../styles/home.css"

Modal.setAppElement('#root');

const SERVER = "http://localhost:5000"

const modalStyle = {
	content: {
	  "padding": 0,
	  "margin": 0,
	  "overflowX": "hidden",
	  "border": "none",
	  "background": "transparent"
	},
  };


export default function Home() {
	const [page, setPage] = useState(1);
	const posts = useFetch(`${SERVER}/api/post?page=${page}`)
	const [selectedPost, setSelectedPost] = useState(null);
	// const posts = {loading: false, error: null, data: {
	// 	posts: []
	// }}
	console.log(posts);
	// if(posts.loading)
	// 	return (<h1>Loading screen</h1>)
	if(posts.error)
		return (<h1>Error screen</h1>)
	if(!posts.data?.posts?.length)
		return (<h1>No posts</h1>)
	return (
		<>
			<div className="gallery">
			{
				{/* posts.data.posts.map(post => (
					<div className="post" key={post._id}>
						<img 
							src={`${SERVER}/uploads/${post.image}`} 
							className="image" 
							alt={"d"} 
							onClick={() => setSelectedPost(post)}
						/>
					</div>
				)) */}
			}
			</div>
			{<Modal
				isOpen={selectedPost === null ? false : true}
				style={modalStyle}
			>
				<ModalContent post={selectedPost} closeModal={() => setSelectedPost(null)}/>
			</Modal>}
			<Pagination 
				currPage={page}
				maxPage={posts.data?.totalPages || 1}
				moveTo={setPage}
			/>
		</>
		
	);
}