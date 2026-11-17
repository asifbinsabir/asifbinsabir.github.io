import style from "./Hero.module.css";
import getImageUrl from "../../../utils";
import Button from "../../common/Button/Button";

export default function Hero() {
  return (
    <section className={style.heroSection} id="home">
      <div className={style.mainContainer}>
        <div className={style.leftContent}>
          <div className={style.titleContainer}>
            <p className={style.greeting}>HELLO, I'M</p>
            <h1 className={style.nameTitle}>Md&nbsp;Asif</h1>
            <p className={style.profession}>Frontend Developer</p>
            <p className={style.description}>
              I build responsive, accessible, and user-friendly web experiences using
              modern frontend technologies. I specialize in HTML, CSS, JavaScript, and
              React, transforming ideas into clean, functional, and engaging websites.
            </p>
          </div>
          <div className={style.socialIcons}>
            <a
              href="https://www.linkedin.com/in/asif-developer/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/asifbinsabir"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.instagram.com/" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/" title="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          {/* <div className={style.downloadButton}>
            <a href={getImageUrl("Md_Asif_Resume.pdf")} download="Md-Asif-Resume.pdf">
              <Button label={"Resume"} className={style.resumeBtn}>
                <i className="fa-solid fa-download"></i>
              </Button>
            </a>
          </div> */}
        </div>
        <div className={style.rightContent}>
          <div className={style.imageContainer}>
            <img src={getImageUrl("heroImage.png")} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
