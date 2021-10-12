function uploadFile() {
    if(document.getElementById("formFile").value.length != 0){
        var fname = document.querySelector("#fname").value;
        let lname = document.querySelector("#lname").value;
        let name = fname + "_" + lname; // name of file
        const filecont = document.getElementById("formFile"); //file input
        console.log("uploadfile");
        var fileContent = filecont.files[0]; // get upload  file.
        var file = new Blob([fileContent], {
          type: "application/pdf, application/vnd.ms-excel",
        });
        var metadata = {
          name: name, // Filename at Google Drive
          mimeType: "application/pdf, application/vnd.ms-excel", // mimeType at Google Drive
          parents: ["1xm_bK6ytg0Tw5ErHlYQV7cFH3K5zgjJz"], // Folder ID at Google Drive
        };
    
        // let REFRESH_TOKEN="1//04xxDg0xIKoD4CgYIARAAGAQSNwF-L9IrLXNvNLkCQ_BJGGWjgk5-1QcqIVpHGmqNMkj4unZ4cc6JNZ9QpIrNtWecGYK5LJVb2P0";
    
        var form = new FormData();
        form.append(
          "metadata",
          new Blob([JSON.stringify(metadata)], { type: "application/json" })
        );
        form.append("file", file);
        return fetch(
          "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=webViewLink",
          {
            method: "POST",
            headers: new Headers({ Authorization: "Bearer " + accessToken }),
            body: form,
          }
        )
          .then((response) => response.json())
          .then(function (val) {
            document.getElementById("durl").value = `${JSON.stringify(
              val
            )}`.slice(16, -2);
          });
      } else if (document.getElementById("formFile").value.length == 0) {
        return true;
      } else {
        return false;
      }
    }
    
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
  //check input file type val hidden