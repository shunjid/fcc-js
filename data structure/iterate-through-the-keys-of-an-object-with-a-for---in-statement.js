function countOnline(usersObj) {
  let onlineUsers = 0;
  for (const user in usersObj) {
    onlineUsers = usersObj[user].online ? ++onlineUsers : onlineUsers;
  }

  return onlineUsers;
}
