

// Add a new post
function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== '') {
        const postsContainer = document.getElementById('comments');
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postContent;
        postsContainer.prepend(post);
        document.getElementById('postContent').value = '';
    }
}
function Home(){
    location.href = '/par/Home.htm';
}
function aco(){
    location.href = '/par/aco.html';
}
