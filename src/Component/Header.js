const { default: Logo } = require("./Logo");
const { default: Navbar } = require("./Navbar");

const Header = () => {
  return (
    <div className="flex items-center justify-between my-5 p-5 shadow-lg ">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
