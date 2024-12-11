import React from "react";
import BookmarkItem from "./BookmarkItem.jsx";

const BookmarkList = ({ bookmarks, onDeleteBookmark, onEditBookmark }) => {
  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <BookmarkItem
          key={bookmark.id}
          bookmark={bookmark}
          onDeleteBookmark={onDeleteBookmark}
          onEditBookmark={onEditBookmark}
        />
      ))}
    </ul>
  );
};

export default BookmarkList;
