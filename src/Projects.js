import Avengers from "./image/Avengers.png";
import Batman from "./image/Batman.png";
import githubUser from "./image/githubUser.png";
// import historyDate from './image/historyDate.png'
import moskol from "./image/moskol.png";

// import calculator from './image/calculator.png'
const Projects = () => {
  return (
    <div className="container  project-container">
      <h2 data-aos="fade-right">Projects</h2>

      <div
        className="accordion accordion-flush"
        data-aos="fade-down"
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Moskol Engineering Website
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row justify-content-between">
                <div className="col-md-5">
                  <p>
                    I built both the frontend and the backend of this project
                    using the express and NEXTJS. I also used JWT for the
                    authorization. In the project, the registered admin can buy,
                    edit, delete a product. He can also add, delete, and modify
                    the company's services, while the registered client can only
                    buy products.
                  </p>

                  <div className="project-button-div">
                    <button
                      type="button"
                      className="btn live-btn"
                      data-aos="flip-up"
                    >
                      <a
                        href="https://moskol.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Live
                      </a>
                    </button>
                    <button
                      type="button"
                      className="btn code-btn m-2"
                      data-aos="flip-left"
                    >
                      <a
                        href="https://github.com/Ajyupdate/moskol-rebrand"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        View Code{" "}
                      </a>
                    </button>
                  </div>
                </div>

                <div className="col-md-5">
                  {/* <div className='row'> */}
                  <div>
                    <img
                      src={moskol}
                      className="img-fluid"
                      height={300}
                      alt="A snap of the app"
                    />
                  </div>
                  {/* <div className='col-md-6'>
              </div> */}

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      History Date App
      </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="row">

        <div className="col-md-5">
          <p>
            This is an app that returns a notable event in History of a date input in by the user.
            I used the Fetch API to fetch the data from a demo cors API.
            It was mainly written with javascript
          </p>


          <div className='project-button-div'>
          
          <button type="button" className="btn live-btn" data-aos="flip-up"><a href="https://ajyupdate.github.io/History-date-app/" target="_blank" rel="noreferrer">View Live</a></button>
          <button type="button" className="btn code-btn m-2" data-aos="flip-down"><a href='https://github.com/Ajyupdate/History-date-app' target="_blank" rel="noreferrer"> View Code </a></button>
          </div>  
        
        </div>

        <div className="col-md-5">
          <div className='row'>
            <div className='col-md-6 mt-4'>
            <img  src={explicit} className='img-fluid' height={300 } alt='A Snap of the website in mobile view'/>
            </div>
          </div>

        </div>        
      </div> 
      </div>
      </div>
      </div>  */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Movie App
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-md-5">
                  <p>
                    This application allows user to search for movies they want
                    to know about. It summarizes the details of movies for the
                    user. I built it using React Native as the basic tool.
                  </p>

                  <div className="project-button-div">
                    <button
                      type="button"
                      className="btn live-btn"
                      data-aos="flip-up"
                    >
                      <a
                        href="https://movies-database-ajy.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Live
                      </a>
                    </button>
                    <button
                      type="button"
                      className="btn code-btn m-2"
                      data-aos="flip-right"
                    >
                      <a
                        href="https://github.com/Ajyupdate/movieDatabase"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        View Code{" "}
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <img
                        src={Batman}
                        className="img-fluid"
                        height={500}
                        alt="the snap"
                      />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img
                        src={Avengers}
                        className="img-fluid"
                        height={500}
                        alt="the snap"
                      />
                    </div>

                    <div className="col-md-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Github User Search
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row justify-content-between">
                <div className="col-md-5">
                  <p>
                    This app uses github REST API to return github user details
                    like: Username, profile picture, date joined, amount of
                    repository amount of followers and following, twitter Id and
                    others by simply accepting the user login of the github
                    users.
                  </p>

                  <div className="project-button-div ">
                    <button
                      type="button"
                      className="btn live-btn"
                      data-aos="flip-up"
                    >
                      <a
                        href="https://githubusersearch14.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Live
                      </a>
                    </button>
                    <button
                      type="button"
                      className="btn code-btn m-2"
                      data-aos="flip-left"
                    >
                      <a
                        href="https://github.com/Ajyupdate/Search-App-for-github-users"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        View Code{" "}
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-5">
                  {/* <div className="row view-button"> */}
                  <div>
                    <img
                      src={githubUser}
                      className="img-fluid"
                      height={800}
                      alt="A snap of the website in dektop mode"
                    />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
