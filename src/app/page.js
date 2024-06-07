import Image from "next/image";
import style from "./home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Creative Design & Development</h1>
        <p className={style.description}>
          Committed to the Future, Meet the 'SDB' who are changing the world
          with technology, culture and values
        </p>
        <div className={style.buttons}>
          <button className={style.button}>Learn More</button>
          <button className={style.button}>Contact</button>
        </div>
        <div className={style.brands}>
           <Image src='/brands.png' alt='brands' fill className={style.brand}/>
        </div>
      </div>
      <div className={style.imageContainer}>
        <Image src='/hero.gif' alt='home' fill  className={style.heroImg}/>
      </div>
    </div>
  );
};
export default Home;
