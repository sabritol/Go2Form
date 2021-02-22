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
      <label className="control-label" htmlFor="vehicles">How many vehicles do you own?<br />
        <input type="radio" name="vehicles" id="vehicles-1" value="1"
          ref={register({ required: true })} className="radio"
          defaultChecked={state.data === "1"} 
        />
        <label class="radio">1</label>

        <input type="radio" name="vehicles" id="vehicles-2" value="2"
          ref={register({ required: true })} className="radio"
          defaultChecked={state.data === "2"} 
        />
        <label class="radio">2</label>
        {errors && <div className="form_error">Number of Vehicles is required</div>}
      </label>

      <input type="submit" />


    
    </form>
  );
};

export default withRouter(Step2);
