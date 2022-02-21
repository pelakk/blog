import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <nav
        aria-label="Page navigation example"
        className="flex justify-center my-20"
      >
        <ul className="inline-flex items-center -space-x-px">
          {pages.map((page) => (
            <li className="px-1" key={page}>
              <a
                href="#"
                onClick={() => paginate(page)}
                className="rounded py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
