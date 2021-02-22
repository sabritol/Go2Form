import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>A little about you </h1>
      <label>
        First Name:
        <input name="firstName" ref={register} defaultValue={state.firstName} />
      </label>
      <label>
        Last Name:
        <input name="lastName" ref={register} defaultValue={state.lastName} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
