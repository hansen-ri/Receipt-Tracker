import RenderReceiptLink from './RenderReceiptLink';

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
