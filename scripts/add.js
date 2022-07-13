const baseURL = "virtual-receipts.herokuapp.com/"

function formDataToJson(form) {
    const formData = new FormData(form),
    convertedJson = {};
    formData.forEach(function (value, key) {
        convertedJson[key] = value;
    });
    return convertedJson;
}

async function convertToJson(res) {
    let jsonResponse = res.json();
    if (res.ok) {
      return jsonResponse;
    } else {
      throw { name: 'servicesError', message: jsonResponse };
    }
 }

// create function that converts image files to base 64
function imageConvert() {
      let file = document.querySelector('input[type=file]').files[0];
      let reader = new FileReader();
      let image = document.getElementById("image-preview");

      reader.addEventListener("load", function () {
        // convert image file to base64 string
        image.src = reader.result;
      }, false);
    
      if (file) {
        reader.readAsDataURL(file);
      }
}

// create function that awaits response of data sent adn send user to success page
async function submitReceipt(payload){

  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "receipt/", options).then(convertToJson)
}

// creat async function that calls formdatatojson and to send data on submit.  
async function addReceiptSuccess(){
    const formElement = document.forms['addReceipt'];
    const json = formDataToJson(formElement);
    const res = await submitReceipt(json);
    console.log(res);
}



// document.getElementById('addReceiptBtn').addEventListener('onclick', (e) => {
//     e.preventDefault();
//     var myForm = document.forms[0];
//     var chk_status = myForm.checkValidity();
//     myForm.reportValidity();
//     if(chk_status)
//       addReceiptSuccess();;
//   });


