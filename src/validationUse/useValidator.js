import { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator'

const useValidator = (customMessage = {}, customValidator = {}, forceUpdate ={}) => {
  const [show, setShow] = useState(true)
  const validator = new SimpleReactValidator({
    messages: customMessage, 
    validators: customValidator,
    // autoForceUpdate: forceUpdate,
  }) 

  if (show) {
    validator.showMessages()
    console.log(validator.showMessages(),'validator.showMessages()')
  }else{
    validator.hideMessages()
  }

  return [validator, setShow]
}

export default useValidator