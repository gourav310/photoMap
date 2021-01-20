import React from 'react';

export default function Pagination({ postsPerPage, totalPosts, pageNo,query })  {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul >
        {pageNumbers.map(number => (
          <li key={number} >
            <div className="pagination" onClick={() => pageNo(number)} >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
