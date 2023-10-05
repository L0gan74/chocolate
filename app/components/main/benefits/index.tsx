import React from "react";
import style from "../main.module.scss";
import Image from "next/image";

const Benefits: React.FC = () => {
  return (
    <section className={style.benefits}>
      <div className={style.wrapper}>
        <div className={style.item}>
          <Image
            src="./Unsurpassed.svg"
            width={62}
            height={62}
            alt="Unsurpassed taste"
          />
          <h3>Unsurpassed taste</h3>
          <p>
            Crafted with the finest quality cocoa beans and a dedication to
            perfection, each bite is a decadent experience that simply cannot be
            matched. Savor the richness and complexity of our Unsurpassed Taste
            and discover a new level of chocolate bliss.
          </p>
          <span/>
        </div>
        <div className={style.item}>
          <Image
            src="./Affordable.svg"
            width={62}
            height={62}
            alt="Affordable price"
          />
          <h3>Affordable price</h3>
          <p>
            Indulge in high-quality chocolate without breaking the bank with
            Simply Chocolate's selection of affordable treats. Enjoy
            mouth-watering truffles and velvety chocolate bars without
            sacrificing taste or quality. Browse our selection and indulge in
            affordable luxury today.
          </p>
          <span/>
        </div>
        <div className={style.item}>
          <Image src="./Own.svg" width={62} height={62} alt="Own production" />
          <h3>Own production</h3>
          <p>
            We take pride in our own production process, ensuring that every
            step is carefully crafted to perfection. From selecting the finest
            ingredients to handcrafting each piece, our attention to detail is
            evident in every bite.
          </p>
          <span/>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
