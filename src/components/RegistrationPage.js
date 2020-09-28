import React,{Component} from 'react';
import Formcontainer from './Formcontainer';
import './registrationpagestyles.css'

class RegistrationPage extends Component{
    render(){
        return(
            <div className="registration-page">
              <div className="quinchlogo">
                <p>Q U I N C H</p>
                </div>
               <Formcontainer />
            </div>
        );
    }
}

export default RegistrationPage;

/*
<div className="quinchlogo">
                <p>Q U I N C H</p>
                </div>
               <Formcontainer />

*/