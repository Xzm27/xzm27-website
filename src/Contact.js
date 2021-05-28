import React from "react";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";
import Tooltip from "@material-ui/core/Tooltip";


function Contact() {
  return (
    <div className="contact" data-aos="fade-in">
      <h1 className="contact__title">Contact Me</h1>
      <div className="contact__in">
        <div className="services">
          <h2 className="__title">Services</h2>
          <p>
            Need a website or learn to code.
            <br />
            I've got it covered. Avail my <strong>paid services</strong>.
          </p>
          <div className="ico__text">
            <button className="btn-btn gg2">
              <WebIcon className="ico__in" />
            </button>
            <p>Get a website</p>
          </div>
          <div className="ico__text">
            <button className="btn-btn gg2">
              <CodeIcon className="ico__in" />
            </button>
            <p>Learn to code</p>
          </div>
        </div>

        <div className="mycontact ">
          <h2 className="__title">Contact Me</h2>
          <p>
            Feel free to contact me for my services.
            <br />
            Available for some chit chats too ;)
          </p>
          <div className="ico__text">
            <button className="btn-btn gg2">
              <PhoneIcon className="ico__in" />
            </button>
            <p>+91-8927309046</p>
          </div>
          <div className="ico__text">
            <button className="btn-btn gg2">
              <EmailIcon className="ico__in" />
            </button>
            <p>sayan.sah2002@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="followme">
        {/* // instagram facebook github twitter  linkedIn */}
        <div className="icos">
          <h2>Follow Me</h2>
          <p>Follow me on my social media</p>
          <div className="icos__in">
            <a
              href="https://www.instagram.com/xzm27_/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Instagram" placement="bottom" arrow>
                <button className="btn-btn">
                  <InstagramIcon className="ico__in gg" />
                </button>
              </Tooltip>
            </a>
            <a
              href="https://www.facebook.com/sayan.sah.31"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Facebook" placement="bottom" arrow>
                <button className="btn-btn">
                  <FacebookIcon className="ico__in gg" />
                </button>
              </Tooltip>
            </a>
            <a href="https://github.com/Xzm27" target="_blank" rel="noreferrer">
              <Tooltip title="Github" placement="bottom" arrow>
                <button className="btn-btn">
                  <GitHubIcon className="ico__in gg" />
                </button>
              </Tooltip>
            </a>
            <a
              href="https://twitter.com/Mesayan27"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Twitter" placement="bottom" arrow>
                <button className="btn-btn">
                  <TwitterIcon className="ico__in gg" />
                </button>
              </Tooltip>
            </a>
            <a
              href="https://www.linkedin.com/in/sayan-sah-3a6529212/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="LinkedIn" placement="bottom" arrow>
                <button className="btn-btn">
                  <LinkedInIcon className="ico__in gg mn" />
                </button>
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
