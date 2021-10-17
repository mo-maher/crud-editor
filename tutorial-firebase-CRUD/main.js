// define values as variables

let serial_value, name_value, age_value, job_value;

function ready() {
  serial_value = document.getElementById("serial-input").value;
  name_value = document.getElementById("name-input").value;
  age_value = document.getElementById("age-input").value;
  job_value = document.getElementById("job-input").value;
}

var create_el = document.getElementById("create");
var read_el = document.getElementById("read");
var update_el = document.getElementById("update");
var delete_el = document.getElementById("delete");

// add eventlisteners to buttons

create_el.addEventListener("click", () => {
  ready();
  firebase
    .database()
    .ref("person/" + serial_value)
    .set({
      PersonSerial: serial_value,
      personName: name_value,
      personAge: age_value,
      personJob: job_value,
    });
});

read_el.addEventListener("click", () => {
  ready();
  firebase
    .database()
    .ref("person/" + serial_value)
    .on("value", (snapshot) => {
      document.getElementById("name-input").value = snapshot.val().personName;
      document.getElementById("age-input").value = snapshot.val().personAge;
      document.getElementById("job-input").value = snapshot.val().personJob;
    });
});

update_el.addEventListener("click", () => {
  ready();
  firebase
    .database()
    .ref("person/" + serial_value)
    .update({
      personName: name_value,
      personAge: age_value,
      personJob: job_value,
    });
});

delete_el.addEventListener("click", () => {
  ready();
  firebase
    .database()
    .ref("person/" + serial_value)
    .remove();
});