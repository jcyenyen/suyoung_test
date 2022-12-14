import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../styles/global.scss";
import "../styles/index.scss";


import pancakeImg from "../img/pancake.png";
import sanwanImg from "../img/三文魚燉飯.png";
import eggImg from "../img/北非蛋.png";
import sandwichImg from "../img/牛油果雞蛋煙肉三文治.png";
import step1 from "../img/牛油果雞蛋煙肉三文治.png";



function RecipesPage2(props) {
    return (
        <>
            <header>
                <h4 className="text-center fw-bold title_color">天菜大廚</h4>
            </header>
            <section className="mb-5">
                <div className="j_container">
                    <div className="d-md-none text-center mt-5">
                        <img className="col-10 recipe_picture rounded-circle" src={sandwichImg} alt="" />
                    </div>
                    <div className="glass mt-5 d-md-flex menu ">
                        <div className="col-5 d-none d-md-block text-center mt-5 ">
                            <img className="col-12 recipe_picture rounded-circle position-relative" src={sandwichImg} alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="w-75 m-auto border-bottom pt-3 pb-md-3">
                                <div className="recipe_title me-5 mt-3 text-center">牛油果雞蛋</div>
                                <div className="recipe_title ms-5 text-center">醃肉三文治</div>
                            </div>
                            <div className="pb-3 d-md-flex justify-content-evenly align-items-center">
                                <div className="recipe_line pe-md-5 ms-md-5">
                                    <div className="d-flex justify-content-center m-3">
                                        <h5 className="recipe_material">材料:</h5>
                                        <h5 className="recipe_material">
                                            牛油果 1 個、煙肉 4塊、<br />
                                            麵包 4 塊、雞蛋2隻
                                        </h5>
                                    </div>
                                    <div className="d-flex justify-content-center m-3">
                                        <h5 className="recipe_material">調味料:</h5>
                                        <h5 className="recipe_material">
                                            鹽及胡椒
                                        </h5>
                                    </div>
                                </div>
                                <div className="pt-md-5">
                                    <div className="d-flex justify-content-center m-3">
                                        <h5 className="recipe_material">建議人數:</h5>
                                        <h5 className="recipe_material">
                                            2-4人
                                        </h5>
                                    </div>
                                    <div className="d-flex justify-content-center m-3">
                                        <h5 className="recipe_material">鍋具:</h5>
                                        <h5 className="recipe_material">
                                            平底鍋
                                        </h5>
                                    </div>
                                    <div className="d-flex justify-content-center m-3">
                                        <h5 className="recipe_material">葷/素：</h5>
                                        <h5 className="recipe_material">
                                            葷
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <div className="j_container pt-md-5">
                    <div className="glass step mb-md-3">
                        <div className="recipe_title border-bottom border-2 w-75 m-auto mb-3 pt-3 pb-md-5 pt-md-5 text-center">How To Do: </div>
                        <div className="accordion col-10 m-auto mb-3 d-md-none" id="accordionExample">
                            <div className="accordion-item glass">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Step 1.
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show text-whi" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                        until the collapse plugin adds the appropriate classNamees that we use to style each
                                        element. These classNamees control the overall appearance, as well as the showing and hiding
                                        via CSS transitions. You can modify any of this with custom CSS or overriding our
                                        default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item glass">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Step 2.
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                        until the collapse plugin adds the appropriate classNamees that we use to style each
                                        element. These classNamees control the overall appearance, as well as the showing and hiding
                                        via CSS transitions. You can modify any of this with custom CSS or overriding our
                                        default variables. It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item glass">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Step 3.
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                        the collapse plugin adds the appropriate classNamees that we use to style each element.
                                        These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables. It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item glass">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Step 3.
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                        the collapse plugin adds the appropriate classNamees that we use to style each element.
                                        These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables. It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item glass">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Step 3.
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                        the collapse plugin adds the appropriate classNamees that we use to style each element.
                                        These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables. It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-flex col-md-10 m-auto">
                            <div className="col-md-3 border-end border-2">
                                <div className="col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title">Step 1.</div>
                                <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title">Step 2.</div>
                                <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title">Step 3.</div>
                                <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title">Step 4.</div>
                                <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title">Step 5.</div>
                                
                            </div>
                            <div className="col-md-9">
                                <h5 className="col-md-9 py-md-5 m-auto">1）將洋蔥、蘑菇切成小塊；將蒜切片；<br />用鹽、胡椒將三文魚調味；米洗好並先浸20分鐘。</h5>
                                <div className="d-flex">
                                    <div className="col-9 text-md-center">
                                        <img className="col-md-9" src={step1} alt="" />
                                    </div>
                                    <div className="col-3">
                                        <div className="col-6 m-auto mt-5 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button">大廚計時器</div>
                                        <div className="col-md-8 m-auto text-center rounded-pill border border-dark my-4 recipe_title">30:00</div>
                                        <h5 className="col-6 m-auto mt-5 text-center">price:3000</h5>
                                        <h5 className="col-6 rounded-pill m-auto mt-2 py-2 text-white btn_bgc_color text-center">加入購物車</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="d-md-none col-4 col-md-1 rounded-pill m-auto mb-3 py-2 text-white btn_bgc_color text-center">加入購物車</h5>
                    </div>
                </div>    
            </section>
        </>
    );
}

export default RecipesPage2;
