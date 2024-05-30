class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse.checkName(name);
    HolbertonCourse.checkLength(length);
    HolbertonCourse.checkStudents(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static checkName(name) {
    if (typeof name != 'string') throw new TypeError('Name must be a string');
  }

  static checkLength(len) {
    if (typeof len != 'number') throw new TypeError('Length must be a number');
  }

  static checkStudents(students) {
    if (!Array.isArray(students))
      throw new TypeError('Students must be an Array');
  }

  set name(value) {
    HolbertonCourse.checkName(value);
    this._name = value;
  }

  set length(value) {
    HolbertonCourse.checkLength(value);
    this._length = value;
  }

  set students(value) {
    HolbertonCourse.checkStudents(value);
    this._students = value;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  toString() {
    return `
    HolbertonCourse {
        _name: '${this.name}',
        _length: ${this.length},
        _students: ${JSON.stringify(this.students)}
    }`;
  }
}

export default HolbertonCourse;
