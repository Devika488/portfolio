// Variables
const myform = document.querySelector('#myForm');
var fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
let gender = document.getElementsByName("Gender").value;
let email = document.querySelector("#email").value;
let phone = document.querySelector("#ph").value; //append formdata
let topics = document.querySelector("#topics").value;
let msg = document.querySelector("#Message").value;
let urllink = document.querySelector("#urllink").value;
let cururl = document.querySelector("#url").value; //append formdata
// let drive=document.querySelector('#durl').value;//append formdata
const scriptURL =
    "https://script.google.com/macros/s/AKfycbwJp2SWqRut3rybooJdQtYEFUWrbpZlvtDSOGc5htBYJ-Cmj4_vd3AhhC_euPTXR_Au/exec";

let driveurl;
let driveres;

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

var accessToken;
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
    accessToken = responseText.access_token;
    // console.log(accessToken);
  }
};

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
async function uploadFile() {
  var fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
        let name = fname + "_" + lname; 
        const filecont = document.getElementById("formFile"); //file input
        var fileContent = filecont.files[0]; // get upload  file.
        var file = new Blob([fileContent], {
          type: "application/pdf, application/vnd.ms-excel",
        });
        var metadata = {
          name: name, // Filename at Google Drive
          mimeType: "application/pdf, application/vnd.ms-excel", // mimeType at Google Drive
          parents: ["1xm_bK6ytg0Tw5ErHlYQV7cFH3K5zgjJz"], // Folder ID at Google Drive
        };
        
        var form = new FormData();
        form.append(
          "metadata",
          new Blob([JSON.stringify(metadata)], { type: "application/json" })
        );
        form.append("file", file);

        // console.log(form.get('file'))
    return fetch(
            "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=webViewLink",
            {
              method: "POST",
              headers: new Headers({ Authorization: "Bearer " + accessToken }),
              body: form,
            }
          ).then((response) => response.json()).then((val)=>
          // document.getElementById("durl").value = val)
          val)
          .catch((err)=>{console.log(err)});
  
    }

