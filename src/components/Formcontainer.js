import React,{Component} from 'react';
import './registrationpagestyles.css';
import swal from 'sweetalert';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  

class Formcontainer extends Component{

    constructor(){
        super();
        this.state={
            name:null,
            emailid:null,
            mobileno:null,
            address:null,
            date:null,
            gender:null,
            error:{
                name:"",
                emailid:"",
                mobileno:"",
            },
            value:"",
            componentval:false
        }
        
    }

    setAttribute = (e) =>{
        const value=document.getElementById("date").value;
        this.setState({value:value,date:value});
    }

    submithandler = (e) =>{
        const {error} = this.state;
        e.preventDefault();
        if((error.name==="")&&(error.emailid==="")&&(error.mobileno==="")){
            swal({title: "Registration Info", text: "You have been registered successfully", type: 
            "success"}).then(function(){ 
               window.location.reload();
               }
            );

        }
    }

    handleChange = (e) =>{
        const {id,value}=e.target;
        let {error}=this.state;

        switch(id){
            case "name":
                if(value!==""){
                    if(typeof(value) !== "undefined"){
                        if(!value.match(/^[a-zA-Z ]+$/)){
                        error.name= "****Invalid name****";
                        }  
                        else{
                            error.name=""; 
                        }      
                    }
                }
                else{
                    error.name=""; 
                }
                break;
            case "emailid":
                if(value!==""){
                    if(!validEmailRegex.test(value)){
                        error.emailid="****Email is not valid****";
                    }
                    else{
                        error.emailid="";
                    }
                }
                else{
                    error.emailid=""; 
                }
                break;
            case "mobileno":
                if(value!==""){
                    if(typeof(value) !== "undefined"){
                        if(!value.match(/^[0-9]+$/)){
                        error.mobileno = "****Invalid mobile Number****";
                        }
                        else{
                            error.mobileno=""; 
                        }        
                    }
                }
                else{
                    error.mobileno=""; 
                }
                break;
        } 
        this.setState({error,[id]:value});

    }

    render(){
        return(
            <div className="formcontainer">
                <form onSubmit={(e)=>{this.submithandler(e)}} autoComplete="off">
                    <div>
                        <p className="registration-form-head">Registration Form</p>
                        <div className="row"> 
                            <div className="col-sm-6"> 
                                <input type="text" required id="name" className="textbox" placeholder="Name" onChange={(e)=>{this.handleChange(e)}} />
                                <p className="errormsg">{this.state.error.name}</p>
                                <br /><br />
                                <input required type="text" id="emailid" className="textbox" placeholder="Email address" onChange={(e)=>{this.handleChange(e)}}/>
                                <p className="errormsg">{this.state.error.emailid}</p>
                                <br /> <br />
                                <input required type="date" placeholder="Date of Birth" id="date" value={this.state.value} onChange={(e)=>{this.setAttribute(e)}} />
                                <p className="errormsg">{this.state.error.date}</p>
                                <br /><br />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" required id="address" className="textbox" placeholder="Address" onChange={(e)=>{this.handleChange(e)}} />
                                <p className="errormsg">{this.state.error.address}</p>
                                <br /> <br />
                                <input type="type" required id="mobileno" className="textbox" placeholder="Phone Number" onChange={(e)=>{this.handleChange(e)}}/>
                                <p className="errormsg">{this.state.error.mobileno}</p>
                                <br /> <br />
                                
                                <select required id="genderselect" onChange={(e)=>{this.handleChange(e)}}>
                                    <option value="" disabled selected hidden>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="others">others</option>
                                </select>
                                <p className="errormsg">{this.state.error.gender}</p>
                            </div>
                            <button type="submit" className="submitbutton" onSubmit={()=>{this.submithandler()}}>SUBMIT</button>
                        </div>
                    </div>  
                    
                </form>
            </div>
        );
    }
}

export default Formcontainer;

