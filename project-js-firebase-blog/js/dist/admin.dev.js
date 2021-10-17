"use strict";

var title_field = document.getElementById("title-field");
var subject_field = document.getElementById("subject-field");
var submit_btn = document.getElementById("submit-btn");
var read_btn = document.getElementById("read-btn");
var update_btn = document.getElementById("update-btn");
var delete_btn = document.getElementById("delete-btn");
var index_no = document.getElementById("index-no");
submit_btn.addEventListener("click", function () {
  firebase.database().ref("post/" + index_no.value).set({
    indexNo: index_no.value,
    postTitle: title_field.value,
    postSubject: subject_field.value
  });
});
update_btn.addEventListener("click", function () {
  firebase.database().ref("post/" + index_no.value).update({
    postTitle: title_field.value,
    postSubject: subject_field.value
  });
}); // listen event listener there on click get snapshot of that record

read_btn.addEventListener("click", function () {
  firebase.database().ref("post/" + index_no.value).on("value", function (snapshot) {
    index_no.value = snapshot.val().indexNo;
    title_field.value = snapshot.val().postTitle;
    subject_field.value = snapshot.val().postSubject;
  });
}); // listen event we have a value and we need to delete it firebase().database().ref(a + b).remove()

delete_btn.addEventListener("click", function () {
  firebase.database().ref("post/" + index_no.value).remove();
});