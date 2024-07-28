import logo from "../images/logo512.png";

function Header() {
  return (
    <>
      <img src={logo} alt="React logo" />
      <header className="app-header">
        <h1>The React Quiz</h1>
      </header>
    </>
  );
}

export default Header;
