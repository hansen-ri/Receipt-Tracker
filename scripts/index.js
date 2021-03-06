
function convertToText(res) {
   if (res.ok) {
     return res.text();
   } else {
     throw new Error('Bad response');
   }
 }

 async function loadTemplate(path) {
   const html = await fetch(path).then(convertToText);
   const template = document.createElement('template');
   template.innerHTML = html;
   return template;
 }

 function renderWithTemplate(template, parent, data, callback) {
   let clone = template.content.cloneNode(true);
   if (callback) {
     clone = callback(clone, data);
   } 
   parent.appendChild(clone);
   console.log('rendered header and footer');
 };


 async function loadHeaderFooter() {
  const footer = await loadTemplate('../partials/footer.html');
  const header = await loadTemplate('../partials/header.html');


  const footerTemplate = document.getElementById('footer');
  const headerTemplate = document.getElementById('header');

  renderWithTemplate(footer, footerTemplate);
  renderWithTemplate(header, headerTemplate);
  }

// function to show and insert current date
function showDate() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const dateString = `${month}/${day}/${year}`;
  const dateElement = document.getElementById('footer_date');
  dateElement.innerHTML = dateString;
}


loadHeaderFooter();
// showDate();