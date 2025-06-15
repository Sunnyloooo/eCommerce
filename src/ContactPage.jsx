import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-light text-center">Contact Us</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-sm">
        <p className="text-gray-700 mb-6 text-base text-center leading-relaxed">
          If you have any questions or suggestions, please contact us through the following methods:
        </p>
        <div className="mt-4 text-center">
          <p className="text-gray-700 mb-3 text-base leading-relaxed"><span className="font-semibold">Email:</span> support@example.com</p>
          <p className="text-gray-700 mb-3 text-base leading-relaxed"><span className="font-semibold">Phone:</span> (123) 456-7890</p>
          <p className="text-gray-700 text-base leading-relaxed"><span className="font-semibold">Address:</span> 123 Minimalist Ave, Minimalist City, Minimalist State 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;