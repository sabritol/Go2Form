import React from "react";
import { useForm, Controller } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'



const Step1 = (props) => {
  const { register, handleSubmit, errors, control } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  // const [value, setValue] = useState()
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>A little about you </h1>
      <p>Please fill some of the basic details to get started.</p>

     
      <span className="first">
      <label>
       
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
        
      </label>
         </span>

      <span className="last">
      <label>
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
      
      </label>
      </span>
      <div>
         <Controller
          name="phone"
          control={control}
          defaultValue={state.phone}
          render={({ name, onBlur, onChange, value }) => (
         <PhoneInput
          style={{  width: "100%"}}
            className= "phone-number"
            required
            placeholder="Enter phone number"
            id="phone"
            name={name} 
            value={value}
            onChange= {onChange} 
            onBlur={onBlur}
            ref={register}
            onlyCountries={['us', 'gb', 'de'  ]}
            defaultCountry={["us"]}
            localization={{
              'United States' : 'United States',
              'United Kingdom': 'United Kingdom',
              'Germany': 'Deutschland' 
              }}
            />
            )}
            />
        </div>


     
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);

