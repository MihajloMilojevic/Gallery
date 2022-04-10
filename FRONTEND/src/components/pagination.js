import "../styles/pagination.css";

export default function Pagination({currPage, maxPage, moveTo}) {
	return (
		<nav aria-label="Page navigation example" className="paginacija">
			<ul className="pagination justify-content-center">
				<li className="page-item"
					onClick={() => {
						if(currPage === 1) return;
						moveTo(1)
					}}
				>
					&laquo;
				</li>
				<li className="page-item"
					onClick={() => {
						if(currPage === 1) return;
						moveTo(currPage - 1)
					}}
				>
					&lt;
				</li>
				<li className="page-item">
					{currPage}
				</li>
				<li className="page-item"
					onClick={() => {
						if(currPage === maxPage) return;
						moveTo(currPage + 1)
					}}
				>
					&gt;
				</li>
				<li className="page-item"
					onClick={() => {
						if(currPage === maxPage) return;
						moveTo(maxPage)
					}}
				>
					&raquo;
				</li>
			</ul>
		</nav>
	)
}