
import { useState } from "react";

const ToggleModalItem = () => {
   
    const [showModal, setShwowModal] = useState<Boolean>(false)

    return <>
        <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler bar-fixed"
            onClick={()=>setShwowModal(!showModal)}
             >
            <span className='navbar-toggler-icon bar-fixed-inner'></span>
        </button>
        {showModal && <div className=
        'position-fixed   rounded  top-10px align-items-center w-25 shadow-lg navbar-nav  fw-bold  mod-item   '>
            <a href='###' >Ride</a>
            <a href='###'>Become a driver</a>
            <a href='###'>Fleet</a>
            <a href='###'>Business</a>
            <a href='###'>Scooters</a>
            <a href='###'>Drive</a>
            <a href='###'>Food</a>
            <a href='###'>Cities</a>
        </div>}
    </>
}

export default ToggleModalItem;