import HasFormatter from '../interfaces/HasFormatter'

/* ------ Classes ------ */
class Invoice implements HasFormatter {
  // Access Modifiers
  // readonly: can only be assigned once in the constructor (like a const) and cannot be reassigned later
  // private: can only be accessed inside class
  // public: can be accessed outside class

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

export default Invoice
