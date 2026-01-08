
const posts = document.querySelectorAll('.blog-post');

console.log("Total blog posts: " + totalPosts);

alert("This blog currently has " + totalPosts + " posts.");

if (posts.length > 0) {
    posts[0].style.backgroundColor = "#e8f5e9";
}
