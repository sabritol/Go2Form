import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
// import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';



const Step2 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./result");
  };



  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
       <h1>Select your role </h1>
       <p>Choose a role that better defines you.</p>


 <div className="radio-wraper">
       <span className="buyer">
         <input className="radio" type="radio" name="role" id="buyer" value="buyer"
          ref={register({ required: true })} 
          defaultChecked={state.data === "buyer"} 
        />
       <label for="buyer" >Buyer</label>
       <span className="checkmark"></span>
       </span>
        


       <span className="seller">
        <input className="radio" type="radio" name="role" id="seller" value="seller"
          ref={register({ required: true })}
          defaultChecked={state.data === "seller"} 
        />
        <label for="seller" >Seller</label>
        <span className="checkmark"></span>
    
       </span> 
   
       &nbsp;&nbsp;&nbsp;




      <input type="submit" />



    </div>
    </form>
  );
};

export default withRouter(Step2);
