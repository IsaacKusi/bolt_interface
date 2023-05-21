import { createContext } from "react";
import { ReactNode } from "react";
import { useState } from "react";


const DataContext = createContext({})

export const DataProvider = ({children}:{children:ReactNode})=>{
    const[emailError, setShowEmailError] = useState<Boolean>(false)
    const [phoneError, setPhoneError ] = useState<Boolean>(false)
    const[email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<number>()
    const[emailerrorColor, setEmailErrorColor] = useState<string>('')
    const[phoneErrorColor, setPhoneErrorColor] = useState<string>('')
    const[dialCodeErrorColor, setDialCodeErrorColor] = useState<string>('')
    const [isChecked, setIsChecked] = useState(false)
    const [checkErrorColor, setCheckErrorColor] = useState()


    return <>
    <DataContext.Provider  value={{
        emailError, setShowEmailError, phoneError, setPhoneError,phoneErrorColor, setPhoneErrorColor,
        email, setEmail, phone, setPhone,emailerrorColor, setEmailErrorColor,dialCodeErrorColor, 
        setDialCodeErrorColor, isChecked, setIsChecked, checkErrorColor ,setCheckErrorColor
        }}  >

        {children}

    </DataContext.Provider>
    </>
}

export default DataContext;

