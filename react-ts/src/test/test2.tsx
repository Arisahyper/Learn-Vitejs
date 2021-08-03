import React from "react";

type Hoge = {
  name: string;
  age: number;
};

const Hoge = ({ name, age }: Hoge) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
};

export default Hoge;
