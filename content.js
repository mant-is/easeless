// content.js

// Function to check for the <div> element with id "credential_picker_container" and remove it
function checkAndRemoveCredentialPickerContainer() {
  // Select the <div> element with the id "credential_picker_container"
  const credentialPickerContainer = document.getElementById('credential_picker_container');

  if (credentialPickerContainer) {
    // Remove the <div> element and its children
    credentialPickerContainer.remove();
    console.log('Element <div id="credential_picker_container"> and its children have been removed.');
  }
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Run the check function when new nodes are added to the DOM
      checkAndRemoveCredentialPickerContainer();
    }
  }
});

// Start observing the entire document body for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true // Observe all changes within the subtree of the body
});

console.log('MutationObserver is running, watching for <div id="credential_picker_container">.');

