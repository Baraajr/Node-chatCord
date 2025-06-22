const users = [];

//user join to chat
exports.userJoin = function (id, username, room) {
  const user = { id, username, room };

  users.push(user);
  return user;
};

exports.getCurrentUser = function (id) {
  return users.find((user) => (user.id = id));
};

// user leaves the chat
exports.userLeave = function (id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    const result = users.splice(index, 1)[0];
    console.log(result);
    return result;
  }
};

// get room users
exports.getRoomUsers = (room) => users.filter((user) => (user.room = room));
