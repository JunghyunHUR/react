import React, { useRef } from 'react';
// import {useDispatch} from "react-redux";
import emailJs from "@emailjs/browser";
import './contact.css';

const Contect = () => {
    const form = useRef();
    // const dispatch = useDispatch();

    const myid = {
        SERVICE_ID : "jason",
        TEMPLATE_ID : "template_97h79qd",
        USER_ID : "YcmTgcBS43jLKktvr"
    }
    const closeEmail = () => {
        // dispatch({ type: "CLOSE_EMAIL "});
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailJs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID, form.current, myid.USER_ID)
        .then((rs)=>{
            console.log(rs.text);
            alert("전송되었습니다.");
            closeEmail();
        },
        (error)=>{
            console.log(error.text);
            alert("전송에 실패했습니다.");
        });
    };

    return (
        <div>
            <section className="contact" id="contact">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>
                    <div className="content d-flex">
                        <div className="left">
                            <div className="box btn-shadow">
                                <div className="img">
                                    <img src="images/images.jpg" alt="함께" />
                                </div>
                                <div className="details">
                                    <h1>저에게 연락 주세요!!!</h1>
                                    <p>
                                        예수는 고동을 가는 것이다. 보는 뭇 남는 것이다. 
                                        속잎나고, 가슴에 주는 있는 싶이 구할 운다. 
                                        곳으로 따뜻한 쓸쓸한 맺어, 예가 날카로우나 현저하게 찾아다녀도, 이것이다. 
                                        지혜는 뭇 그들은 그러므로 것이다. 끓는 어디 있는 것이다. 
                                        피가 인생에 바이며, 대고, 그들은 산야에 위하여, 봄바람을 것이다. 
                                        가슴이 미인을 꽃이 찾아다녀도, 눈이 할지라도 품으며, 하는 사막이다. 
                                        이 풍부하게 구하지 작고 같지 뼈 같이, 힘있다. 
                                        용기가 같은 피에 물방아 구하기 같이 실현에 얼음 못할 있다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="box btn-shadow">
                                <form ref={form} onSubmit={sendEmail} className='emailform'>
                                    <div className="f-flex">
                                        <div className="col-50">
                                            <label>보내시는 분 성함</label>
                                            <input type="text" name="user_name" placeholder='이름'/>
                                            
                                        </div>
                                        <div className="col-50">
                                            <label>보내시는 분 이메일</label>
                                            <input type="text" name="user_email" placeholder='이메일'/>
                                        </div>
                                    </div>
                                    <div>
                                        <textarea name="message" placeholder='하실 말씀'></textarea>
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit"> 이메일 전송 </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contect;