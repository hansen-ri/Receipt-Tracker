// initialize class for rendering receipt links from fetched json data
export default class RenderReceiptLink {
  constructor(userId) {
    this.userId = userId;
  }
  async init() {
    // fetch data from Heroku API
    const response = await fetch(
      `https://virtual-receipt2.herokuapp.com/receipt/${this.userId}`
    );
    const data = await response.json();
    console.log(data);
    // Clear local storage
    localStorage.clear();
    // Store data in local storage
    localStorage.setItem("data", JSON.stringify(data));
    // create receipt links
    //
    this.createReceiptLinks(data);
  }
  // create receipt links
  createReceiptLinks(data) {
    // create a function that converts ISO date to readable date
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
      const receiptLinksContainer = document.querySelector(".gallery");
      // create a html template for each receipt
      const li = `<li><div class="receipt-preview"><p class="receipt-retailer">${
        receipt.store
      }</p><p class="receipt-type">${
        receipt.purchase_type
      }</p><p class="receipt-total">${
        receipt.total
      }</p><p class="receipt-date">${
        convertDate(receipt.date)
      }</p><div></li>`;
      // append the template to the container
      receiptLinksContainer.insertAdjacentHTML("afterbegin", li);
    });
    
  }
  
}
