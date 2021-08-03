import React from "react";

const Hoge: React.FC<{ name: string; age: number }> = ({ name, age }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
};

export default Hoge;
