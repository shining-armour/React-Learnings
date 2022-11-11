import corgi from "./corgi.jpg";
import { useState } from "react";
import "./App.css";

const App = () => {
  
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi" onClick={()=>setLikeCount(likeCount+1)}></img>
      <p>Amount of likes: {likeCount}</p>
    </div>
  );
};

export default App;
