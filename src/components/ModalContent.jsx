import React from "react";

export default function ModalContent({ title, onClose, body }) {

    return (
        <div className="modalContent">
            <div className="modalTopSection flex alignCenter justifyBetween w100">
                <h2 className="modalTitle">{title}</h2> <i className="closeModalX" onClick={onClose} class="fa-solid fa-x"></i>
            </div>
            <div className='modalMiddleSection w100 flex'>
                {body}
            </div>
            <div className="modalBottomSection flex w100">
                <button className="button closeBtn" onClick={onClose}>Close</button>
                <button className="button saveBtn">Save Chages</button>
            </div>
       </div>
    )
}

// <i class="fa-duotone fa-x"></i>