import { redirects } from "@/next.config";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NotFound from "./404";

const users = () => {
  const route = useRouter();

  const [goods, setGoods] = useState([]);
  const useFetch = async () => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const data = await request.json();
    return data;
  };
  const data = null;
  if (!data) {
    return NotFound();
  }

  useEffect(() => {
    data.then((res) => {
      setGoods(res.slice(0, 20));
    });
  }, []);

  return (
    <>
      <Head>
        <title>USER</title>
      </Head>
      {goods &&
        goods.map(({ id, title }) => (
          <div key={id}>
            id:{id}-TITLE: {title}
          </div>
        ))}
    </>
  );
};

export default users;
