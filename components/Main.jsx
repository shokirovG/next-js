import React, { useEffect, useState } from "react";
import Image from "next/image";
const Main = () => {
  const [data, setData] = useState([]);
  //CSR
  useEffect(async () => {
    console.log(process.env.API_URL);
    const res = await fetch(`http://localhost:3000/api/users`);
    const data = await res.json();
    setData(data);
  }, []);
  console.log(data);
  return (
    <div>
      <Image
        src="/img/angelina.png"
        className="main"
        width={50}
        height={100}
        alt="logo"
      />
    </div>
  );
};

export default Main;
