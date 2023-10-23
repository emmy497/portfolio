import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div id="about">
        <div className="about">
          <h1 className="about-me-text">
            Hello, I'm Emmanuel,
            <br /> a passionate and versatile web developer with a strong
            foundation in a variety of technologies. I specialize in creating
            dynamic and engaging web applications using React, JavaScript, HTML,
            CSS, and Python. My journey in the world of web development began
            with an insatiable curiosity and a commitment to continuous
            learning. I'm not just a developer; I'm a problem solver who loves
            to dive into challenges and emerge with innovative solutions. I take
            pride in my ability to adapt quickly to new technologies and stay
            up-to-date with the latest industry trends. Collaboration is at the
            heart of what I do. I believe that the best results are achieved
            when a team of like-minded individuals comes together, each
            contributing their unique skills and expertise. I excel in a
            collaborative work environment and am always eager to share
            knowledge and ideas with my peers. My portfolio showcases a range of
            projects that demonstrate my technical skills, creativity, and
            commitment to delivering outstanding user experiences. From building
            responsive websites to crafting interactive web applications, I'm
            dedicated to providing solutions that not only meet but exceed
            expectations. I'm excited about what the future holds in the
            ever-evolving field of web development. Whether you're interested in
            creating a stunning website, enhancing user experiences, or tackling
            a complex coding challenge, I'm ready to join you on the journey.
            Let's work together to turn your ideas into reality. Feel free to
            explore my portfolio and get in touch to discuss how we can
            collaborate on your next project!
          </h1>
          <br />
          <p>My skills include</p>


          <div className="my-skills">
          <div className="container">
            <div className=" skills html">
            <i class="fa-brands fa-html5 fa-flip"></i>
            90%</div>
          </div>
          <div className="container">
            <div className="skills js">
            <i class="fa-brands fa-js fa-flip"></i>
            80%</div>
          </div>
          <div className="container">
            <div className="skills js">
            <i class="fa-brands fa-python fa-flip"></i>
              60%</div>
          </div>
          <div className="container">
            <div className="skills react">
            <i class="fa-brands fa-react fa-flip fa-l"></i>
            <p>80%</p>
            </div>
          </div>
          <div className="container">
            <div className=" skills python">
            <i class=" fa-brands fa-python fa-flip fa-l"></i>60%</div>
          </div>
        </div>

        </div>

       

      </div>
    </>
  );
}

export default About;
