//findUserByUsername
function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user) {
      return user.username === username;
    });
  }

  //removeUser

  function removeUser(usersArray, username) {
    const foundIndex = usersArray.findIndex(function(user) {
      return user.username === username;
    });
  
    if (foundIndex === -1) {
      return; // If user not found, return undefined
    }
  
    // Splice removes the element at foundIndex and returns an array containing the removed element
    return usersArray.splice(foundIndex, 1)[0];
  }