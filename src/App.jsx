import "./App.css";
import Boob from "./Components/Boob";
import ResetBoobsBtn from "./Components/ResetBoobsBtn";
import useLocalStorage from "./hooks/useLocalStorage";
import Title from "./Components/Title";
import DarkModeBtn from "./Components/DarkModeBtn";

const App = () => {
  const [lastBoobUsed, setLastBoobUsed] = useLocalStorage("lastBoobUsed", "");
  const [darkMode, setDarkMode] = useLocalStorage(false);

  const handleEmptyBoob = (side) => {
    if (lastBoobUsed === "") return setLastBoobUsed(side);
    setLastBoobUsed(lastBoobUsed === "right" ? "left" : "right");
  };

  const setBoobSizeStyle = (side) => {
    let sideTranslate = side === "right" ? "" : "-";
    let isEmpty = side === lastBoobUsed;
    return {
      width: isEmpty ? "55px" : "100px",
      height: isEmpty ? "110px" : "120px",
      zIndex: isEmpty ? "1" : "2",
      translate: isEmpty ? sideTranslate + "15px" : "0",
      boxShadow: isEmpty
        ? "none"
        : "20px 15px 2px rgba(0, 0, 0, 0.3), inset -5px -10px 0px rgba(0, 0, 0, 0.05), inset 5px 15px 10px rgba(256, 256, 256, 0.5)",
    };
  };

  const setNipplePlacement = (side) => {
    let sideTranslate = side === "right" ? "" : "-";
    let isEmpty = side === lastBoobUsed;
    return {
      translate: isEmpty ? sideTranslate + "15px -15px" : "0",
    };
  };

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    transition: "all 0.5s",
  };

  return (
    <div className="App" style={style}>
      <Title />
      <div className="boob-box">
        <Boob
          empty={() => handleEmptyBoob("left")}
          nipplePlacement={setNipplePlacement("left")}
          size={setBoobSizeStyle("left")}
        />
        <Boob
          empty={() => handleEmptyBoob("right")}
          nipplePlacement={setNipplePlacement("right")}
          size={setBoobSizeStyle("right")}
        />
      </div>
      <DarkModeBtn setDarkMode={() => setDarkMode(!darkMode)} />
      <ResetBoobsBtn reset={() => setLastBoobUsed("")} />
    </div>
  );
};

export default App;
