

// initialize class for rendering receipt links from fetched json data
export default class RenderFilteredLink {
   
   constructor(userId) {
     this.userId = userId;
   }
   async init() {
     // fetch data from Heroku API
     const url = this.getUserInput();
     const response = await fetch(url);
     const data = await response.json();
     // Clear local storage
     localStorage.clear();
     // Store data in local storage
     localStorage.setItem("data", JSON.stringify(data));
     // create receipt links
     //
     this.createFilteredLinks(data);
   }

   getUserInput() {
    var userId = "62cc87b4038a250011e20fab";
    var fieldInput = document.getElementById("field_id").value;
    var valueInput = document.getElementById("value_id").value;
    var url = ("https://virtual-receipts.herokuapp.com/receipt/find/" + `${userId}&${fieldInput}&${valueInput}`);
    return url;
  }

   // create receipt links
   createFilteredLinks(data) {
     // create a function that converts ISO date to readable date
    
     var count = 0;
     this.deleteGalleryElements();
     document.getElementById("gallery").style.display = "none";

     function convertDate(date) {
         const dateObj = new Date(date);
         const month = dateObj.getMonth() + 1;
         const day = dateObj.getDate();
         const year = dateObj.getFullYear();
         return `${month}/${day}/${year}`;
     };
     // Loop through the data and create a link for each receipt
     data.forEach((receipt) => {
       // select the container for the receipt links
       
       const filteredReceiptLinksContainer = document.querySelector(".filtered-gallery");
       // create a html template for each receipt
       const li = 
       `<li>  
            <div class="wrapper">  
              <div class="receipt-preview">
                <p class="receipt-retailer">${receipt.store}</p>
                <p class="receipt-type">${receipt.purchase_type}</p>
                <p class="receipt-total">${receipt.total}</p>
                <p class="receipt-date">${convertDate(receipt.date)}</p>
              </div>
              <div class="image">
                <img id="receipt-image" class=receipt-image-${count}" src="data:image/png;base64,${receipt.image}">
              </div>
            </div>
        </li>`;
       // append the template to the container
       filteredReceiptLinksContainer.insertAdjacentHTML("afterbegin", li);
       count++;
     });
   }

   
//<a href="" onclick="document.querySelector(``.receipt-image-${count}``).style.visibility='visible';return false;">
  // <img class="reciept-image" src="data:image/png;base64,${receipt.image}">
  //  data:image/png;base64,${receipt.image}

   deleteGalleryElements(){
    const list = document.querySelector(".filtered-gallery");

    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
   }

   
 }
