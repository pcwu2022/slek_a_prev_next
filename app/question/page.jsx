import React from 'react'

import '../globals.css'; // Import your CSS files here
// import './fontawesome/css/all.css'; // Import font-awesome CSS here
// import './teama_block.js'; // Import your JS files here
// import { FontAwesomeIcon } from 'react-fontawesome'; // Install and import font-awesome library

const NavbarItem = ({ page, text }) => (
  <div className="navbar_item">
    <a href={`/pages/${page}`} className="navbar_link">
      {text}
    </a>
  </div>
);

const Question = () => {
  return (
    <div className="main">
      <nav className="navbar">
        <h1 className="navbar_heading">Title</h1>
        <div className="navbar_menu">
          <div className="navbar_menu_1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <NavbarItem key={num} page={`question${num}`} text={num} />
            ))}
          </div>
          <div className="navbar_menu_2">
            {[11, 12, 13, 14, 15, 16, 17, 18].map((num) => (
              <NavbarItem key={num} page={`question${num}`} text={num} />
            ))}
          </div>
        </div>
        <div className="navbar_arrow_ham">
          <div className="navbar_reload">
            <a href="/pages/index">
              {/* <FontAwesomeIcon
                icon={['fas', 'rotate-right']}
                className="fa-2x"
                style={{ color: 'white' }}
              /> */<></>}
            </a>
          </div>
          {/* Render your arrow content here */}
          <div className="navbar_hamburger" style={{ marginLeft: '6px' }}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      <div className="question_block">
        {/* Render your question content here */}
      </div>
      <div className="data_ref_block">
        <div className="data_block">
          <table className="data_table">
            {/* Render your data table here */}
          </table>
          <p style={{ marginTop: '3%' }}>
            ● 點我看{' '}
            <a
              className="data_ref_table_window"
              style={{ textDecoration: 'none' }}
              href="/pages/reference_table"
            //   onClick={(e) => {
            //     e.preventDefault();
            //     window.open(
            //       '/pages/reference_table',
            //       'newwindow',
            //       'width=400,height=400'
            //     );
            //   }}
            >
              參考數據
            </a>
          </p>
        </div>
        <div className="ref_block">
          {/* Render your ref block content here */}
        </div>
      </div>
      <div className="diagnosis_block">
        {/* Render your diagnosis content here */}
      </div>
      <div className="additional_block" id="additional">
        {/* Render your additional content here */}
      </div>
      <div className="footer_block">
        <div className="footer_icon">
          <a target="_blank" href="https://www.facebook.com/slekmed">
            {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} className="fa-2x" style={{ color: 'white' }} /> */}
          </a>
          {/* Render other social media icons */}
        </div>
        <p>SLEKMED</p>
      </div>
    </div>
  );
};

export default Question;

