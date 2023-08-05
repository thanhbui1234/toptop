import { useState } from "react";
import Content from "./Content";
const Contentusestate = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ margin: 150 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
};

export default Contentusestate;
