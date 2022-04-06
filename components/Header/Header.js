import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="d-flex-around">
      <div className="ml-5">
        <Image
          src="https://houm.com/static/brandImage/houmLogo.svg"
          alt="Vercel Logo"
          width={122}
          height={70}
        />
      </div>
      <h1 className="title vw100">
        Poke-Houm{" "}
        <Link href="/" passHref>
          <a className="orange atitle">Challenge</a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
