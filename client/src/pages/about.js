import "../styles/about.css";
import Fade from "react-reveal/Fade";
import setHomePageOption from "../actions/homepageoption";
import { useDispatch } from "react-redux";
import animateHeader from "../components/animateheader";
function AboutUs() {
  const dispatch = useDispatch();
  return (
    <div className="about-container">
      <div className="about-header">
        {animateHeader("About Bank Talent Solutions")}
      </div>
      <Fade right cascade>
        <div className="about-section">
          <h1>Who we are</h1>
          <p>
            Bank Talent Solutions is not just a recruitment agency; we are your
            strategic partner in talent acquisition. With a deep understanding
            of the unique demands and nuances of the financial services sector,
            we have built a reputation for delivering unparalleled recruitment
            solutions. Our team comprises seasoned industry experts and
            recruitment specialists who are committed to identifying and
            attracting the best talent for your organization.
          </p>
          <h2>We're different than the rest</h2>
          <p>
            <span className="about-highlight">Industry Insight:</span> Our team
            possesses an in-depth knowledge of the mortgage, banking,
            compliance, IT, and administration sectors. This expertise allows us
            to navigate the specific requirements of each industry and tailor
            our recruitment approach accordingly.<br></br> <br></br>
            <span className="about-highlight">Personalized Approach:</span> We
            recognize that every client and candidate is unique. Our
            personalized approach involves understanding your organization's
            culture, values, and specific hiring needs to ensure the perfect
            match between talent and opportunity.<br></br> <br></br>
            <span className="about-highlight">Extensive Network:</span>
            Leveraging our extensive network of professionals within the
            financial services realm, we can quickly connect you with qualified
            candidates who possess the skills and experience necessary to drive
            your business forward.<br></br> <br></br>
            <span className="about-highlight">
              Cutting-edge Technology:
            </span>{" "}
            Bank Talent Solutions utilizes cutting-edge recruitment technology
            to streamline the hiring process, providing efficient and effective
            solutions that save you time and resources. <br></br> <br></br>
            <span className="about-highlight">
              Commitment to Excellence:
            </span>{" "}
            Our commitment to excellence is unwavering. We take pride in
            maintaining the highest standards of professionalism, integrity, and
            confidentiality throughout the recruitment process.
          </p>
          <div className="about-buttons">
            <h1 onClick={() => dispatch(setHomePageOption("jobsearch"))}>
              Find a job
            </h1>
            <h1 onClick={() => dispatch(setHomePageOption("employer"))}>
              Work with us
            </h1>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default AboutUs;
