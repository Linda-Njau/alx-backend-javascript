export default class Building {
  constructor(sqft) {
    this._sqft = sqft; //eslint-disable-line
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft; //eslint-disable-line
  }
}
