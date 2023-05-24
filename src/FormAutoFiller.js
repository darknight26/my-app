import React, { useEffect } from 'react';

// Rest of your code using the chrome object


function FormAutoFiller() {
  useEffect(() => {
    // Function to fill the form fields with the provided data
    function fillForm(formData) {
      const formFields = {
        name: formData.name,
        email: formData.email,
        age: formData.age,
        phoneNumber: formData.phoneNumber
      };

      // Loop through the form fields and fill them with the corresponding data
      Object.keys(formFields).forEach((fieldName) => {
        const fieldElement = document.querySelector(`.${fieldName}`);
        if (fieldElement) {
          fieldElement.value = formFields[fieldName];
        }
      });
    }

    // Listen for messages from the background script
    
  }, []);

  return (
    <div>
      {/* Your form component JSX */}
    </div>
  );
}

export default FormAutoFiller;
