import React from 'react';

const About = () => {
  return (
    <div className="container about-page">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card bg-light mb-3">
            <div className="card-body">
              <h2 className="card-title text-primary">About TexxtUtils</h2>
              <p className="card-text">Welcome to TexxtUtils, your one-stop solution for text manipulation! TexxtUtils provides a range of handy text tools to enhance your productivity and efficiency.</p>
              <p className="card-text">With TexxtUtils, you can easily:</p>
              <ul className="card-text">
                <li>Count words and characters in your text</li>
                <li>Transform text to lowercase or uppercase</li>
                <li>Remove extra spaces from your text</li>
                <li>Copy your text to the clipboard with just one click</li>
                <li>Switch between light and dark mode for optimal viewing experience</li>
              </ul>
              <p className="card-text">Whether you're a writer, student, programmer, or anyone who works with text, TexxtUtils has the tools you need to streamline your workflow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
