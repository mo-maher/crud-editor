document.body.id="app";

var post_title = document.getElementById('post-title');
var post_body = document.getElementById('post-body')


// listen event listener there on click get snapshot of that record
 window.onload = () => {
    firebase
      .database()
      .ref("post/" + index_no.value)
      .on("value", (snapshot) => {
        document.getElementById('post-title').innerHTML = snapshot.val().postTitle;
        document.getElementById('post-body').innerHTML = snapshot.val().postSubject;
      });
    };