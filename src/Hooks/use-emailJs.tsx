import { useState } from "react";
import emailjs from "emailjs-com";
import { SendEmailJsModal } from "../Models/SendEmailJsModal";

const useEmailJs = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (requestConfig: SendEmailJsModal) => {
    setLoading(false);
    setError(false);

    const config = {
      firstName: requestConfig.firstName,
      lastName: requestConfig.lastName,
      email: requestConfig.email,
      phoneNumber: requestConfig.phoneNumber,
      message: requestConfig.message,
    };

    emailjs
      .send("service_lo7p2bj", "template_4febh37", config, "I6mnd9aVMJ4JkZ0gs")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setError(true);
        }
      );
  };

  return {
    error,
    loading,
    sendEmail,
  };
};

export default useEmailJs;
