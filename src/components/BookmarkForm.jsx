import React, { useState } from "react";

const BookmarkForm = ({ onAddBookmark }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && link) {
      onAddBookmark({ title, link });
      setTitle("");
      setLink("");
    }
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
      <button type="submit">Add</button>
    </form>
  );
};

export default BookmarkForm;
