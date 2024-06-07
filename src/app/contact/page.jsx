import Image from "next/image";
import styes from "./contact.module.css";
const Contactpage = () => {
  return (
    <div className={styes.container}>
      <div className={styes.imageContainer}>
        <Image src="/contact.png" alt="contact" fill  className={styes.image}/>
      </div>

      <div className={styes.formContainer}>
        <form action="" className={styes.form}>
          <input type="text" placeholder="Name and SurName" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
