import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Us</h2>
        <h1 className={styles.title}>
          We create a digital ideas that are unique , better and more creative.
        </h1>
        <p className={styles.desc}>
          we believe in the transformative power of technology. Established with
          a vision to create meaningful and impactful software solutions, we
          have been at the forefront of innovation, empowering businesses to
          thrive in the digital age
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>15k+</h1>
            <p>year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>20k+</h1>
            <p>year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill className={styles.heroImg} />
        {/* <Image  alt='about'
          width={500} // set width and height as required
          height={300} 
          src='https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg' /> */}
      </div>
    </div>
  );
};

export default AboutPage;
