// Get the title element and set the text content
var titleElement = document.querySelector('title');
titleElement.textContent = 'Cornflower';

// Create an icon element and set the source
var iconElement = document.createElement('link');
iconElement.setAttribute('rel', 'icon');
iconElement.setAttribute('type', 'image/png');
iconElement.setAttribute('href', 'path/to/icon.png');

// Append the icon element to the head section of the document
var headElement = document.querySelector('head');
headElement.appendChild(iconElement);

// Create a link element for WhatsApp and set the attributes
var whatsappLinkElement = document.createElement('a');
//whatsappLinkElement.setAttribute('href', 'https://api.whatsapp.com/send?phone=79180346539');
whatsappLinkElement.setAttribute('target', '_blank');

// Set the text or image for the WhatsApp link
//whatsappLinkElement.textContent = 'WhatsApp';

// Append the WhatsApp link to the body section of the document
var bodyElement = document.querySelector('body');
bodyElement.appendChild(whatsappLinkElement);
