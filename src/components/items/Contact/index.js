import React, { useRef } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import "../../../assets/css/home.css";
import "../../../assets/css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Index = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhxzgn2",
        "template_mllknhs",
        form.current,
        "rgcvKj7Zdrp8uDAuE"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Navbar activeBar="contact" />
      <section className="banner-blog">
        <div className="banner-text heading-primary">
          Contact <span>Us </span>
        </div>
      </section>
      <section className="contact">
        <div class="getin">
          <h2>Get in touch</h2>
          <p>Looking for help? Fill the form and start a new adventure.</p>
          <div class="getin-details">
            <h3>Office</h3>
            <div>
              <FontAwesomeIcon className="get" icon={faHome} />
              <p>Jl.Soedirman, Jakarta Selatan</p>
            </div>
            <h3>Phone</h3>
            <div>
              <FontAwesomeIcon className="get" icon={faPhone} />
              <p>
                (+62) 812 456 789 <br />
                (+62) 898 765 432
              </p>
            </div>
            <h3>Support</h3>
            <div>
              <FontAwesomeIcon className="get" icon={faEnvelopeOpenText} />
              <p>fivenoodle@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="form" ref={form} onSubmit={sendEmail}>
          <h4>Let's Connect</h4>
          <div class="form-row">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="fullname"
            />
            <input type="text" name="email" id="email" placeholder="email" />
          </div>
          <div class="form-row">
            <input type="text" name="phone" id="phone" placeholder="phone" />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <textarea
            type="text"
            name="yourmessage"
            id="yourmessage"
            rows="6"
            placeholder="your message"
          ></textarea>
          <button className="btn btn-send">SEND</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Index;
