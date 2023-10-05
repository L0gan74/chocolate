import React from "react";
import style from "../main.module.scss";
import Image from "next/image";

const Products: React.FC = () => {
  return (
    <section className={style.products}>
      <h2>
        IT ALL ADDS UP TO ONE EXCEPTIONAL <span>TASTE</span> SENSATION
      </h2>
      <p className={style.top}>
        At Simply Chocolate, we believe that the secret to exceptional chocolate
        is in the details. From the sourcing of the finest ingredients to the
        careful crafting of each individual piece, every step of our process
        adds up to one exceptional taste sensation.
      </p>
      <div className={style.wrapper}>
        <div className={`${style.item} yellow`}>
          <Image
            src="/TASTE-1.webp"
            width={206}
            height={160}
            alt="MILK CHOCOLATE"
          />
          <p>MILK CHOCOLATE</p>
        </div>
        <div className={`${style.item} white`}>
          <Image src="/TASTE-2.webp" width={206} height={160} alt="Milk" />
          <p>Milk</p>
        </div>
        <div className={`${style.item} black`}>
          <Image src="/TASTE-3.webp" width={206} height={160} alt="nuts" />
          <p>nuts</p>
        </div>
        <div className={`${style.item} white`}>
          <Image
            src="/TASTE-4.webp"
            width={206}
            height={160}
            alt="sEMI - SWEET CHOCOLATE"
          />
          <p>sEMI - SWEET CHOCOLATE</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
