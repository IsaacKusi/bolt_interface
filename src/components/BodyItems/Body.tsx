
import { FaAngleDown } from 'react-icons/fa'
import FormItems from './FormItems'
import DataContext from "../../context/DataContext";
import { useContext } from 'react'

import './Body.css'

const Body = () => {

    const { setPhoneError, setShowEmailError, email, phone, setCheckErrorColor,isChecked,
        setEmailErrorColor, setDialCodeErrorColor, setPhoneErrorColor } = useContext<any>(DataContext)


    const formHandler = () => {

        if (email === '' && phone === '') {
            setShowEmailError(true)
            setPhoneError(true)
            setPhoneErrorColor('red')
            setEmailErrorColor('red')
            setDialCodeErrorColor('red')
            setTimeout(() => {
                setShowEmailError(false)
                setPhoneError(false)
                setPhoneErrorColor('')
                setEmailErrorColor('')
                setDialCodeErrorColor('')
            }, 2000)
        }

        else if (phone === '') {
            setPhoneError(true)
            setPhoneErrorColor('red')
            setDialCodeErrorColor('red')
            setTimeout(() => {
                setPhoneError(false)
                setPhoneErrorColor('')
                setDialCodeErrorColor('')
            }, 2000)
        }

        else if (email === '') {
            setShowEmailError(true)
            setEmailErrorColor('red')
            setTimeout(() => {
                setShowEmailError(false)
                setEmailErrorColor('')
            }, 2000)
        }

        if(!isChecked){
            setCheckErrorColor('red')
            setTimeout(() => {
                setCheckErrorColor('')
            }, 2000)
        }

    }
    return <>
        <main className=" body-main ">
            <div className='container d-flex flex-column align-items-center flex-md-row justify-content-md-between '>
                <div className='body-heading   d-flex align-items-center '>
                    <div>
                        <h2 className='text-white fw-bold'>Make Money driving with Bolt</h2>
                        <p className='text-white  body-para '>Become a Bolt driver, set your schedule and earn extra money by driving!</p>
                        <p className='text-white mt-5  body-para-learn '>LEARN MORE <FaAngleDown className='fa-angle border border-white rounded-circle' /></p>
                    </div>
                </div>
                <form className='border bg-white body-form shadow-sm p-2' onSubmit={formHandler}>
                    <h6 className=''>Become a Bolt driver</h6>
                    <p className='body-form-p fw-bold'>If you have multiple cars or drivers <a href='###' className='body-form-a text-decoration-none'>sign up as a fleet owner</a></p>
                    <FormItems />
                </form>
            </div>
        </main>

    </>
}

export default Body;