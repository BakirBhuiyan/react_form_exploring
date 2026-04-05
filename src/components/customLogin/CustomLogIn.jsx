import { useState } from "react"


//Making the custom hooks practice;

const CustomLogIn = (defaultValue) => {
      const [fromName, setFormName] = useState(defaultValue);

      const handleForm = e => {
            setFormName(e.target.value);
      }
      return [fromName, handleForm];
}
export default CustomLogIn;