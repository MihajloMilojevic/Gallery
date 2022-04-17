import RingLoader from "react-spinners/RingLoader";


export default function LoadingIcon({color, size}) {
	return (
		<div>
			<RingLoader 
				color={color}
				// size={size}
			/>
		</div>
	)
}