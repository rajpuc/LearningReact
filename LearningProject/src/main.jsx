import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./context/UserContext.jsx";

// props drilling er problem holo j component gular data proyojon nai shei component gular moddhe o data pass korate hoi. R ai problem er solution hocce context api. Context api muloto data k centrelized kore ek jagai rekhe dei. And jokon jar data proyojon hobe tokon sha call kore data niye nei. And ata mid level application er jonno valo. But large application r o efficiently data manage korer jonno amra Redux use kori. kivabe set korte hobe sheta bujar jonno step gula follow koro.
createRoot(document.getElementById("root")).render(
  // 1: create a file.jsx first. for example in this case i create userContext.jsx
  
  //2:
  <UserContext>
    <App />
  </UserContext>

  //3: go UserContext.jsx file
);
