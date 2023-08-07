import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PDF from '../assets/downloads/CV.pdf';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = '#',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {btnLink.includes('pdf') && (
        <a
          className="button"
          href={PDF}
          download="CV.pdf"
          rel="noreferrer"
          target="_blank"
        >
          {btnText}
        </a>
      )}
      {btnLink.includes('https://') && !btnLink.includes('pdf') && (
        <a className="button" href={btnLink} rel="noreferrer" target="_blank">
          {btnText}
        </a>
      )}
      {!btnLink.includes('https://') && !btnLink.includes('pdf') && (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      )}
    </ButtonStyle>
  );
}
