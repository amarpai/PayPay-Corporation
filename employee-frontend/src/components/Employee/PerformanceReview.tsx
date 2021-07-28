import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function PerformanceReview() {
  let { employeeID } = useParams();

  const [employee, setEmployee] = useState<any>({});

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/employee/${employeeID}`
      );
      const json = await response.json();
      setEmployee(json);
    };
    fetchData();
  }, [employeeID]);

  return (
    <section className="post-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-0" />
          <div className="col-lg-10 col-md-12">
            {employee && (
              <div className="main-post">
                <div className="post-top-area">
                  <h3 className="title">
                    <span>
                      <b> Write your review for - {employee.employee_name}</b>
                    </span>
                  </h3>
                  <p className="para">
                    <b>
                      {employee.designation} | {employee.country}
                    </b>
                  </p>

                  <div className="form-outline">
                    <textarea
                      className="form-control"
                      id="Performance Review"
                      rows={10}
                    ></textarea>
                    <button
                      className="btn btn-success submit-review"
                      type="submit"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceReview;
