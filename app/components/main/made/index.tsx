import React from "react";
import style from "../main.module.scss";

const Made = () => {
  return (
    <section className={style.made}>
      <h2>
        hOW IT’S <span>made?</span>
      </h2>
      <div className={style.wrapper}>
        <p>фотка</p>
        <div className={style.text}>
          <h3>
            Try our chocolates today and discover the perfect balance of flavor
          </h3>
          <ul>
            <li>
              Heat the milk in a saucepan without bringing it to a boil. Add
              sugar and cocoa powder.
            </li>
            <li>
              At the same time, prepare a water bath. Melt the butter on it.
            </li>
            <li>
              "Mix" the milk mixture and already liquid butter. Mix thoroughly
              with a silicone spatula so that the mass becomes uniform and
              silky.
            </li>
            <li>Heat the mixture over low heat, letting it barely boil.</li>
            <li>
              Pour the chocolate into special containers (can be replaced with
              ice molds). Allow to cool and harden.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Made;
