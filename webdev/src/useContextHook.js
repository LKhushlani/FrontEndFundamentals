import React, {useContext, createContext }from 'react'

const ThemeContext = createContext('light');

function ThemedComponent() {

    const theme = useContext(ThemeContext);

  return (
    <div>
      <p> current Theme: {theme}</p>
    </div>
  )
}

export default ThemedComponent

// In app wrap 
{/* <ThemeContext.Provider value='dark'>
<ThemedComponent />
<ThemeContext.Provider/> */}