//Form Submission
myform.addEventListener("submit", async(e) => {
  // console.log(driveurl);
  e.preventDefault();
  if(document.querySelector('#formFile').value.length>0){
    let upload= await uploadFile();
    console.log("upload: "+upload);
    document.getElementById("durl").value = `${JSON.stringify(upload)}`.slice(16,-2);  
  }
  if (checkEmail() && insno()) {
    if (
      (checkMessage() ||
        document.querySelector("#Message").value.trim().length == 0) &&
      (checkUrl() ||
        document.querySelector("#urllink").value.trim().length == 0)
    ) {
      // alert(document.querySelector('#Message').value);
      document.querySelector("#resultmsg").style.visibility = "hidden";
      document.querySelector("#danger").style.visibility = "hidden";
      document.querySelector("#resulturl").style.visibility = "hidden";
      
      console.log("durl: "+document.getElementById("durl").value)
     
      e.preventDefault();
      console.log("data submit fetch start");
      let formdata=new FormData(myform);
      // formdata.append("Drivelink", `${JSON.stringify(upload)}`);
      for (let value of formdata.entries()) {
        console.log(value);
      }
      fetch(scriptURL, { method: "POST", body: formdata })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));

      
      document.querySelector("#success").style.visibility = "visible";
      document.getElementById("myForm").reset();
      document.getElementById("durl").value="";
    } else {
      if (
        checkUrl() ||
        document.querySelector("#urllink").value.trim().length == 0
      ) {
        e.preventDefault();

        document.querySelector("#danger").style.visibility = "visible";
        // alert("Please provide a valid email address !");
        document.querySelector("#errmsg").innerText =
          "Please provide a valid Message !";
      } else if (
        checkMessage() ||
        document.querySelector("#Message").value.trim().length == 0
      ) {
        e.preventDefault();
        document.querySelector("#danger").style.visibility = "visible";
        // alert("Please provide a valid email address !");
        document.querySelector("#errmsg").innerText =
          "Please provide a valid url !";
      } else {
        e.preventDefault();
        document.querySelector("#danger").style.visibility = "visible";
        // alert("Please provide a valid email address !");
        document.querySelector("#errmsg").innerText =
          "Please provide a valid url and Message !";
      }
    }
  } else {
    if (insno()) {
      e.preventDefault();
      document.querySelector("#danger").style.visibility = "visible";
      // if (document.querySelector("#Message").value.trim().length > 0) {
      if (
        (checkMessage() ||
          document.querySelector("#Message").value.trim().length == 0) &&
        (checkUrl() ||
          document.querySelector("#urllink").value.trim().length == 0)
      ) {
        // alert("Please provide a valid email address !");
        e.preventDefault();
        document.querySelector("#resulturl").style.visibility = "hidden";
        document.querySelector("#resultmsg").style.visibility = "hidden";
        document.querySelector("#errmsg").innerText =
          "Please provide a valid email address !";
      } else {
        // alert("Please provide a valid email address msg !");

        if (
          checkUrl() ||
          document.querySelector("#urllink").value.trim().length == 0
        ) {
          e.preventDefault();

          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid email address and Message !";
        } else if (
          checkMessage() ||
          document.querySelector("#Message").value.trim().length == 0
        ) {
          e.preventDefault();
          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid email address and url !";
        } else {
          e.preventDefault();
          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid email address , Message and url !";
        }
      }
      // }
    } else if (checkEmail()) {
      e.preventDefault();
      if (
        (checkMessage() ||
          document.querySelector("#Message").value.trim().length == 0) &&
        (checkUrl() ||
          document.querySelector("#urllink").value.trim().length == 0)
      ) {
        // alert("Please provide a valid email address !");
        e.preventDefault();
        document.querySelector("#resulturl").style.visibility = "hidden";
        document.querySelector("#errmsg").innerText =
          "Please provide a valid phone number !";
        document.querySelector("#resultmsg").style.visibility = "hidden";
      } else {
        // alert("Please provide a valid email address msg !");

        if (
          checkUrl() ||
          document.querySelector("#urllink").value.trim().length == 0
        ) {
          e.preventDefault();

          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid phone number and Message !";
        } else if (
          checkMessage() ||
          document.querySelector("#Message").value.trim().length == 0
        ) {
          e.preventDefault();
          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid phone number and url !";
        } else {
          e.preventDefault();
          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid phone number, Message and url !";
        }
      }
    } else {
      e.preventDefault();
      document.querySelector("#danger").style.visibility = "visible";
      if (
        (checkMessage() ||
          document.querySelector("#Message").value.trim().length == 0) &&
        (checkUrl() ||
          document.querySelector("#urllink").value.trim().length == 0)
      ) {
        e.preventDefault();
        // alert("Please provide a valid email address and  !");
        document.querySelector("#resultmsg").style.visibility = "hidden";
        document.querySelector("#resulturl").style.visibility = "hidden";
        document.querySelector("#errmsg").innerText =
          "Please provide a valid phone number and email address !";
      } else {
        // alert("Please provide a valid email address !");
        if (
          checkUrl() ||
          document.querySelector("#urllink").value.trim().length == 0
        ) {
          e.preventDefault();

          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid email address, Message and phone number !";
        } else if (
          checkMessage() ||
          document.querySelector("#Message").value.trim().length == 0
        ) {
          e.preventDefault();
          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid email address, url and phone number !";
        } else {
          e.preventDefault();
          document.querySelector("#danger").style.visibility = "visible";
          // alert("Please provide a valid email address !");
          document.querySelector("#errmsg").innerText =
            "Please provide a valid email address address, Message, url and phone number !";
        }
      }
    }
  }
});

//onchange check file type and username

// File Upload Only

function filetype() {
  var fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  var fileInput = document.getElementById("formFile");
  console.log(fname);
  // console.log(fileInput.files[0].type);
  if (fileInput.value.length != 0) {
    if (
      fname.length != 0 &&
      fname.match(/^[^-\s][a-zA-Z ]{2,}$/) &&
      lname.length != 0 &&
      lname.match(/^[^-\s.][a-zA-z .]{0,}$/)
    ) {
      document.querySelector("#resultname").innerText = "";
      var ftype = fileInput.files[0].type;
      // file type checking
      // var allowedExtensions =new RegExp("application/pdf","application/xls*");
      if (ftype != "application/pdf" && ftype != "application/vnd.ms-excel") {
        document.getElementById("resultftype").innerText =
          "Invalid file extention please select another file";
        fileInput.value = "";
        return false;
      } else {
        // fileInput.value=""; //file input
        // uploadFile();
        document.getElementById("resultftype").innerText = "";
        return true;
      }
    } else {
      fileInput.value = ""; //file input

      console.log("filename err");
      document.getElementById("resultname").innerText =
        "Please enter a valid first name and last name";
      return false;
    }
  } else {
    console.log("no file "); //48,-20

    return true;
  }
}

//submitdata

//  async function submitdata(){
//           uploadFile();
//    try{ e.preventDefault();
//    const response=await fetch(scriptURL, { method: "POST", body: new FormData(form) })
//    console.log("Success!", response);
//   //  const res=response.json();
//   }
//       // .then((response) => console.log("Success!", response))
//       catch(error){console.error("Error!", error.message));}
//       // .catch((error) => console.error("Error!", error.message));
//       document.querySelector("#success").style.visibility = "visible";
//     document.getElementById("myForm").reset();

//
