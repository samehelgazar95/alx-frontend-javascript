import ClassRoom from './0-classroom';

function initializeRooms() {
  const classes = [];
  const values = [19, 20, 34];

  for (const val of values) {
    classes.push(new ClassRoom(val));
  }

  return classes;
}

export default initializeRooms;
