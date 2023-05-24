import React, { useEffect } from 'react';

function FormAutoFiller() {
  useEffect(() => {
    // Function to fill the form fields with valid information
    function fillForm() {
      const formFields = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: '25',
        phoneNumber: '1234567890'
      };

      // Loop through the form fields and fill them with valid information
      Object.keys(formFields).forEach((fieldName) => {
        const fieldElement = document.querySelector(`input[name="${fieldName}"]`);
        if (fieldElement) {
          fieldElement.value = formFields[fieldName];
        }
      });
    }

    // Call the fillForm function when the component mounts
    fillForm();
  }, []);

  return (
    <div>
      {/* Your form component JSX */}
    </div>
  );
}

export default FormAutoFiller;
