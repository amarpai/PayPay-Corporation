import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(): JSX.Element {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchEmployee = async (): Promise<any> => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/employees`
      );
      const json = await response.json();
      setEmployee(json);
    };
    fetchEmployee();
  }, []);

  return (
    <section className="blog-area section">
      <div className="container">
        <div className="row">
          {employee &&
            employee.map((employee: any) => (
              <div className="col-lg-4 col-md-6" key={employee._id}>
                <div className="card h-100">
                  <div className="single-post post-style-1">
                    <div className="blog-image">
                      <img
                        src={employee.photo}
                        alt="employee"
                        className="employee-photo"
                      />
                    </div>
                    <div className="blog-info">
                      <h4 className="title">
                        <span>
                          <h4>{employee.employee_name}</h4>
                        </span>
                        <br />
                        <span>
                          <div>{employee.designation}</div>
                        </span>
                      </h4>
                    </div>
                  </div>
                  <br />
                  <ul className="post-footer">
                    <li>
                      <Link
                        to={`/employee/${employee._id}`}
                        className="btn btn-sm btn-outline-secondary review"
                      >
                        Submit Performance Review{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
