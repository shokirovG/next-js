import React from "react";
import { useRouter } from "next/router";
const Page = () => {
  const route = useRouter();

  return <div>{route.query.slug}</div>;
};

export default Page;
