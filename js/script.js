// mail validation

function checkEmail() {
  var email = document.getElementById("email");
  var filter =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // let filter=/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  if (!filter.test(email.value)) {
    // alert('Please provide a valid email address');
    document.querySelector("#result").innerText =
      "Please provide a valid email address !";
    // document.querySelector('#email').style.border=".1rem purple solid";

    email.focus;
    return false;
  } else {
    document.querySelector("#result").innerText = " ";
    return true;
  }
}

// function textarea
function checkMessage() {
  // alert(document.querySelector('#Message').value.trim().length);
  let msg = document.querySelector("#Message").value.trim();
  if (msg.match(/^.*[a-zA-Z].*$/) || msg.length == 0) {
    document.querySelector("#resultmsg").style.visibility = "hidden";

    return true;
  } else {
    // document.querySelector('#resultmsg').innerText="Please provide a valid Message !";

    document.querySelector("#resultmsg").style.visibility = "visible";
    // document.querySelector('#Message').style.border=".1rem purple solid";
    msg.focus;
    return false;
  }
  // document.querySelector('#resultmsg').innerText=" ";
}
//
// function savefile(){
//     alert(document.getElementById('formFile').value);
// }

//   url validation
function checkUrl() {
  let url = document.querySelector("#urllink").value;
  // /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  if (
    url.match(
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    ) ||
    url.length == 0
  ) {
    document.querySelector("#resulturl").style.visibility = "hidden";
    return true;
  } else {
    // document.querySelector('#urllink').placeholder = "Completed Project url ,if any";
    // document.querySelector('#urllink').value=" ";
    url.focus;
    document.querySelector("#resulturl").style.visibility = "visible";
    return false;
  }
}

// any code for gapi here
// generate access token using refresh and refresh the refresh token here


var  accessToken;
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://oauth2.googleapis.com/token");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      // console.log(xhr.status);
      // console.log(xhr.responseText);
      var responseText = JSON.parse(xhr.responseText);
      // console.log(responseText.access_token);
      accessToken=responseText.access_token
      // console.log(accessToken);
   }};

var data = `{
  "client_id":'971475868194-q3gmjhvegvccfdb46sdpj256jpkon09v.apps.googleusercontent.com',
"client_secret": '9Db6ePURc5kI2-65sm-6caE7' ,
"refresh_token": "1//04xxDg0xIKoD4CgYIARAAGAQSNwF-L9IrLXNvNLkCQ_BJGGWjgk5-1QcqIVpHGmqNMkj4unZ4cc6JNZ9QpIrNtWecGYK5LJVb2P0",
"grant_type": "refresh_token",

  }`;

xhr.send(data);
// //////////////"access_type":"offline"

// api details of this project-------------
// var token;
// var API_KEY='AIzaSyCouEv3uSzLM4gNVz9Ca_btJRpvWa5P0K0';
// var CLIENT_ID='971475868194-q3gmjhvegvccfdb46sdpj256jpkon09v.apps.googleusercontent.com';
// var SCOPES='https://www.googleapis.com/auth/drive';



// uploadFile

function uploadFile() {
  var fname=document.querySelector('#fname').value;
  let lname=document.querySelector('#lname').value;
  let name=fname+"_"+lname;// name of file
  const filecont = document.getElementById("formFile"); //file input

//need to add if stmt if((fname.length!=0 && fname.match(regrex))  && (lname.length!=0 && lname.match(regrex)))
// let regrex2="/^[^-\s.][a-zA-z .]+$/";
// let regrex="/^[^-\s][a-zA-Z ]{2,}$/";
console.log("uploadfile");
if((fname.length!=0 && fname.match(/^[^-\s][a-zA-Z ]{2,}$/))  && (lname.length!=0 && lname.match(/^[^-\s.][a-zA-z .]+$/))){
  
  document.querySelector("#resultname").innerText="";

var fileContent = filecont.files[0]; // get upload  file.
var file = new Blob([fileContent], {type: 'application/pdf, application/vnd.ms-excel'});
var metadata = {
    'name': name, // Filename at Google Drive
    'mimeType': 'application/pdf, application/vnd.ms-excel', // mimeType at Google Drive
    'parents': ['1xm_bK6ytg0Tw5ErHlYQV7cFH3K5zgjJz'], // Folder ID at Google Drive
};

// let REFRESH_TOKEN="1//04xxDg0xIKoD4CgYIARAAGAQSNwF-L9IrLXNvNLkCQ_BJGGWjgk5-1QcqIVpHGmqNMkj4unZ4cc6JNZ9QpIrNtWecGYK5LJVb2P0";

var form = new FormData();
form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
form.append('file', file);
fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=webViewLink', {
    method: 'POST',
    headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
    body: form,
}).then((res) => {
    return res.json();
  
}).then(function(val) {
  //the variable to pass into the hidden input text type name driveurl
  var driveurl=(`${JSON.stringify(val)}`).slice(16,-2);
  // alert(driveurl);

  document.getElementById("driveurl").defaultValue=driveurl;

  console.log(val);
});
}else{
  document.getElementById("formFile").value=""; //file input

  console.log("filename err");
  document.getElementById("resultname").innerText="Please enter a valid first name and last name";
}
}
