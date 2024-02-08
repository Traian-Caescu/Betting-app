import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I start betting?',
      answer: 'To start betting, create an account, deposit funds, and choose the game you wish to bet on.',
    },
    {
      question: 'Can I withdraw my winnings anytime?',
      answer: 'Yes, winnings can be withdrawn anytime, subject to verification and processing times.',
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p> {/* Always render p, but control visibility with CSS */}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
