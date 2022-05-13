import React from 'react'

const ThemeSetter = ({ handleTheme }) => {
  return (
    <div className="navbar_themes">
      <button
        className="themeButton lightT"
        aria-label="light theme"
        onClick={() => handleTheme("light")}
      />
      <button
        className="themeButton darkT"
        aria-label="dark theme"
        onClick={() => handleTheme("dark")}
      />
    </div>
  )
}

export default ThemeSetter