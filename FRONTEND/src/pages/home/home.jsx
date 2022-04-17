import {useState} from "react";
import {useNavigate} from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import GLOBALS from "../../globals.json";

import "./home.css";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Pagination from '@mui/material/Pagination';

import ImageList from "../../components/image-list";
import LoadingIcon from "../../components/loaders/loading-icon";


export default function Home() {
	const [page, setPage] = useState(1);
	const posts = useFetch(`${GLOBALS.SERVER}/api/post?page=${page}`, {}, [page])
	const navigate = useNavigate();

	const goToAddPage = () => {
		navigate("add");
	}
	const handlePageChange = (event, value) => {
		setPage(value);
	};
	return (
		<div className="home">
			<SpeedDial
				className="add-button"
				ariaLabel="Go to add image page"
				icon={<SpeedDialIcon />}
				open={false}
				onClick={goToAddPage}
			/>
			{
				posts.loading ? <LoadingIcon color={"black"} /> :
				posts.error ? (<h1>Error screen</h1>) :
				!posts.data?.posts?.length ? (<h1>No posts</h1>) :
				(<ImageList images={posts.data?.posts} />)
			}
			<Pagination count={posts.data?.totalPages} variant="outlined" shape="rounded" page={page} onChange={handlePageChange} />
		</div>
	);
}