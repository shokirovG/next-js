import React from "react";
import { useEffect } from "react";
import NotFound from "../404";

const contact = () => {
  const useFetch = async () => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/todos/2`);
    const data = await request.json();
    return data;
  };
  const data = null;
  if (!data) {
    return NotFound();
  }
  useEffect(() => {
    data.then((res) => {
      console.log(res);
    });
  }, []);
  return <div>contact one</div>;
};

export default contact;
