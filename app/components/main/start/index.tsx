import React from "react";
import style from "../main.module.scss";
import Image from "next/image";

const Start: React.FC = () => {
  return (
    <section className={style.start}>
      <div className={style.text}>
        <h1>
          Treat yourself or a loved one to our finest ingredients for a moment
          of pure delight!
        </h1>
        <div className={style.bottom}>
          <div className={style.button}>
            <button className={style.now} type="button">
              Buy now
            </button>
            <button className={style.made} type="button">
              How it’s made
            </button>
          </div>
          <span className={style.scroll}>
            scroll down
            <Image src="./down.svg" width={38} height={38} alt="down" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Start;
