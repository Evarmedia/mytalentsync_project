// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Faqs.css";
import Plus from "../../images/plus-circle.png";
import Minus from "../../images/minus-circle.png";

function Faqs() {
  const data = [
    {
      question: "How many participants can join a ClearLink video conference?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        
    },
    {
      question: "Can I use ClearLink on multiple devices? ",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        
    },
    {
      question:
        "Is ClearLink compatible with other video conferencing platforms?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        
    },
    {
      question:
        "How does ClearLink ensure the security of my video conferences?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        
    },
    {
      question: "Do I need to download any software to use ClearLink? ",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        
    },
    {
      question: "What kind of customer support does ClearLink provide?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="app__faqs">
      <div className="faqs__one">
        <p className="support">Customer Support</p>
        <p className="faqs__header">FAQs</p>
        <p className="faqs__txt">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className="faqs__two">
        {data.map((data, i) => {
          return (
            <div className={selected === i ? "item" : "faqs__box"} key = {i}>
              <div>
                <h3 onClick={() => toggle(i)}>{data.question}</h3>
                <p className={selected === i ? "show" : "content"}>{data.answer}</p>
              </div>
              <div>
                <img onClick={() => toggle(i)} src={selected === i ? Minus : Plus} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
