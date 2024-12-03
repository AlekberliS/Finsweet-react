import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  // State to manage message status and progress bar
  const [isSending, setIsSending] = useState(false);
  const [progress, setProgress] = useState(100);
  const [messageStatus, setMessageStatus] = useState('');

  // Validation schema for the form
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().required('Please select a subject'),
    message: Yup.string().required('Message is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    setIsSending(true);
    setMessageStatus('Sending...'); // Initial status
    setProgress(100);

    // Simulate a 3-second delay before the message is sent
    let progressInterval = setInterval(() => {
      setProgress((prev) => prev - 1);
    }, 30); // 3-second progress decrease

    setTimeout(() => {
      clearInterval(progressInterval); // Stop progress update
      setProgress(100); // Reset progress bar
      setMessageStatus('Message Sent'); // Show "Message Sent" message

      // Hide the message after 1 second and reset form
      setTimeout(() => {
        setIsSending(false); // Hide the message status
        resetForm(); // Reset the form fields
      }, 1000);
    }, 3000);
  };

  return (
    <div className=" py-4 md:py-16 relative">
      <div className="contact__container mx-auto px-5 md:px-20 flex flex-col items-center max-w-7xl">
        
        {/* Heading Section */}
        <div className="text-center max-w-[600px] mb-8">
          <h1 className="font-semibold text-xl md:text-3xl lg:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-m text-grey-tx">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Form Section */}
        <Formik 
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full max-w-2xl p-12 bg-bg-home-sec shadow-md rounded-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm">Name</label>
                <Field 
                  name="name" 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full p-2 rounded border border-[#cecece] bg-transparent text-gray-700"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm">Email</label>
                <Field 
                  name="email" 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full p-2 rounded border border-[#cecece] bg-transparent text-gray-700"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-sm">Subject</label>
                <Field 
                  name="subject" 
                  type="text" 
                  placeholder="Provide context"
                  className="w-full p-2 rounded border border-[#cecece] bg-transparent text-gray-700"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-xs" />
              </div>

              {/* Subject (dropdown) */}
              <div>
                <label htmlFor="subject" className="block text-sm">Subject</label>
                <Field 
                  name="subject" 
                  as="select" 
                  className="w-full p-2 rounded border border-[#cecece] bg-transparent text-gray-700"
                >
                  <option value="">Select a subject</option>
                  <option value="feedback">Feedback</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="support">Support</option>
                </Field>
                <ErrorMessage name="subject" component="div" className="text-red-500 text-xs" />
              </div>
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm">Message</label>
              <Field 
                name="message" 
                as="textarea" 
                placeholder="Write your question here"
                className="w-full p-2 rounded border border-[#cecece] bg-transparent text-gray-700"
                rows="4"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-xs" />
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
              >
                Send Message
              </button>
            </div>
          </Form>
        </Formik>

        {/* Sending status message */}
        {isSending && (
          <div className="fixed top-8 right-4 bg-bg-head text-white p-4 rounded shadow-lg w-64">
            <p>{messageStatus}</p>
            <div className="mt-2 w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-green-500 rounded"
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
