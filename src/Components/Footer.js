import React from 'react'

function Footer() {
  return (
    <footer className="w3-padding-64 w3-light-grey w3-small" id="footer">
      <div className="w3-row-padding d-flex">
        <div className="w3-col s4">
          <h4>About</h4>
          <p>
            <button
              className="btn-link"
              style={{
                textDecoration: "none",
                background: "none",
                color: "inherit",
                border: "none",
                padding: "0",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
            >
              About us
            </button>
          </p>
          <p>
            <button
              style={{
                textDecoration: "none",
                background: "none",
                color: "inherit",
                border: "none",
                padding: "0",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
            >
              Find store
            </button>
          </p>
          <p>
            <button
              style={{
                textDecoration: "none",
                background: "none",
                color: "inherit",
                border: "none",
                padding: "0",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
            >
              Help
            </button>
          </p>
        </div>

        <div className="w3-col s4 d-flex flex-column ">
          <h4>Contact</h4>
          <p>Questions? Go ahead.</p>
          <form action="/action_page.php" target="_blank" rel="noreferrer">
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Name"
                name="Name"
                required
              />
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Email"
                name="Email"
                required
              />
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Subject"
                name="Subject"
                required
              />
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                name="Message"
                required
              />
            </p>
            <button type="submit" className="w3-button w3-block w3-black">
              Send
            </button>
          </form>
        </div>

        <div className="w3-col s4 w3-justify d-flex flex-column align-items-center">
          <h4 className="text-center">Store</h4>
          <p>
            <i className="fa fa-fw fa-map-marker"></i> Denver, CO
          </p>
          <p>
            <i className="fa fa-fw fa-phone"></i> 707-338-3266
          </p>
          <p>
            <i className="fa fa-fw fa-envelope"></i> johnfinley@gmail.com
          </p>
          <h4 className="text-center">We accept</h4>
          <p>
            <i className="fa fa-fw fa-cc-amex"></i> Amex
          </p>
          <p>
            <i className="fa fa-fw fa-credit-card"></i> Credit Card
          </p>

          <div className="d-flex justify-content-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jfinley6/capstone-project-frontend"
            >
              <i
                role="button"
                className="fa mr-2 fa-github w3-hover-opacity w3-large"
              ></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/john-finley-71ba22198/"
            >
              <i
                role="button"
                className="fa fa-linkedin w3-hover-opacity w3-large"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer