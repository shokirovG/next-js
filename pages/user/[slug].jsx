import { useRouter } from "next/router";
import React from "react";

const UserId = ({ user }) => {
  const route = useRouter();
  const { name, phone, username } = user;
  return (
    <>
      <h1>{name}</h1>
      <h2>{phone}</h2>
      <p>{username}</p>
    </>
  );
};

export default UserId;
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/${1}");
//   const data = await res.json();
//   return { props: { data } };
// };
export const getServerSideProps = async (context) => {
  const { query } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.slug}`
  );
  const user = await res.json();

  return { props: { user } };
};
