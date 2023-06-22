import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  const routs = [
    { id: 1, router: "/", name: "Home" },
    { id: 2, router: "/contacts", name: "Contacts" },
    { id: 3, router: "/contacts/contact", name: "Contact" },
    { id: 4, router: "/users", name: "Users" },
  ];
  return (
    <nav>
      <div className="nav-wrapper">
        <Link href="/" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {routs.map(({ id, router, name }) => (
            <li key={id}>
              <Link
                key={id}
                href={router}
                className={router === pathname ? "active" : "link"}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
