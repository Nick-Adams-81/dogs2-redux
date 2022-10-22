const Post = (url, data) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => console.log("New Item Added!!!"))
    .catch((err) => console.log(err));
};
export default Post;
