import { useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { useContext } from 'react'

const FormItems = () => {
    const [dialCodes, setDialCodes] = useState<any>([])
    const [cities, setCities] = useState<any>([])
    const { emailError, phoneError, email, phone, setEmail, isChecked, setIsChecked,
        setPhone, emailerrorColor, phoneErrorColor, dialCodeErrorColor, checkErrorColor } = useContext<any>(DataContext)

    useEffect(() => {
        try {
            fetch('https://countriesnow.space/api/v0.1/countries/codes')
                .then(response => response.json())
                .then(data => {
                    setDialCodes(data.data)
                })
        } catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        try {
            fetch('https://countriesnow.space/api/v0.1/countries/capital')
                .then(response => response.json())
                .then(data => {
                    setCities(data.data)
                })
        } catch (err) {
            console.log(err)
        }
    }, [])

    return <>
        <div className="d-flex flex-column mt-3">
            <div className="d-flex flex-column body-input-first">
                <label className="fw-bold">Email</label>
                <input type="email" placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    style={{ border: `1px solid ${emailerrorColor}` }} 
                    className="p-1 rounded"
                    />
                {emailError && <p className="text-danger">Email is required</p>}
            </div>

            <div className="body-input-second mt-3">
                <label className="d-block fw-bold">Phone number</label>
                <select style={{ border: `1px solid ${dialCodeErrorColor}` }} className="p-1 rounded">
                    {dialCodes.map((dialCode: any) => <option key={dialCode.name} value="">{dialCode.dial_code}</option>)}
                </select>
                <input 
                type="number" 
                placeholder="Phone"
                value={phone} onChange={(e) => setPhone(e.target.value)} 
                style={{ border: `1px solid ${phoneErrorColor}` }} 
                className="body-input-item p-1 rounded"
                />
                {phoneError && <p className="text-danger">Phone is required</p>}
            </div>

            <div className="d-flex flex-column body-input-third mt-3">
                <label className="fw-bold">City</label>
                <select name="city" id="form-city" className="p-1 rounded">
                    {cities.map((city: any) => <option key={city.name} value="">{city.capital}</option>)}
                </select>
            </div>
            <div className="d-flex justify-content-between mt-3" >
                <input type="checkbox" className="body-form-check" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
                <p className="form-input-p d-inline fw-bold ">
                    <span style={{color:`${checkErrorColor}`}}>I agree to Bolt's</span> <a href="###" className="terms-service text-decoration-none">
                        Terms of Service
                        </a><span style={{color:`${checkErrorColor}`}}> and</span> <a href="###" className="terms-service text-decoration-none">Privacy Policy</a></p>
            </div>
            <button className=' btn btn-primary text-white text-center fw-bold rounded-pill mt-3 mb-3 sign-up'>SIGN UP AS A DRIVER</button>
        </div>

    </>
}

export default FormItems;