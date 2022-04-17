/* eslint-disable jsx-a11y/img-redundant-alt */
import MUIImageListItem from '@mui/material/ImageListItem';
import MUIImageListItemBar from '@mui/material/ImageListItemBar';

import GLOBALS from "../../globals.json";

export default function ImageListItem({item}) {
	return (
		<MUIImageListItem>
          <img
            src={`${GLOBALS.SERVER}/uploads/${item.image}`}
            srcSet={`${GLOBALS.SERVER}/uploads/${item.image}`}
            alt={`image: ${item.image} author: ${item.author}`}
            loading="lazy"
          />
          <MUIImageListItemBar
            title={item.author}
          />
		</MUIImageListItem>
	)
}