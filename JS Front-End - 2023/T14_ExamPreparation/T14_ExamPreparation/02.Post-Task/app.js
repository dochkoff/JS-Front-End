window.addEventListener("load", solve);

function solve() {
    let publishBtn = document.getElementById('publish-btn');
    publishBtn.addEventListener('click', publish);

    function publish() {
        let titleEelement = document.getElementById('task-title');
        let categoryEelement = document.getElementById('task-category');
        let contentEelement = document.getElementById('task-content');

        let title = titleEelement.value;
        let category = categoryEelement.value;
        let content = contentEelement.value;

        if (!title || !category || !content) {
            return;
        }

        let h4Element = document.createElement('h4');
        let pCategoryElement = document.createElement('p');
        let pContentElement = document.createElement('p');

        h4Element.textContent = title;
        pCategoryElement.textContent = `Category: ${category}`;
        pContentElement.textContent = `Content: ${content}`;

        let articleElement=document.createElement('article');
        articleElement.appendChild(h4Element);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pContentElement);

        let btnEditElement = document.createElement('button');
        btnEditElement.classList.add('action-btn');
        btnEditElement.classList.add('edit');
        btnEditElement.textContent = 'Edit';
        let btnPostElement = document.createElement('button');
        btnPostElement.classList.add('action-btn');
        btnPostElement.classList.add('post');
        btnPostElement.textContent = 'Post';

        let liElement=document.createElement('li');
        liElement.className ='rpost';
        liElement.appendChild(articleElement);
        liElement.appendChild(btnEditElement);
        liElement.appendChild(btnPostElement);

        let ulElement = document.getElementById('review-list');
        ulElement.appendChild(liElement);

        let publishedListElement = document.getElementById('published-list');

        titleEelement.value='';
        categoryEelement.value = '';
        contentEelement.value= '';

        btnEditElement.addEventListener('click', (e) => {
            titleEelement.value = title;
            categoryEelement.value = category;
            contentEelement.value = content;

            liElement.remove();
        })

        btnPostElement.addEventListener('click', (e) => {
            btnEditElement.remove();
            btnPostElement.remove();
            
            publishedListElement.appendChild(liElement);
        })
    }
}