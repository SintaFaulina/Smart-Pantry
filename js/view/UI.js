export class UI {
    static displayFoods(foods) {
        const list = document.querySelector('#food-list');
        list.innerHTML = '';

        foods.forEach((food) => UI.addFoodToList(food));
    }

    static addFoodToList(food) {
        const list = document.querySelector('#food-list');
        const row = document.createElement('tr');

        const today = new Date();
        const expDate = new Date(food.expirationDate);
        const timeDiff = expDate - today;
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        
        let statusClass = daysDiff < 0 ? 'expired' : (daysDiff < 3 ? 'warning' : 'good');
        let statusText = daysDiff < 0 ? 'Expired' : `${daysDiff} Days Left`;

        row.innerHTML = `
            <td>${food.name}</td>
            <td>${food.category}</td>
            <td>${food.expirationDate}</td>
            <td><span class="badge ${statusClass}">${statusText}</span></td>
            <td><button class="btn btn-sm btn-danger delete-btn" data-id="${food.id}">Consume</button></td>
        `;

        list.appendChild(row);
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.container');
        const form = document.querySelector('#food-form');
        
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#category').value = '';
        document.querySelector('#expiration').value = '';
    }
}
