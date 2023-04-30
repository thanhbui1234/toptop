import { useState } from "react";

const gifts = ["vu to", "lon"];

function App() {
  const [gift, setGift] = useState();

  const handleSetGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  return (
    <div className="App">
      <h1>{gift || "Nhan vao day de nhan phan thuong"}</h1>
      <button onClick={handleSetGift}>Click</button>
    </div>
  );
}

export default App;
