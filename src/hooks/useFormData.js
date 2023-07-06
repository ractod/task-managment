import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFormData = (initialValues, validator, submitHandler) => {
   
   const [formData, setFormData] = useState(initialValues)
   const [errors, setErrors] = useState({})
   const [touched, setTouched] = useState({})
   const [loading, setLaoding] = useState(false)

   const changeHandler = (event) => {
      const { name, value } = event.target
      setFormData(prevState => ({ ...prevState, [name]: value}))
   }

   const blurHandler = (event) => {
      const { name } = event.target
      setTouched(prevState => ({ ...prevState, [name]: true }))
   }

   const submit = async (event) => {
      event.preventDefault()
      if(Object.entries(errors).length) {
         toast.error("لطفا فرم را با دقت پر کنید")
      } else {
         setLaoding(true)
         await submitHandler(formData)
         setLaoding(false)
      }
   }

   // input props depending on name
   const generateInputProps = (name) => ({
      name: name,
      value: formData[name],
      onChange: changeHandler,
      onBlur: blurHandler,
      error: errors[name],
      isTouched: touched[name],
   })

   useEffect(() => {
      setErrors(validator(formData))
   }, [formData, touched])

   return {
      generateInputProps,
      submit,
      loading
   }
}

export default useFormData;