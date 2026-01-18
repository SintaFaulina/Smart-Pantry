export class Store {
    static getFoods() {
        let foods;
        if(localStorage.getItem('foods') === null) {
            foods = [];
        } else {
            foods = JSON.parse(localStorage.getItem('foods'));
        }
        return foods;
    }

    static saveFoods(foods) {
        localStorage.setItem('foods', JSON.stringify(foods));
    }
}
