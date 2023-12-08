import { Link } from "react-router-dom";
import ajibadeemmanuel from "./cv/ajibadeemmanuel.pdf";
import Ajibade from "./image/Ajibade.jpg";
const About = () => {
  return (
    <div className=" row mt-5 ">
      <div className="col-md-6 container about-div">
        <h1 className="m-5 about-me" data-aos="fade-down">
          <b>ABOUT ME</b>
        </h1>

        <div className="m-5" data-aos="fade-down">
          <p data-aos="fade-left">
            Hi, my name is Ajibade Emmanuel. I am a highly skilled, frontend
            developer with a Mathematics and computer science background.
          </p>
          <p data-aos="fade-right">
            With a strong Mathematical background, I found coding very
            interesting as I am very focused in solving problems with codes.
          </p>
          <p data-aos="fade-left">
            Outside web development I watch and play football and also solve
            complex Mathematical problem for fun and to kill boredom.
          </p>
          <p data-aos="flip-up">
            <b>I am open for frontend and backend development roles</b>
          </p>
        </div>

        <div className=" about-button-div row m-5">
          <button
            type="button"
            data-aos="fade-down"
            className="btn contact-btn  mb-1"
          >
            <Link to="/Contact">Contact Ajibade</Link>
          </button>
          <button
            type="button"
            data-aos="fade-right"
            className="btn download-btn "
          >
            <a href={ajibadeemmanuel} download="ajibadeemmanuel.pdf">
              {" "}
              Download My Resume{" "}
            </a>
          </button>
        </div>
      </div>
      <div className="col-md-5">
        <img
          src={Ajibade}
          data-aos="fade-left"
          className="img-fluid"
          alt="Ajibade"
        />
      </div>
    </div>
  );
};

export default About;
