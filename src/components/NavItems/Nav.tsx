
import bolt from '../../images/bolt.png'
import ToggleModalItem from './ToggleModalItem'

import './Nav.css'

const Nav = () => {
    return <>
        <nav className='navbar navbar-expand-md'>
            <div className='container  d-flex justify-content-between'>
                <img src={bolt} alt="sample.png" width='70px' height='55px' className='navbar-brand' />
                <div className="collapse navbar-collapse middle-links" id="navbarNav">
                    <div className='d-flex justify-content-between align-items-center w-100  navbar-nav fw-bold  '>
                        <a href='###' >Ride</a>
                        <a href='###'>Become a driver</a>
                        <a href='###'>Fleet</a>
                        <a href='###'>Business</a>
                        <a href='###'>Scooters</a>
                        <a href='###'>Drive</a>
                        <a href='###'>Food</a>
                        <a href='###'>Cities</a>
                    </div>
                </div>
                <button className=' login-button btn btn-primary text-white text-center fw-bold rounded-pill '>
                    Log in
                </button>
                <ToggleModalItem/>
            </div>
        </nav>
    </>
}

export default Nav; 