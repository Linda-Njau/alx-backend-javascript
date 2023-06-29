import ClassRoom from './0-classroom.js';  // eslint-disable-line

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
