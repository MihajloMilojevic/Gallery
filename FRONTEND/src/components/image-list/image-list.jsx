import MUIImageList from '@mui/material/ImageList';
import ImageListItem from './image-list-item';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import "./image-list.css";

export default function ImageList({images}) {
	const {width} = useWindowDimensions();
	console.log(width);
	let colNum;
	if(width <= 480)
		colNum = 1;
	else if(width <= 768)
		colNum = 2;
	else if(width <= 1024)
		colNum = 3
	else 
		colNum = 4;
	return (
		
		<div className="image-list-container">
			<MUIImageList className="image-list" cols={colNum}>
				{
					images.map(image => (
						<ImageListItem 
							key={image._id}
							item={image}
						/>
					))
				}
			</MUIImageList>
		</div>
	)
}