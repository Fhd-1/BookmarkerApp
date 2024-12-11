const apiBase = 'http://localhost:3000/api/';

document.addEventListener('DOMContentLoaded', fetchBookmarks);

document.getElementById('addBookmarkForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const link = document.getElementById('link').value.trim();

    if (title && link) {
        try {
            const response = await fetch(`${apiBase}create.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, link }),
            });

            const result = await response.json();
            alert(result.message);
            fetchBookmarks();
            e.target.reset();
        } catch (error) {
            console.error('Error adding bookmark:', error);
        }
    }
});

async function fetchBookmarks() {
    try {
        const response = await fetch(`${apiBase}readAll.php`);
        const bookmarks = await response.json();

        const bookmarksList = document.getElementById('bookmarksList');
        bookmarksList.innerHTML = '';

        if (Array.isArray(bookmarks)) {
            bookmarks.forEach((bookmark) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>
                        <strong>${bookmark.title}</strong> - 
                        <a href="${bookmark.link}" target="_blank">${bookmark.link}</a>
                    </span>
                    <button class="delete-btn" onclick="deleteBookmark(${bookmark.id})">Delete</button>
                `;
                bookmarksList.appendChild(li);
            });
        } else {
            bookmarksList.innerHTML = '<li>No bookmarks found</li>';
        }
    } catch (error) {
        console.error('Error fetching bookmarks:', error);
    }
}

async function deleteBookmark(id) {
    try {
        const response = await fetch(`${apiBase}delete.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const result = await response.json();
        alert(result.message);
        fetchBookmarks();
    } catch (error) {
        console.error('Error deleting bookmark:', error);
    }
}
