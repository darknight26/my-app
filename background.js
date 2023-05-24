// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fillForm') {
      // Extract the form data from the message
      const formData = message.formData;
  
      // Perform any necessary processing or validation on the form data
  
      // Send a message to the active tab's content script to fill the form
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fillForm', formData }, (response) => {
          // Handle the response from the content script if needed
          console.log(response.message);
        });
      });
    }
  });
  