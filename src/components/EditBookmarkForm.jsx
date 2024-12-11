// EditBookmarkForm.jsx

import React, { useState } from "react";

const EditBookmarkForm = ({ bookmark, onUpdateBookmark, onCancel }) => {
  const [title, setTitle] = useState(bookmark.title);
  const [link, setLink] = useState(bookmark.link);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateBookmark(bookmark.id, { title, link });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditBookmarkForm;
