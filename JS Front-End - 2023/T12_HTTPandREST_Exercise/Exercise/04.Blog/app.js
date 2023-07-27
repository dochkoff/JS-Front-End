function attachEvents() {
    const loadPostsButton=document
        .querySelector('#btnLoadPosts')
        .addEventListener('click',loadPosts);
    const viewCommentsButton=document
        .querySelector('#btnViewPost')
        .addEventListener('click',viewComments);

    const postsContainer=document.querySelector('#posts');
    const commentsContainer=document.querySelector('#post-comments');

    const postTitle=document.querySelector('#post-title');
    const postBody=document.querySelector('#post-body');
    let result;

    function loadPosts(){
        fetch('http://localhost:3030/jsonstore/blog/posts')
        .then((res)=> res.json())
        .then((posts)=>{
            postsContainer.innerHTML=';'
            commentsContainer.innerHTML='';
            postTitle.textContent='Post Details';
            postBody.textContent='';

            result=posts;
            Object.values(posts).forEach((post)=>{
                const postEntry=document.createElement('option');
                postEntry.value=post.id;
                postEntry.textContent=post.title;
                postsContainer.appendChild(postEntry);
            })
        });
    }
 
    function viewComments(){
        const selectedPost = result[postsContainer.value];
        postTitle.textContent=selectedPost.title;
        postBody.textContent=selectedPost.body;

        fetch('http://localhost:3030/jsonstore/blog/comments')
        .then((res)=> res.json())
        .then((comments)=>{
            const curentPostComments=Object.values(comments)
            .filter((comment)=> comment.postId===selectedPost.id);

            curentPostComments.forEach((comment) =>{
                const li=document.createElement('li');
                li.textContent=comment.text;

                commentsContainer.appendChild(li);
            });
        }); 
    }
}

attachEvents();