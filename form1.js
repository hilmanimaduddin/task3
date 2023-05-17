// validasi

function validateForm() {
  if (document.forms["myForm"]["input-name"].value == "") {
    alert("Maaf nama harus diisi");
    return false;
  }

  if (document.forms["myForm"]["input-email"].value == "") {
    alert("Maaf email harus diisi");
    return false;
  }

  if (document.forms["myForm"]["input-phone"].value == "") {
    alert("Maaf nomor harus diisi");
    return false;
  }

  if (document.forms["myForm"]["input-subject"].value == "") {
    alert("Maaf subject harus diisi");
    return false;
  }

  if (document.forms["myForm"]["input-message"].value == "") {
    alert("Maaf komentar harus diisi");
    return false;
  }
}

// submit ke console

function submitData() {
  let name1 = document.getElementById("input-name").value;
  let email1 = document.getElementById("input-email").value;
  let phone1 = document.getElementById("input-phone").value;
  let subject1 = document.getElementById("input-subject").value;
  let message1 = document.getElementById("input-message").value;

  let emailReceiver = "hilmanimaduddin179@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject1}&body=halo, nama saya ${name1}, ${message1}, Silahkan hubungi saya di nomer ${phone1}, terima aksih.`;
  a.click();

  console.log(name1);
  console.log(email1);
  console.log(phone1);
  console.log(subject1);
  console.log(message1);
}
