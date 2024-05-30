class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this.maxStudentsSize;
  }
}

export default ClassRoom;
