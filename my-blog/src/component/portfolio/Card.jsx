import React, {useState} from 'react';
import { FcLike, FcRight } from "react-icons/fc";
import { FaRegThumbsUp, FaAngleRight, FaTimes } from "react-icons/fa";

const Card = ({img, title, category, totalLike}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    const closeModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <div className="box btn-shadow card">
                <div className="img">
                    <img src={img} alt={img} onClick={toggleModal} />
                </div>
                <div className="category d-flex">
                    <span>
                        {category}
                    </span>
                    <label>
                        <FcLike/>
                        {totalLike}
                    </label>
                </div>
                <div className="title">
                    <h2>{title}</h2>
                    <a href="#popup" className="arrow" onClick={toggleModal}><FcRight /></a>
                </div>
            </div>

            {modal &&(
            <div className="modal overlay">
                <div className="modal-content d-flex">
                    <div className="modal-img left">
                        <img src={img} alt={img} />
                    </div>
                    <div className="modal-text right">
                        <span>Features - Design</span>
                        <h1>{title}</h1>
                        <p>얼음과 꽃 있는 그들을 이상 수 이상, 끝까지 이것이다.</p>
                        <p>얼음과 꽃 있는 그들을 이상 수 이상, 끝까지 이것이다.</p>
                        <p>얼음과 꽃 있는 그들을 이상 수 이상, 끝까지 이것이다.</p>
                        <button className="btn-shadow">
                            Like This<FaRegThumbsUp/>
                        </button>
                        <button className="btn-shadow">
                            View PROJECT<FaAngleRight/>
                        </button>
                        <button className="btn-shadow close-modal" onClick={closeModal}>
                            <FaTimes/>
                        </button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};

export default Card;