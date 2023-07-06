import { useState } from "react";

const useToggle = () => {
   const [value, setValue] = useState(false)

   const toggleHandler = () => {
      setValue(prevState => !prevState)
   }

   return [value, toggleHandler]
}

export default useToggle;