function writeUserData(userId, firstName, lastName) {
    firebase.database().ref('users/' + userId).set({
      firstName: firstName,
      lastName: lastName,
    });
  }

  function writeCommentData (commentId, title, author, content) {
      firebase.database().ref('comments/' + commentId).set({
          title: title,
          author: userId,
          content: content,
      });
  }