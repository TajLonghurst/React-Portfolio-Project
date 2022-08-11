import emailjs from "emailjs-com";
import { SendEmailJsModal } from "../Models/SendEmailJsModal";
import { useDispatch } from "react-redux";
import { uiActions } from "../ReduxStore/ui-slice";

const useEmailJs = () => {
  const dispatch = useDispatch();

  const sendEmail = (requestConfig: SendEmailJsModal) => {
    dispatch(uiActions.FormLoading({ isLoading: true }));
    dispatch(uiActions.FormError({ error: false }));

    const config = {
      firstName: requestConfig.firstName,
      lastName: requestConfig.lastName,
      email: requestConfig.email,
      phoneNumber: requestConfig.phoneNumber,
      message: requestConfig.message,
    };

    emailjs
      .send(
        "service_lo7p2bj",
        "template_4febh37",
        config,
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          dispatch(uiActions.FormLoading({ isLoading: false }));
        },
        (error) => {
          console.log("FAILED...", error, error.status);
          dispatch(uiActions.FormError({ error: true }));
        }
      );
  };

  return {
    sendEmail,
  };
};

export default useEmailJs;
