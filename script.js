const form = document.querySelector('form');
const input = document.getElementById('list_input');
const sListUL = document.getElementById('shopping_list');

let allItems =[];

form.addEventListener('submit' , function(e){
    e.preventDefault();
    addItem();
}); 

function addItem(){
    const itemText = input.value.trim();
    if(itemText.length > 0 ){
        allItems.push(itemText);
        updateList();
        input.value = "";
    }
}
function updateList(){
    sListUL.innerHTML = "";
    allItems.forEach((item, itemIdx) => {
        listItem = createShoppingListItem(item, itemIdx)
        sListUL.append(listItem);
    });
}
function createShoppingListItem(item, itemIdx){
    const itemId = "item-" + itemIdx;   
    const itemLI = document.createElement("li");
    itemLI.className = "item";
    itemLI.innerHTML = `
        <li class="item">
            <input type="checkbox" id="${itemId}">
            <label class="custom-checkbox" for="${itemId}">
                <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </label>
            <label for="${itemId}" class="item-text">
                ${item}
            </label>
            <button class="delete-button">
                <svg fill= "var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </button>

        </li>
    `


    return itemLI;
}