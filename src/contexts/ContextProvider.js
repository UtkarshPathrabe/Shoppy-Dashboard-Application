import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  vart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') ?? '#03C9D7');
  const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') ?? 'Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (event) => {
    setCurrentMode(event.target.value);
    localStorage.setItem('themeMode', event.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (<StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
    {children}
  </StateContext.Provider>)
};

export const useStateContext = () => useContext(StateContext);
