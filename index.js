// Init

document.addEventListener('DOMContentLoaded', init)

function init () {
    document.getElementById('submit-comment').addEventListener('click', readComment)

    database.ref('comments/').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
            console.log(item.val())
            document.getElementById('comments').innerHTML += `
            <div class="card" style="width: calc(100% - 20px); margin: 10px;">
                <div class="card-body">
                    <h5 class="card-title">${item.val().author}</h5>
                    <p class="card-text">${item.val().content}</p>
                </div>
            </div>
            `
        })
    })
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAA6vZBgbd8SKS-qxzMZNByazd2UjyxJj4",
    authDomain: "comments-section-2cc98.firebaseapp.com",
    databaseURL: "https://comments-section-2cc98.firebaseio.com",
    projectId: "comments-section-2cc98",
    storageBucket: "comments-section-2cc98.appspot.com",
    messagingSenderId: "746729496360"
  };
  firebase.initializeApp(config);

  var database = firebase.database()


// Intake User Comment and Write to Database
function readComment () {
    var userComment = document.getElementById('commentText').value
    console.log(userComment)
    writeComment(userComment)
}

function writeComment (comment) {
    console.log(comment)
    var commentData = {
        title: 'new comment',
        author: 'anonymous',
        content: comment
    }

    var newCommentKey = database.ref().child('comments').push().key

    var updates = {};
    updates['/comments/' + newCommentKey] = commentData
    database.ref().update(updates)
}

// Write Comments from Database to the HTML Page



// function writeUserData(userId, firstName, lastName) {
//     database.ref('users/' + userId).set({
//       firstName: firstName,
//       lastName: lastName,
//     });
//   }

//   function writeCommentData (commentId, title, author, content) {
//       database.ref('comments/' + commentId).set({
//           title: title,
//           author: userId,
//           content: content,
//       });
//   }

//   function renderCommentList () {
//       var comment = firebase.auth().currentComment.commentId
//       return database.ref('/comments/' + comment).once('value').then(function(snapshot){
//           var 
//       })
//   }
//   var commentRef = database.ref('comments/' + commentID)