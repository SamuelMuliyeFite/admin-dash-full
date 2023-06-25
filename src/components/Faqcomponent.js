import React from 'react';

const FaqComponent = ({ faqData }) => {
  return (
    <div>
      <h1>FAQ</h1>
      {faqData.map((faqItem, index) => (
        <div key={index}>
          <h2>{faqItem.question}</h2>
          <p>{faqItem.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;