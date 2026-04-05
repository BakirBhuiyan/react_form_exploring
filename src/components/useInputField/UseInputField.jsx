import { useState } from "react"
//Making a custom hook here to reduce the repeated code ;

const UseInputField = (defaultValue) => {
      const [fieldValue, setFieldValue] = useState(defaultValue);

      const handleFieldOnChange = e => {
            setFieldValue(e.target.value);
      }
      return [fieldValue, handleFieldOnChange];

}
export default UseInputField;