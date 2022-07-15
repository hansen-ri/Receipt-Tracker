import RenderReceiptLink from './RenderReceiptLink';
import RenderFilteredLink from './RenderFilteredLink';

window.addEventListener('load', (event) => {
    try {
    console.log('The page has fully loaded')
    const userId = '62cc87b4038a250011e20fab';
    const renderReceiptLink = new RenderReceiptLink(userId);
    renderReceiptLink.init();
    renderReceiptLink.createReceiptLinks;
    } catch (error) {
        console.log(error);
    }
});


const filterForm = document.getElementById("filter-form");
filterForm.addEventListener('submit', (event) => {
    
    try {
    event.preventDefault();
    const userId = '62cc87b4038a250011e20fab';
    const renderFilteredLink = new RenderFilteredLink(userId);
    renderFilteredLink.init();
    renderFilteredLink.createFilteredLinks;
    } catch (error) {
        console.log(error);
    }
});