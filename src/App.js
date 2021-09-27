import React, { useState } from "react";
import Alert from "./components/Alert";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState("light")
  const [blueLight, setBlueLight] = useState("disable")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const blueLightHelper = () => {
    let navbar = document.getElementById("navbar")
    let textBox = document.getElementById("textBox")

    navbar.classList.remove("bg-light")
    navbar.classList.remove("bg-dark")
    navbar.style.backgroundColor = "rgb(253, 255, 219)";
    navbar.style.opacity = "1.2";
    textBox.style.backgroundColor = "rgb(253, 255, 219)";
    document.body.style.backgroundColor = "rgb(253, 255, 219)";
    document.body.style.opacity = "1.2";
  }

  const toggleMode = () => {
    if (mode==="light"){
      setMode("dark")
      if (blueLight==="enable"){
        let toggleBlueLightBtn = document.getElementById("toggleBlueLight");
        toggleBlueLightBtn.click()
      }
      document.body.style.backgroundColor = "#2d333b"
      showAlert("Dark Mode has been Enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been Enabled", "success")
    }
  }

  const toggleBlueLight = () => {
    if (blueLight === "disable"){
      if (mode==="dark"){
        let toggleModeBtn = document.getElementById("toggleMode");
        toggleModeBtn.click()
      }
      setBlueLight("enable")
      blueLightHelper()
      showAlert("Blue Light Filter has been Enabled!", "success")
    }
    else{
      setBlueLight("disable")
      let textBox = document.getElementById("textBox")
      document.body.style.backgroundColor = "white";
      textBox.style.backgroundColor = "white";
      showAlert("Blue Light Filter has been Disabled!", "success")
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} toggleBlueLight={toggleBlueLight} blueLight={blueLight} />
      <Alert alert={alert}/>
      <TextForm mode={mode} showAlert={showAlert} blueLight={blueLight} />
    </>
  );
}

export default App;
