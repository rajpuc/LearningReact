import React, { useState } from "react";

// 2 way binding

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <form className="w-full mt-9">
        <div className="flex items-center mx-auto gap-2 w-fit">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(username);
            }}
            className="border px-2"
            type="text"
          />
          <button className="bg-blue-300 px-2 py-1/2 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
