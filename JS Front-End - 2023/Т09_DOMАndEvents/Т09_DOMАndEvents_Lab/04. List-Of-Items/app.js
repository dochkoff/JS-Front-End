function addItem() {
    let allItems = document.getElementById('items');
    let newItem = document.getElementById('newItemText').value;
    let li=document.createElement('li');

    li.appendChild(document.createTextNode(newItem));
    allItems.appendChild(li);
    document.getElementById('newItemText').value = '';
}