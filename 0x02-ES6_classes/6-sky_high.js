import Building from './5-building.js'; // eslint-disable-line

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._sqft = sqft; // eslint-disable-line
    this._floors = floors; // eslint-disable-line
  }

  get floors() {
    return this._floors; // eslint-disable-line
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // eslint-disable-line
  }
}
