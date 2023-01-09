import React, {useState} from 'react'
import { Alert } from 'react-bootstrap'
const AlertMessage = ({message, type}) => {
    const [show, setShow] = useState(true);
    //Switch Statement
    switch(type){
        case 'error':
            return (
            <>
                {message!==[] ? (<Alert variant="danger" show={show} onClose={() => setShow(false)}  dismissible>
                <Alert.Heading>ERROR! You got an error!</Alert.Heading>
                <p>{message}.</p>
            </Alert>): (<></>)
            }
            </>
            )
        case 'success':
            return (
                <>
                    {message!==[] ||message!=="" ? (<Alert variant="success" show={show} onClose={() => setShow(false)}  dismissible>
                                <Alert.Heading>Success Message!</Alert.Heading>
                                <p>{message}.</p>
                            </Alert>): (<></>)
                            }
                </>
                )
        default:
            return;
    }
 
}

export default AlertMessage