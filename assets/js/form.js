document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!username || !title || !content) {
      alert("Please complete the form");
      return;
    }

    const post = {
      username,
      title,
      content,
    };

    // Storing post data in localStorage
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    // Redirecting to blog page
    window.location.href = "blog.html";
  });
