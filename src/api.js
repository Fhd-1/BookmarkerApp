const API_BASE = "http://localhost:3000/api/";

export const getBookmarks = async () => {
  const response = await fetch(`${API_BASE}readAll.php`);
  if (!response.ok) throw new Error("Failed to fetch bookmarks");
  return await response.json();
};

export const createBookmark = async (bookmark) => {
  const response = await fetch(`${API_BASE}create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookmark),
  });
  if (!response.ok) throw new Error("Failed to create bookmark");
  return await response.json();
};

export const updateBookmark = async (id, bookmark) => {
  const response = await fetch(`${API_BASE}update.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...bookmark }),
  });
  if (!response.ok) throw new Error("Failed to update bookmark");
  return await response.json();
};

export const deleteBookmark = async (id) => {
  const response = await fetch(`${API_BASE}delete.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) throw new Error("Failed to delete bookmark");
  return await response.json();
};
