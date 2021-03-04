import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./step2");
  };
  // useEffect(() => {
  //   register({ name: "firstName" }, { required: true });
  //   register({ name: "lastName" });
  // }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>A little about you </h1>
      <p>Please fill some of the basic details to get started.</p>

      <table >
      <label>
        <div>
        <input className="first"
        id="firstName"
        placeholder= "First Name"
        name="firstName" 
        defaultValue={state.firstName}
        ref={register({
          required: true,
           })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <div className="error">This field cannot be empty.</div>
        )}
        </div>
        
      </label>
      <label>
      <div className="field">
       
        <input 
        id="lastName"
        placeholder= "Last Name"
        name="lastName" 
        defaultValue={state.lastName}
        ref={register({
          required: true,
           })}
         />
         {errors.lastName && errors.lastName.type === "required" && (
          <div className="error">This field cannot be empty.</div>
        )}
        </div>
      </label>
      </table>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);

