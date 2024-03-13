// Retrieving posts from localStorage and displaying them
document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("blogPosts");
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach(function (post) {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
            <div>
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p>Author: ${post.username}</p>
            </div>
        `;
    blogPostsContainer.appendChild(postElement);
  });
});

// Theme toggle functionality
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
