import React from "react";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "../styles/NewEvent.css";
// import { Button } from "createistic-designsystem";

const NewEventForm = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    // errors,
    // setError,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
  };
  //   const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>Name:</label>
      <input name="Name" ref={register({ required: true })} />

      <label>Location:</label>
      <input name="Location" ref={register({ required: true, minLength: 2 })} />

      <label>Funding:</label>
      <select name="Funding" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="male">Funding</option>
        <option value="female">Sponsorship</option>
      </select>

      <label>Username</label>
      <input name="username" />

      <label>Email</label>
      <input name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />

      <label>Start Date</label>
      <input name="Start" type="date" ref={register({ required: true })} />
      <label>End Date</label>
      <input name="End" type="date" ref={register({ required: true })} />

      <label>Description of nomad sprint</label>
      <textarea name="Description" ref={register} />

      <input disabled={isSubmitting} type="submit" />
    </form>
  );
};

export default NewEventForm;
