import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";

export const ToggleThemeButton = ({ setDark, isDark }) => {
  const handleClickToggle = () => {
    setDark((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={handleClickToggle}>
      <img src={isDark === "dark" ? sun : moon} />
    </button>
  );
};
