const newFormHandler = async (event) => {
  event.preventDefault();

  var comment = document.querySelector("#post-comment").value.trim();
  var url = event.target.baseURI;
  var postId = url.substring(url.lastIndexOf("/") + 1);
  console.log(postId);
  if (comment) {
    const response = await fetch(`/api/comments/`, {
      method: "POST",
      body: JSON.stringify({ comment, postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Comment field can't be empty!");
    }
  }
};

document
  .querySelector(".add-comment-form")
  .addEventListener("submit", newFormHandler);
