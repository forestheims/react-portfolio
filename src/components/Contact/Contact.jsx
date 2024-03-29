import styles from './Contact.css';
import linkedInLogo from '../../../public/images/LI-In-Bug.png';
import gitHubLogo from '../../../public/images/GitHub-Mark-Light-64px.png';
import pdfPng from '../../../public/images/pdf.png';
import emailPng from '../../../public/images/email.png';
import { motion } from 'framer-motion';
import useForm from '../../hooks/useForm';
import { useEffect, useState } from 'react';

export default function Contact() {
  // const [beenHere, setBeenHere] = useState('has not been here');

  // useEffect(() => {
  //   const setReturn = () => {
  //     const hasBeenHere = localStorage.getItem('HASBEENHERE');
  //     if (hasBeenHere === 'has been here') {
  //       setBeenHere(hasBeenHere);
  //     } else {
  //       setTimeout(
  //         () => void localStorage.setItem('HASBEENHERE', 'has been here'),
  //         6000
  //       );
  //     }
  //   };
  //   setReturn();
  // }, []);

  // const { formState, formError, handleFormChange, setFormError } = useForm({
  //   email: '',
  //   message: '',
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('formState :>> ', formState);
  // };

  return (
    <div className={styles.Contact}>
      {/* {beenHere === 'has not been here' && (
        <motion.iframe
          className={styles.changingPdf}
          src={resumeDisco}
          animate={{
            scale: [0.1, 1, 1, 1, 1, 1, 1, 0.75, 0.1],
            x: [0, 0, 0, 0, 0, 0, 0, -220],
            y: [-20, -20, -20, -20, -20, -20, -20, -310],
            borderRadius: ['10%', '0%', '0%', '0%', '0%', '0%', '10%', '10%'],
            opacity: [0, 1, 1, 1, 1, 1, 1, 0],
            transitionEnd: {
              display: 'none',
            },
          }}
          transition={{
            duration: 5,
          }}
        />
      )} */}
      <a href="/resume/2023-resume-2.3.pdf" target="_blank">
        <img src={pdfPng} alt="pdf download link" />
        View / Download my Resume
      </a>
      <a href="mailto:forestheims@gmail.com" target="_blank">
        <img
          src={emailPng}
          alt="email me link"
          // style={{ filter: 'invert(1)' }}
        />
        forestheims@gmail.com
      </a>
      <a href="https://github.com/forestheims" target="_blank">
        <img src={gitHubLogo} alt="link to my github profile" />
        github.com/forestheims
      </a>
      <a href="https://www.linkedin.com/in/forestheims/" target="_blank">
        <img src={linkedInLogo} alt="link to my linkedin profile" />
        linkedin.com/in/forestheims
      </a>
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Or, you can leave me a message here:</h3>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(e) => handleFormChange(e)}
          />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            name="message"
            value={formState.message}
            onChange={(e) => handleFormChange(e)}
          />
        </label>
        {formError && <p>Error: {formError}</p>}
        <input type="submit" />
      </form> */}
    </div>
  );
}
