import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";


const Step2 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions, errors } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./result");
  };



  return (
    // <form onSubmit={handleSubmit(data => setData(data))} className="form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="control-label" htmlFor="role">How many vehicles do you own?<br />
        <input type="radio" name="role" id="buyer" value="buyer"
          ref={register({ required: true })} className="radio"
          defaultChecked={state.data === "buyer"} 
        />
        <label class="radio">buyer</label>

        <input type="radio" name="role" id="seller" value="seller"
          ref={register({ required: true })} className="radio"
          defaultChecked={state.data === "seller"} 
        />
        <label class="radio">seller</label>
        {errors && <div className="form_error">Number of Vehicles is required</div>}
      </label>

      <input type="submit" />


    
    </form>
  );
};

export default withRouter(Step2);
