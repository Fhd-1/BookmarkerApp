import React, { useState, useEffect } from "react";
import BookmarkForm from "./components/BookmarkForm.jsx";
import BookmarkList from "./components/BookmarkList.jsx";
import EditBookmarkForm from "./components/EditBookmarkForm.jsx";
import {
  getBookmarks,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from "./api.js";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [editingBookmark, setEditingBookmark] = useState(null);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    const data = await getBookmarks();
    setBookmarks(data);
  };

  const handleAddBookmark = async (bookmark) => {
    await createBookmark(bookmark);
    fetchBookmarks();
  };

  const handleDeleteBookmark = async (id) => {
    await deleteBookmark(id);
    fetchBookmarks();
  };

  const handleEditBookmark = (bookmark) => {
    setEditingBookmark(bookmark);
  };

  const handleUpdateBookmark = async (id, updatedBookmark) => {
    await updateBookmark(id, updatedBookmark);
    setEditingBookmark(null);
    fetchBookmarks();
  };

  return (
    <div className="app">
      <h1>Bookmarker</h1>
      {editingBookmark ? (
        <EditBookmarkForm
          bookmark={editingBookmark}
          onUpdateBookmark={handleUpdateBookmark}
          onCancel={() => setEditingBookmark(null)}
        />
      ) : (
        <BookmarkForm onAddBookmark={handleAddBookmark} />
      )}
      <BookmarkList
        bookmarks={bookmarks}
        onDeleteBookmark={handleDeleteBookmark}
        onEditBookmark={handleEditBookmark}
      />
    </div>
  );
};

export default App;
