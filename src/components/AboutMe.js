import React from "react";

const AboutMe = () => {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="about_cont scrollTo">
        <div className="about_cont2">
          <p className="about_text">
            Hi, I’m a beginner <span className="upper">front-end developer</span> {"&"} <span className="upper">ui designer</span> based in
            Córdoba, Argentina, native Spanish and beginner(A2) English speaker.
          </p>
          <svg
            width="130"
            height="166"
            viewBox="0 0 130 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="about_icon"
          >
            <path
              className="svg_color"
              d="M17.7813 54V51.5H51.7813L66.2812 0.75L68.7812 1.50001L54.5313 51.5H93.7813L108.281 0.75L110.781 1.50001L96.5313 51.5H129.781V54H95.7812L78.7813 112.5H112.031V115H78.0312L63.5312 165.75L61.0313 165L75.2813 115H36.0312L21.5313 165.75L19.0313 165L33.2813 115H0.03125V112.5H34.0312L51.0312 54H17.7813ZM53.7812 54L36.7813 112.5H76.0313L93.0312 54H53.7812Z"
            />
          </svg>
        </div>
        <div className="about_cont2">
          <svg
            width="147"
            height="164"
            viewBox="0 0 147 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="about_icon asterisk"
          >
            <path
              className="svg_color"
              d="M62.0879 4.5C65.4212 1.5 69.2546 0 73.5879 0C77.9212 0 81.5879 1.5 84.5879 4.5C87.9212 7.16665 89.5879 10.6666 89.5879 15C89.5879 21 87.2546 30.8333 82.5879 44.5C77.9212 58.1667 75.4212 69.6667 75.0879 79C83.4212 74 92.0879 66.3333 101.088 56C110.088 45.3333 117.088 38.5 122.088 35.5C125.088 33.5 128.088 32.5 131.088 32.5C135.421 32.5 139.088 34.1667 142.088 37.5C145.088 40.8333 146.588 44.5 146.588 48.5C146.588 53.5 144.088 57.8333 139.088 61.5C133.755 64.8333 124.088 68 110.088 71C96.0879 74 84.9212 77.6666 76.5879 82C84.9212 86.3333 96.0879 89.8333 110.088 92.5C124.421 95.1667 134.088 98.1667 139.088 101.5C144.088 105.167 146.588 109.333 146.588 114C146.588 118.333 145.088 122.167 142.088 125.5C139.421 128.833 135.921 130.5 131.588 130.5C128.255 130.5 125.088 129.5 122.088 127.5C117.088 124.5 110.088 117.833 101.088 107.5C92.0879 97.1666 83.4212 89.5 75.0879 84.5C75.4212 93.8333 77.9212 105.333 82.5879 119C87.2546 132.667 89.5879 142.5 89.5879 148.5C89.5879 152.833 87.9212 156.5 84.5879 159.5C81.5879 162.167 77.9212 163.5 73.5879 163.5C69.2546 163.5 65.4212 162.167 62.0879 159.5C59.0879 156.5 57.5879 152.833 57.5879 148.5C57.5879 142.5 59.9212 132.667 64.5879 119C69.2546 105.333 71.7546 93.8333 72.0879 84.5C63.7546 89.5 55.0879 97.1666 46.0879 107.5C37.0879 117.833 30.0879 124.5 25.0879 127.5C22.0879 129.5 18.9212 130.5 15.5879 130.5C11.2546 130.5 7.58789 128.833 4.58789 125.5C1.92122 122.167 0.587891 118.333 0.587891 114C0.587891 109.333 3.08789 105.167 8.08789 101.5C13.0879 98.1667 22.5879 95.1667 36.5879 92.5C50.9212 89.8333 62.2546 86.3333 70.5879 82C62.2546 77.6666 51.0879 74 37.0879 71C23.0879 68 13.4212 64.8333 8.08789 61.5C3.08789 57.8333 0.587891 53.5 0.587891 48.5C0.587891 44.5 2.08789 40.8333 5.08789 37.5C8.08789 34.1667 11.7546 32.5 16.0879 32.5C19.0879 32.5 22.0879 33.5 25.0879 35.5C30.0879 38.5 37.0879 45.3333 46.0879 56C55.0879 66.3333 63.7546 74 72.0879 79C71.7546 69.6667 69.2546 58.1667 64.5879 44.5C59.9212 30.8333 57.5879 21 57.5879 15C57.5879 10.6666 59.0879 7.16665 62.0879 4.5Z"
            />
          </svg>
          <p className="about_text">
            Fascinated in learning WebGL with Three.js and animation with Gsap,
            always ready to learn new technologies, tools and knowledges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;