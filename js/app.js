import { Food } from './models/Food.js';
import { UI } from './view/UI.js';
import { bubbleSort, linearSearch } from './utils/Algorithms.js';
import { Store } from './utils/Store.js';

let foodQueue = Store.getFoods();

document.addEventListener('DOMContentLoaded', () => {
    UI.displayFoods(foodQueue);
});

document.querySelector('#food-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const category = document.querySelector('#category').value;
    const expiration = document.querySelector('#expiration').value;

    if (name === '' || category === '' || expiration === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        const food = new Food(name, category, expiration);

        foodQueue.push(food);
        
        Store.saveFoods(foodQueue);

        UI.displayFoods(foodQueue); 

        UI.showAlert('Food Added', 'success');
        UI.clearFields();
    }
});

document.querySelector('#food-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const id = Number(e.target.getAttribute('data-id'));

        if(confirm('Are you sure you want to consume this item?')) {
            foodQueue = foodQueue.filter(food => food.id !== id);
            
            Store.saveFoods(foodQueue);

            UI.displayFoods(foodQueue);
            
            UI.showAlert('Food Item Consumed!', 'success');
        }
    }
});

document.querySelector('#sort-btn').addEventListener('click', () => {
    if (foodQueue.length > 0) {
        const sortedList = bubbleSort(foodQueue);
        UI.displayFoods(sortedList);
        UI.showAlert('Sorted by Expiration Date', 'info');
    }
});

document.querySelector('#search').addEventListener('input', (e) => {
    const text = e.target.value;
    if (text !== '') {
        const filteredList = linearSearch(foodQueue, text);
        UI.displayFoods(filteredList);
    } else {
        UI.displayFoods(foodQueue);
    }
});
