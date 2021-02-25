import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";


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
       <div className="buyer">
       <label className="control-label" htmlFor="role">
         <input className="radio" type="radio" name="role" id="buyer" value="buyer"
          ref={register({ required: true })} 
          defaultChecked={state.data === "buyer"} 
        />
       <label className="radio">Buyer</label>
       </label>
       </div>
       


       <div className="seller">
       <label className="control-label" htmlFor="role">
        <input className="radio" type="radio" name="role" id="seller" value="seller"
          ref={register({ required: true })}
          defaultChecked={state.data === "seller"} 
        />
        <label className="radio">Seller</label>
        {/* {errors && <div className="form_error">Number of Vehicles is required</div>} */}
      </label>
      </div>
      </div>




      <input type="submit" />



    
    </form>
  );
};

export default withRouter(Step2);
