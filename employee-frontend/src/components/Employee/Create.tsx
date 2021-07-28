import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";

function Create(): JSX.Element {
  let history = useHistory();

  interface IValues {
    [key: string]: any;
  }

  const [values, setValues] = useState<IValues>([]);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmission = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      employee_name: values.employee_name,
      designation: values.designation,
      joining_date: values.joining_date,
      rating: values.rating,
      review_comments: [],
      review_request: [],
      country: values.country,
      photo: values.photo,
    };

    const submitSuccess: boolean = await submitform(formData);
    setSubmitSuccess(submitSuccess);
    setValues({ ...values, formData });
    setLoading(false);
    setTimeout(() => {
      history.push("/");
    }, 1500);
  };

  const submitform = async (formData: {}) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/employee/create`,
        {
          method: "post",
          headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
          }),
          body: JSON.stringify(formData),
        }
      );
      return response.ok;
    } catch (ex) {
      return false;
    }
  };

  const setFormValues = (formValues: IValues) => {
    setValues({ ...values, ...formValues });
  };

  const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormValues({ [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div>
      <div className={"col-md-12 form-wrapper"}>
        <br />
        <h2> Create Employee </h2>
        <br />
        {submitSuccess && (
          <div className="alert alert-info" role="alert">
            Employee successfully created!
          </div>
        )}

        <form
          id={"create-post-form"}
          onSubmit={handleFormSubmission}
          noValidate={true}
        >
          <div className="form-group col-md-12">
            <input
              type="text"
              id="employee_name"
              onChange={(e) => handleInputChanges(e)}
              name="employee_name"
              className="form-control"
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              id="designation"
              onChange={(e) => handleInputChanges(e)}
              name="designation"
              className="form-control"
              placeholder="Enter designation"
            />
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              id="joining_date"
              onChange={(e) => handleInputChanges(e)}
              name="joining_date"
              className="form-control"
              placeholder="Enter joining date"
            />
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              id="rating"
              onChange={(e) => handleInputChanges(e)}
              name="rating"
              className="form-control"
              placeholder="Enter Rating"
            />
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              id="country"
              onChange={(e) => handleInputChanges(e)}
              name="country"
              className="form-control"
              placeholder="Enter country"
            />
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              id="photo"
              onChange={(e) => handleInputChanges(e)}
              name="photo"
              className="form-control"
              placeholder="Enter photo URL"
            />
          </div>
          <div className="form-group col-md-4 pull-right">
            <button className="btn btn-success" type="submit">
              Create
            </button>
            {loading && <span className="fa fa-circle-o-notch fa-spin" />}
          </div>
        </form>
      </div>
    </div>
  );
}
export default withRouter(Create);
