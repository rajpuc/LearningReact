import React from "react";

// form handeling

const App = () => {
  const submitHandeler = (e) => {
    e.preventDefault();
    console.log("Rajesh Pal");
  };
  return (
    <div>
      <form
        onSubmit={
          submitHandeler
        }
        className="w-full mt-9"
      >
        <div className="flex items-center mx-auto gap-2 w-fit">
          <input className="border px-2" type="text" name="" id="" />
          <button className="bg-blue-300 px-2 py-1/2 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
