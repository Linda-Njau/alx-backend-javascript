export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('students must be an array');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw TypeError('students must be an array of strings');
    }
    this._name = name;  //eslint-disable-line 
    this._length = length; //eslint-disable-line 
    this._students = students; //eslint-disable-line 
  }

  get name() {
    return this._name; //eslint-disable-line 
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value; //eslint-disable-line 
  }

  get length() {
    return this._length; //eslint-disable-line 
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value; //eslint-disable-line 
  }

  get students() {
    return this._students; //eslint-disable-line 
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw TypeError('Students must be an array');
    }
    if (!value.every((students) => typeof value !== 'string')) { //eslint-disable-line 
      throw TypeError('students must be an array of strings');
    }
    this._students = value; //eslint-disable-line 
  }
}
