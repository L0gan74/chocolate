import React from "react";
import style from "./layout.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Image src="./logo.svg" width={213} height={24} alt="SIMPLY CHOCOLATE" />
      <div className={style.right}>
        <nav className={style.nav}>
          <Link href="#">Home</Link>
          <Link href="#">How it’s made?</Link>
          <Link href="#">Our products</Link>
          <Link href="#">Top sellers</Link>
          <Link href="#chocolate">Chocolate is loved</Link>
        </nav>
        <div className={style.networks}>
          <Link href="#">
            <Image
              src="./instagram.svg"
              width={24}
              height={24}
              alt="Instagram"
            />
          </Link>
          <Link href="#">
            <Image src="./twitter.svg" width={24} height={24} alt="Twitter" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
