"use client";

import React, { useState } from 'react';
import questionData from './questionData';


import '../globals.css'; // Import your CSS files here
// import './fontawesome/css/all.css'; // Import font-awesome CSS here
// import './teama_block.js'; // Import your JS files here
// import { FontAwesomeIcon } from 'react-fontawesome'; // Install and import font-awesome library

const getRight = (page, index0, index1) => questionData[page].answer_button[index0][index1]?"right":"wrong";

const NavbarItem = ({ index, text, setPage }) => (
    <button onClick = {
        () => {
            setPage(index)
        }
    }>{text}</button>
);

const Question = () => {
    const [page, setPage] = useState(0);
    return (
        <div className="main">
            <nav className="navbar">
                <h1 className="navbar_heading">{questionData[page].title}</h1>
                <div className="navbar_menu">
                    <div className="navbar_menu_1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <NavbarItem className="navbar_item" key={num} index={num} text={num} setPage={setPage} />
                        ))}
                    </div>
                    <div className="navbar_menu_2">
                        {[11, 12, 13, 14, 15, 16, 17, 18].map((num) => (
                            <NavbarItem className="navbar_item" key={num} index={num} text={num} setPage={setPage} />
                        ))}
                    </div>
                </div>
                <div className="navbar_arrow_ham">
                    <div className="navbar_reload">
                        <a href="/pages/index">
                            {/* <FontAwesomeIcon
                                icon={['fas', 'rotate-${}']}
                                className="fa-2x"
                                style={{ color: 'white' }}
                            /> */}
                        </a>
                    </div>
                    {/*arrow */}
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
                        <tbody>
                            <tr>
                            <td className="data_table_left">PaO<sub>2</sub></td>
                            <td className="data_table_${}">{questionData[page].PaO2} mmHg</td>
                            </tr>
                            <tr>
                            <td className="data_table_left">PaCO<sub>2</sub></td>
                            <td className="data_table_${}">{questionData[page].PaCO2} mmHg</td>
                            </tr>
                            <tr>
                            <td className="data_table_left">HCO<sub>3</sub><sup>−</sup></td>
                            <td className="data_table_${}">{questionData[page].HCO3} mEq/L</td>
                            </tr>
                            <tr>
                            <td className="data_table_left">pH</td>
                            <td className="data_table_${}">{questionData[page].pH}</td>
                            </tr>
                            <tr>
                            <td className="data_table_left">Na<sup>+</sup></td>
                            <td className="data_table_${}">{questionData[page].Na} mEq/L</td>
                            </tr>
                            <tr>
                            <td className="data_table_left">Cl<sup>−</sup></td>
                            <td className="data_table_${}">{questionData[page].Cl} mEq/L</td>
                            </tr>
                            <tr>
                            <td className="data_table_left">Hb</td>
                            <td className="data_table_${}">{questionData[page].Hb} g/dL</td>
                            </tr>
                            <tr>
                            <td className="data_table_left">Albumin</td>
                            <td className="data_table_${}">{questionData[page].Albumin} g/L</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ marginTop: '3%' }}>
                        ● 點我看{' '}
                        <a
                            className="data_ref_table_window"
                            style={{ textDecoration: 'none' }}
                            href="/pages/reference_table"
                        //     onClick={(e) => {
                        //         e.preventDefault();
                        //         window.open(
                        //             '/pages/reference_table',
                        //             'newwindow',
                        //             'width=400,height=400'
                        //         );
                        //     }}
                        >
                            參考數據
                        </a>
                    </p>
                </div>
                <div className="ref_block">
                    <div className="ref_click">
                        <a onClick={(e) => {}} ><i className="fa-solid fa-book fa-8x" aria-hidden="true" style={{marginBottom: "10%", color: "#565A5C"}}></i></a>
                        <p>點我看分析</p>
                    </div>
                    {questionData[page].ref_list}
                </div>
            </div>
            <div className={`diagnosis_block`}>
                <div className={`diagnosis_1layer_block`}>
                    <div className={`diagnosis_1layer_back_${getRight(page, 0, 0)}`}>
                        <button className={`${getRight(page, 0, 0)}_1 answer_1 answer_normal`}><a>正常</a></button>
                    </div>
                    <div className={`diagnosis_1layer_back_${getRight(page, 0, 1)}`}>
                        <button className={`${getRight(page, 0, 1)}_1 answer_1 answer_normal`}><a>代謝性酸中毒</a></button>
                    </div>
                    <div className={`diagnosis_1layer_back_${getRight(page, 0, 2)}`}>
                        <button className={`${getRight(page, 0, 2)}_1 answer_1 answer_normal`}><a>代謝性鹼中毒</a></button>
                    </div>
                    <div className={`diagnosis_1layer_back_${getRight(page, 0, 3)}`}>
                        <button className={`${getRight(page, 0, 3)}_1 answer_1 answer_normal`}><a>呼吸性酸中毒</a></button>
                    </div>
                    <div className={`diagnosis_1layer_back_${getRight(page, 0, 4)}`}>
                        <button className={`${getRight(page, 0, 4)}_1 answer_1 answer_normal`}><a>呼吸性鹼中毒</a></button>
                    </div>
                    
                </div>
                <div className={`diagnosis_2layer_block ${getRight(page, 0, 0)}_block`}>
                    <button className={`${getRight(page, 1, 0)}_2 answer_2`}><a>正常</a></button>
                </div>
                <div className={`diagnosis_2layer_block ${getRight(page, 0, 1)}_block`}>
                    <button className={`${getRight(page, 2, 0)}_2 answer_2`}><a>正常AG酸中毒</a></button>
                    <button className={`${getRight(page, 2, 1)}_2 answer_2`}><a>單純高AG酸中毒</a></button>
                    <button className={`${getRight(page, 2, 2)}_2 answer_2`}><a>高AG酸中毒合併正常AG酸中毒</a></button>
                    <button className={`${getRight(page, 2, 3)}_2 answer_2`}><a>高AG酸中毒合併代謝性鹼中毒</a></button>
                </div>
                <div className={`diagnosis_2layer_block ${getRight(page, 0, 2)}_block`}>
                    <button className={`${getRight(page, 3, 0)}_2 answer_2`}><a>代謝性酸中毒</a></button>
                </div>

                <div className={`diagnosis_2layer_block ${getRight(page, 0, 3)}_block`}>
                    <button className={`${getRight(page, 3, 0)}_2 answer_2`}><a>急性呼吸性酸中毒</a></button>
                    <button className={`${getRight(page, 3, 1)}_2 answer_2`}><a>慢性呼吸性酸中毒</a></button>
                </div>
                <div className={`diagnosis_2layer_block ${getRight(page, 0, 4)}_block`}>
                    <button className={`${getRight(page, 4, 0)}_2 answer_2`}><a>急性呼吸性鹼中毒</a></button>
                    <button className={`${getRight(page, 4, 1)}_2 answer_2`}><a>慢性呼吸性鹼中毒</a></button>
                </div>
                </div>

            <div className="additional_block" id="additional">
                {questionData[page].additional}
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

