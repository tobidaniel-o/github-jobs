import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Switch from "./Switch";
import { useState } from "react";

// New codes below
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Darkmode = () => {
  // New codes below
  const [theme, setTheme] = useState("light");
  const [isToggled, setIsToggled] = useState(false);
  // New codes below
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      {/* New codes below */}
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <div className="darkMode">
            <FaSun className="faSize faSun" />
            <Switch
              isToggled={isToggled}
              rounded={true}
              onToggle={() => setIsToggled(!isToggled ? themeToggler : "")}
            />
            <FaMoon className="faSize faMoon" />
          </div>
          {/* New codes below */}
        </StyledApp>
      </ThemeProvider>
    </div>
  );
};

export default Darkmode;
