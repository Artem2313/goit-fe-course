import model from './model';

const refs ={
    addItemBtn: document.querySelector('button[data-action="add"]')
}

model.get().then(posts => {
    console.log('Rendering all list items!');
    console.log(posts);
})

refs.addItemBtn.addEventListener('click', () => {
    model
    .add({
        title: 'title',
        body: 'body',
        createdAt: new Date().toLocaleTimeString()
    })
    .then(addedItem => {
        console.log(addedItem);
    })
    .catch(error => {
        console.log(error);
    });
});


// model.delete(1).then(id => {
//     console.log(`removing list item with ${id}`)
// }).catch(error => {
//     console.log(error);
// })

model.update(6, {title: 'SUPER TITLE!!!!!'}).then(updatedItem => {
    console.log(`Ready to update item with id: ${updatedItem.id}`)
    console.log(updatedItem);
})

