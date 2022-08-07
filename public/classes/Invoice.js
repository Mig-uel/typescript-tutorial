/* ------ Classes ------ */
class Invoice {
    // Access Modifiers
    // readonly: can only be assigned once in the constructor (like a const) and cannot be reassigned later
    // private: can only be accessed inside class
    // public: can be accessed outside class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
export default Invoice;
