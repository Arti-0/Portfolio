import React from 'react';
import PropTypes from 'prop-types';

function HighlightedText({ words, fontSize = 'text-3xl', color = 'text-blue-neon', lineHeight = 'leading-8' }) {
  const highlightClass = `inline-block ${fontSize} ${color} font-bold ${lineHeight}`;

  return (
    <>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`} // Use a unique key
          className={highlightClass}
          style={{ margin: '0 0.25em', lineHeight: '1.75', display: 'inline-block' }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

HighlightedText.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  lineHeight: PropTypes.string,
};

export default HighlightedText;
