import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const route = useRouter();
  setTimeout(() => {
    console.log(route);
    route.push("/contacts");
  }, 2000);
  return <div>hato 404 !</div>;
};

export default NotFound;
