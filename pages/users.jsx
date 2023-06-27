import { redirects } from "@/next.config";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NotFound from "./404";

//CSR
const users = ({ data }) => {
  const route = useRouter();
  

  if (!data) {
    return NotFound();
  }

  return (
    <>
      <Head>
        <title>USER</title>
      </Head>
      <h1>userlar</h1>
      {data &&
        data.map(({ id, name }) => (
          <div key={id}>
            <Link href={`/user/${id}`}>{name}</Link>
          </div>
        ))}
    </>
  );
};

export default users;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/users`);
  const data = await res.json();
  return { props: { data } };
};
