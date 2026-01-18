export class Food {
    constructor(name, category, expirationDate) {
        this.id = Date.now(); 
        this.name = name;
        this.category = category;
        this.expirationDate = expirationDate;
        this.entryDate = new Date().toISOString(); 
    }
}
