import React, { useEffect, useState } from "react";
import "./SettingSide.css";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setColor } from "../../rtk/colorSlice";
import { setMode } from "../../rtk/darkModeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SettingSide({ opensetting }) {
  const dispatch = useDispatch();

  const themeColor = useSelector((state) => state.color);

  // eslint-disable-next-line no-unused-vars
  const [colors, setColors] = useState([
    "#eeb013",
    "#3fa45b",
    "#376286",
    "#ba0d0d",
    "#714787",
  ]);

  const colorHandle = (col) => {
    document.documentElement.style.setProperty("--main-color", col);
    dispatch(setColor(col));
  };

  // Dark mode

  const DarkMode = useSelector((state) => state.dark);

  const darkHandle = () => {
    if (DarkMode === "light") {
      document.body.classList.add("dark");
      dispatch(setMode("dark"));
    } else {
      document.body.classList.remove("dark");
      dispatch(setMode("light"));
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", themeColor);
    if (DarkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={opensetting ? "SettingSide open" : "SettingSide"}>
      <div className="SettingSide__drakMode">
        <h5 className="SettingSide-title">Dark Mode</h5>
        <div
          className={
            DarkMode === "dark"
              ? "SettingSide__drakMode-checkBox active"
              : "SettingSide__drakMode-checkBox"
          }
          onClick={darkHandle}
        >
          <span>
            <FontAwesomeIcon icon={DarkMode === "dark" ? faSun : faMoon} />
          </span>
        </div>
      </div>

      <div className="SettingSide__colors">
        <h5 className="SettingSide-title">Color Theme</h5>
        {colors.map((col, index) => {
          return (
            <div
              key={index}
              className={
                themeColor === col
                  ? "SettingSide__color active"
                  : "SettingSide__color"
              }
              style={{ backgroundColor: col }}
              onClick={() => colorHandle(col)}
            />
          );
        })}
      </div>
    </div>
  );
}
