import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .contact-links .email-link {
    margin-right: 10px; /* Adjust the value as needed */
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        My inbox is always open. Whether you have a question or just want to say hello, feel free to
        reach out! You can email me directly at <strong>victor@frago.so</strong>, or just click the
        buttons below to get in touch.
      </p>

      <div className="contact-links">
        <a className="email-link" href={`mailto:${email}`}>
          Send Email
        </a>
        <a
          className="email-link"
          href="https://wa.me/5511970791572?text=Hi!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk."
          target="_blank"
          rel="noopener noreferrer">
          Send WhatsApp
        </a>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
