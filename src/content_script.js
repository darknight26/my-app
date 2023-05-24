


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'console.log(document.body);'});
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Check if the message is requesting to fill the form
    if (message.action === 'fillForm') {
      // Retrieve the form data from the message
      const formData = message.formData;

      // Call the fillForm function with the form data
      fillForm(formData);

      // Send a response back to the background script
      sendResponse({ message: 'Form filled successfully!' });
    }
  });