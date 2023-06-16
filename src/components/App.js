import Header from "./Header.jsx";
import Greetings from "./Greetings.jsx";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser] = React.useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Greetings />
      </div>
    </CurrentUserContext.Provider>
      )
}
export default App;
