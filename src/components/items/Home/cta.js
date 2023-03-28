import React from "react";

const cta = () => {
  return (
    <div>
      <section className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">Subscribe for our product</h2>
              <p className="cta-text">
                Get your noodle on with these healthy and delicious recipes.
                With so many flavors to choose from, you won't be bored with
                your food!
              </p>

              <form className="cta-form" action="#">
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="mail@example.com"
                    required
                  />
                </div>

                <div>
                  <label for="select-where">Where did you find us?</label>
                  <select id="select-where">
                    <option value="">Please choose one option</option>
                    <option value="website">Our Website</option>
                    <option value="youtube">You Tube</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button className="btn btn--form">Subscribe Now</button>
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Women Enjoying Noodle"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default cta;
