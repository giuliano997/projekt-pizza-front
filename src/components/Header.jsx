import "./css/Header.css";
import logo from "../assets/devquiz-logo.png";
import arrowIcon from "../assets/arrow-right.svg";

export default function Header({ currentPage, changePage }) {
  const handleQuizRestart = () => {
    changePage("quiz");
  };

  const scrollToInfoSection = () => {
    const section = document.getElementById("info-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogin = () => {
    changePage("login"); // Angenommen, es gibt eine Seite "login"
  };

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="Margarita Madness Logo" />
        <h1 className="shop-name">Margarita Madness</h1>
        <ul className="main-nav">
          <li>
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </li>
          {currentPage === "quiz" || currentPage === "quizInfo" ? (
            <li>
              <a
                className="nav-link hover-text"
                onClick={() => changePage("home")}
              >
                Zurück zur Startseite
              </a>
            </li>
          ) : currentPage === "advertising" || currentPage === "result" ? (
            <>
              <li>
                <a
                  className="nav-link hover-text"
                  onClick={() => changePage("home")}
                >
                  Zurück zur Startseite
                </a>
              </li>
              <li>
                <a className="nav-link hover-text" onClick={handleQuizRestart}>
                  Quiz wiederholen
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  className="nav-link hover-text"
                  onClick={scrollToInfoSection}
                >
                  Was ist Margarita Madness?
                </a>
              </li>
              <li>
                <a
                  className="nav-link quiz-nav-btn hover-text"
                  onClick={() => changePage("quizInfo")}
                >
                  Zum Quiz
                  <div className="arrow-right-icon-container">
                    <img src={arrowIcon} alt="" />
                  </div>
                </a>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}
