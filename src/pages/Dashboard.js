import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Practice"; // Import the Sidebar component
import Navigation from "./Navigation"; // Import the Navigation component
import "./Dashboard.css"; 
// import "./Dees.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [collapsed, setCollapsed] = useState(false); // State for sidebar collapse
  const [searchTerm, setSearchTerm] = useState(""); // State for search filter

  // Function to toggle sidebar
  const handleSidebarToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // Handle key press to toggle sidebar
  const handleKeyPress = (event) => {
    if (event.key === "Control") {
      // Change this to any key you want
      handleSidebarToggle();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const filteredDevices = devices.filter(
    (dev) =>
      dev.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.modelNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Sidebar collapsed={collapsed} onToggle={handleSidebarToggle} />
      <div
        className={`main-content ${collapsed ? "collapsed" : ""}`}
        style={{ marginLeft: collapsed ? "60px" : "240px" }}
      >
        <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <br />
        <h2 style={{ margin: "11px" }}>Dashboard</h2>

        <div className="dashboard">
          {/* Top Section with Three Boxes */}
          <div className="top-section">
            <div className="container text-center">
              <div className="row">
                <div className="col custom-column position-3">
                  <div className="position-text">
                    <div className="position-title">AVAILABLE POSITION</div>
                    <div className="position-number">24</div>
                    <div className="position-status status-urgent">
                      4 Urgently Needed
                    </div>
                  </div>
                </div>
                <div className="col custom-column position-1">
                  <div className="position-text">
                    <div className="position-title">Job Open</div>
                    <div className="position-number">10</div>
                    <div className="position-status status-hiring">
                      4 Active Hiring
                    </div>
                  </div>
                </div>
                <div className="col custom-column position-2">
                  <div className="position-text">
                    <div className="position-title">New Employee</div>
                    <div className="position-number">24</div>
                    <div className="position-status status-department">
                      4 Department
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <br />
                <div className="col custom-column position-4">
                  <div className="position-text">
                    <div className="position-title">Total Employee</div>
                    <div className="position-number">216</div>
                    <div className="position-status status-men">120 men</div>
                    <div className="position-status status-women">16 women</div>
                  </div>
                </div>
                <div className="col custom-column position-5">
                  <div className="position-text">
                    <div className="position-title">New Request</div>
                    <div className="position-number">16</div>
                    <div className="position-status status-men">120 men</div>
                    <div className="position-status status-women">16 women</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <br />
                <div className="col-12 custom-column3">
                  <div className="bottom-section">
                    {/* <div className="row"> */}
                    <div className="col-12 custom-column4">
                      <div className="position-rightcol2">
                        <div class="grid text-center">
                          <div class="g-col-4">
                            {" "}
                            <h2>Announcement</h2>
                          </div>
                        </div>
                        <div className="top-row">
                          <div className="position-number2">
                            <span className="position-title2">
                              Upcoming schedule
                            </span>
                            <span class="dropdown" data-bs-theme="light">
                              <button
                                class="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButtonLight"
                                data-bs-toggle="dropdown2"
                                aria-expanded="false"
                              >
                                Today 10:40 am , fri 10 sept
                              </button>
                            </span>
                          </div>
                        </div>
                        <br />
                        <div className="position-staus status2-line">
                          <div class="dropdown" data-bs-theme="light">
                            <button
                              class="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButtonLight"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Outing Schedule for every department
                              <br /> <div className="time">Today 10:30 am</div>
                            </button>
                          </div>
                        </div>

                        <div className="position-status status2-line3">
                          <div class="dropdown" data-bs-theme="light">
                            <button
                              class="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButtonLight"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Training of new ui ux student
                              <br /> <div className="time">Today 9:30 am</div>
                            </button>
                          </div>
                        </div>
                        <div className="position-status status2-line3">
                          <div class="dropdown" data-bs-theme="light">
                            <button
                              class="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButtonLight"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              meeting with HR Department <br />{" "}
                              <div className="time">Today 4:00 am</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with White Background */}

          <div className="bottom-section">
            <div className="row">
              <div className="col-12 custom-column2">
                <div className="position-rightcol1">
                  <div className="headingcolor">
                    <div className="position-title1">Total Employee</div>
                  </div>
                  <div className="position-number1">10:40 am , fri 10 sept</div>
                  <div className="position-boldheading">
                    you posted a new job
                  </div>
                  <div className="position-staus status-line1">
                    kindly check term and work and make sure everything id ok
                  </div>
                  <div className="position-status status-line2">
                    today you make 12 activity
                  </div>
                  <button className="btn2">see all activity</button>
                </div>
                {/* </div> */}
              </div>
            </div>
            {/* <div className="row"> */}
            <div className="col-12 custom-column4">
              <div className="position-rightcol2">
                <div class="grid text-center">
                  <div class="g-col-4">
                    {" "}
                    <h2>Activity Status</h2>
                  </div>
                </div>
                <div className="top-row">
                  {/* <div className="event-time"> */}
                  {/* <span className="position-title2">Upcoming schedule</span> */}
                  <div className="position-number2">
                    <span className="position-title2">Upcoming schedule</span>
                    <span class="dropdown" data-bs-theme="light">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonLight"
                        data-bs-toggle="dropdown2"
                        aria-expanded="false"
                      >
                        10:40 am , fri 10 sept
                      </button>
                    </span>
                  </div>
                </div>
                <div className="position-boldheading2">priority</div>
                <div className="position-staus status2-line">
                  <div class="dropdown" data-bs-theme="light">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButtonLight"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      review candidate application ok
                    </button>
                  </div>
                </div>
                <div className="position-status2 status2-line2">Other</div>
                <div className="position-status status2-line3">
                  <div class="dropdown" data-bs-theme="light">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButtonLight"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      interview iwth candidate
                      <br /> <div className="time">Today 10:30 am</div>
                    </button>
                  </div>
                </div>
                <div className="position-status status2-line3">
                  <div class="dropdown" data-bs-theme="light">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButtonLight"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      shortmeeting with product designner from it department
                      <br /> <div className="time">Today 11:30 am</div>
                    </button>
                  </div>
                </div>
                <div className="position-status status2-line3">
                  <div className="position-status status2-line3"></div>
                  <div className="position-status status2-line3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
