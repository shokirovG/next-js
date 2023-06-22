import React from "react";
import Image from "next/image";
const Main = () => {
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
