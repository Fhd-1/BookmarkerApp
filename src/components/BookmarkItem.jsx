// BookmarkItem.jsx

import React from "react";

const BookmarkItem = ({ bookmark, onDeleteBookmark, onEditBookmark }) => {
  return (
    <li>
      <span>
        <strong>{bookmark.title}</strong> -{" "}
        <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
          {bookmark.link}
        </a>
      </span>
      <div>
        <button onClick={() => onEditBookmark(bookmark)}>Edit</button>
        <button onClick={() => onDeleteBookmark(bookmark.id)}>Delete</button>
      </div>
    </li>
  );
};

export default BookmarkItem;
