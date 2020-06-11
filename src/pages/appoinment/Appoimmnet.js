import React from "react";
const Appoinment = () => {
  return (
    <div>
      <section className="page-title  v3 clearfix parallax  parallax5">
        <div className="overlay"></div>
        <div className="container">
          <div className="wrap-page-title">
            <div className="breakcrums text-center v2">
              <ul>
                <li>
                  <a href="#" className="hover-text">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    APPOINTMENT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    BOOK APPOINTMENT
                  </a>
                </li>
              </ul>
            </div>

            <div className="page-title-heading text-center v2">
              <h1>
                <a href="#" className="hover-text">
                  APPOINTMENT
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <article className="content-wrap book-calendar-page">
        <div className="flat-row bg-f0f0f0">
          <div className="container">
            <div className="sub-col clearfix">
              <div className="one-of-three">
                <div className="vehicle-year-wrap">
                  <div className="flat-title v9">
                    <h5>VEHICLE YEAR</h5>
                  </div>
                  <div className="content">
                    <div id="slider-range-year"></div>
                    <input type="text" name="amount" id="amount" />
                  </div>
                </div>
              </div>

              <div className="one-of-three">
                <div className="vehicle-make-wrap">
                  <div className="flat-title v9">
                    <h5>VEHICLE MAKE</h5>
                  </div>
                  <div className="wrap-input">
                    <input type="text" name="make" placeholder="Choose" />
                  </div>
                </div>
              </div>

              <div className="one-of-three">
                <div className="vehicle-mileage-wrap pd-left-15">
                  <div className="flat-title v9">
                    <h5>VEHICLE MILEAGE</h5>
                  </div>
                  <div className="wrap-input">
                    <input
                      type="text"
                      name="mileage"
                      placeholder="Vehicle mileaga"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flat-row">
          <div className="container">
            <div
              className="flat-spacer clearfix"
              data-desktop="70"
              data-mobile="70"
              data-smobile="70"
            ></div>
            <div className="sub-col clearfix">
              <div className="one-of-two pd-right-15">
                <div className="appointment-date-wrap">
                  <div className="flat-title v9">
                    <h5>APPOINTMENT DATE</h5>
                  </div>
                  <div className="wrap-input">
                    <input
                      type="text"
                      name="date"
                      placeholder="Tuesday, 10 July 2018 "
                    />
                  </div>
                </div>

                <div className="preffered-time-wrap">
                  <div className="flat-title v9">
                    <h5>PREFFERED TIME FRAME</h5>
                  </div>
                  <div className="wrap-input">
                    <input
                      type="text"
                      name="time"
                      placeholder="11:00 Am - 12:00 Pm"
                    />
                  </div>
                </div>
              </div>
              <div className="one-of-two pd-left-15">
                <div className="preffered-time-wrap">
                  <div className="flat-title v9">
                    <h5>SELECT SERVICES NEEDED</h5>
                  </div>
                  <div className="wrap-checked-all">
                    <div className="wrap-checked">
                      <input type="checkbox" name="Air" id="Air" />
                      <label for="Air">Air-conditioning</label>
                    </div>
                    <div className="wrap-checked">
                      <input type="checkbox" name="Wheel" id="Wheel" />
                      <label for="Wheel">Wheel-alignment</label>
                    </div>
                    <div className="wrap-checked">
                      <input type="checkbox" name="Oil" id="Oil" />
                      <label for="Oil">Oil-lub-filters</label>
                    </div>
                    <div className="wrap-checked">
                      <input type="checkbox" name="Heating" id="Heating" />
                      <label for="Heating">Heating-cooling</label>
                    </div>
                    <div className="wrap-checked">
                      <input type="checkbox" name="Brake" id="Brake" />
                      <label for="Brake">Brake-repair</label>
                    </div>
                    <div className="wrap-checked">
                      <input type="checkbox" name="Steering" id="Steering" />
                      <label for="Steering">Steering-suspension</label>
                    </div>
                    <div className="wrap-checked">
                      <input type="checkbox" name="Engine" id="Engine" />
                      <label for="Engine">Engine-diagnostic</label>
                    </div>
                    <div className="wrap-checked">
                      <input
                        type="checkbox"
                        name="Transmission"
                        id="Transmission"
                      />
                      <label for="Transmission">Transmission-repair</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flat-spacer clearfix"
              data-desktop="32"
              data-mobile="32"
              data-smobile="32"
            ></div>
          </div>
        </div>

        <div className="flat-row">
          <div className="container">
            <div className="contact-details-wrap flat-border-top">
              <div
                className="flat-spacer clearfix"
                data-desktop="34"
                data-mobile="32"
                data-smobile="32"
              ></div>
              <div className="flat-title v9">
                <h5>CONTACT DETAILS</h5>
              </div>
              <form action="#">
                <div className="wrap-input-all clearfix">
                  <div className="wrap-input one-of-two pd-right-10 name">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="wrap-input one-of-two pd-left-10 phone">
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <div className="wrap-input one-of-two  pd-right-10 email">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="wrap-input one-of-two pd-left-10 subject">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="wrap-textarea">
                  <textarea placeholder="Messages" name="message"></textarea>
                </div>
                <div className="wrap-btn">
                  <button type="submit" className="btn-effect btn-submit v2">
                    Submit now
                  </button>
                </div>
              </form>
            </div>
            <div
              className="flat-spacer clearfix"
              data-desktop="80"
              data-mobile="80"
              data-smobile="80"
            ></div>
          </div>
        </div>
      </article>

      <section className="flat-contact v1 clearfix">
        <div className="container">
          <div className="wrap-text">
            <h3 className="title">
              <a href="#">
                Have you question or need any help for work consulant?
              </a>
            </h3>
          </div>
          <div className="wrap-btn text-right">
            <a href="#" className="flat-button btn-contact bg-contact">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appoinment;
