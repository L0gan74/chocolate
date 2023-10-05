import React from "react";
import style from "../main.module.scss";
import Image from "next/image";

const Sellers = () => {
  return (
    <section className={style.sellers}>
      <h2>
        <span>tOp</span> Sellers
      </h2>
      <div className={style.wrapper}>
        <Image
          src="/sellers-3.webp"
          width={368}
          height={464}
          alt="top sellers"
        />

        <Image
          src="/sellers-2.webp"
          width={368}
          height={464}
          alt="top sellers"
        />
        <Image
          src="/sellers-1.webp"
          width={368}
          height={464}
          alt="top sellers"
        />
      </div>
      <div className={style.bottom}>
        <p>
          Crazy enough chocolate originates from a bean just like the coffee
          bean called Cacao. Cacao has been around for thousands of years and
          was first discovered by the Native American tribe called the Mayans.
        </p>
        <button type="button">Buy now</button>
      </div>
    </section>
  );
};

export default Sellers;
