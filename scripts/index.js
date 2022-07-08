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
 };

 async function loadHeaderFooter() {
   const footer = await loadTemplate('../partials/footer.html');
   console.log("This is whatever is supposed to be in footer variable:" + footer);
   const footerTemplate = document.getElementById('footer');
   renderWithTemplate(footer, footerTemplate);
 }

 loadHeaderFooter();