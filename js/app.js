const $btn = $('.add');
const $ul = $('#list');

$btn.on('click', () => {
    $ul.append('<li> <input type="text" placeholder="Enter new skill...">');
    $ul.on('click', (e) => {
        const deleteItem = $(e.target).children();
        deleteItem.remove();
    })
});

