import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="text-sm mb-4" aria-label="breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index !== paths.length - 1 ? (
              <>
                <Link to={`/${path.toLowerCase()}`} className="text-blue-600 hover:text-blue-800">
                  {path}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              <span className="text-gray-500">{path}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
