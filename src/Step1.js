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
      <label>
        First Name:
        <input 
        id="firstName"
        name="firstName" 
        defaultValue={state.firstName}
        ref={register({
          required: true,
           })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <div className="error">This field cannot be empty.</div>
        )}
        
      </label>
      <label>
        Last Name:
        <input 
        id="lastName"
        name="lastName" 
        defaultValue={state.lastName}
        ref={register({
          required: true,
           })}
         />
         {errors.lastName && errors.lastName.type === "required" && (
          <div className="error">This field cannot be empty.</div>
        )}
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);

