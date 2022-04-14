/* eslint-disable jsx-a11y/anchor-is-valid */
 import "./Pagination.css"; 
export interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}
export default function Pagination(props: Props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
<nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => props.paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
