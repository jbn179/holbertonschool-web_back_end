export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    // Vérifier que la classe dérivée implémente evacuationWarningMessage
    if (this.constructor !== Building
        && !this.constructor.prototype.hasOwnProperty('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
