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
            Mail: BrunoMartin.Dev@gmail.com,
          </p>
          <p className="cont_text cont_textSpace">Phone: +54 9 351 557-8940,</p>
          <p className="cont_text cont_textSpace">Github: Bruno-Martin-beep</p>
          <p className="cont_text">{`};`}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
