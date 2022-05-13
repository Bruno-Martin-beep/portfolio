import React from "react";

const Contact = () => {
  return (
    <section className="section">
      <h2>Contact</h2>
      <div className="cont_cont scrollTo">
        <div className="cont_info">
          <p className="cont_text">
            const <span className="bold">sayHi</span> = {`{`}
          </p>
          <p className="cont_text cont_textSpace">
            Mail: <a target="_blank" rel="noreferrer" href="mailto:brunomartin.dev@gmail.com">brunomartin.dev@gmail.com</a>,
          </p>
          <p className="cont_text cont_textSpace">Phone: <a target="_blank" rel="noreferrer" href="tel:+54 9 351 557-8940">+54 9 351 557-8940</a>,</p>
          <p className="cont_text cont_textSpace">Github: <a target="_blank" rel="noreferrer" href="https://github.com/Bruno-Martin-beep">Bruno-Martin-beep</a></p>
          <p className="cont_text">{`};`}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
