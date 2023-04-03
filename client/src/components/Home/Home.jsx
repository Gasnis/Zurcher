import React from "react";
import style from "./home.module.css";
import ScrollUpButtom from "../ScrollUpButton/ScrollUpButton.jsx";
import logo from "../../img/logo-removed.png";
import homeMaintence from "../../img/home.jpg";
import homeRepair from "../../img/home-repair.jpg";
import furnitureAssembly from "../../img/furniture-assembly.jpg"
import {IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook, IoMailOutline} from "react-icons/io5"


export default function Home() {
  let works = [
    {
      name: "Home Maintenance",
      description:
        "Home maintenance refers to the regular upkeep and repair of a home to keep it in good condition and functioning efficiently. It includes tasks like cleaning gutters, replacing air filters, inspecting plumbing.",
      image: homeMaintence
    },

    {
      name: "Home Repairs",
      description:
        "Home repairs fix or restore a damaged or malfunctioning home. They include tasks such as fixing leaks, patching roofs, and replacing broken windows or doors. Regular maintenance helps prevent major repairs, but unforeseen issues require prompt attention to avoid more damage or safety risks.",
      image: homeRepair
    },

    {
      name: "Furniture Assembly",
      description: "",
      image: furnitureAssembly
    },
    {
      name: "TV Mounting",
      description: "",
      image: "https://www.tvaudiomounting.com/uploads/1/0/1/7/101710986/tv-mounting-gilbert-az_orig.jpg"
    },
    {
      name: "Picture Hanging",
      description: "",
      image: "https://hips.hearstapps.com/hmg-prod/images/woman-hanging-photographs-in-art-gallery-royalty-free-image-1619024190.?crop=0.668xw:1.00xh;0.332xw,0&resize=1200:*"
    },
    {
      name: "Doorbell Installation",
      description: "",
      image: "https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2017/03/iStock-1271510499-1.jpg"
    },
    {
      name: "Smart Home Installation",
      description: "",
      image: "https://www.techhive.com/wp-content/uploads/2022/01/gettyimages-583690618-100768089-orig.jpg?quality=50&strip=all"
    },
    {
      name: "Ceiling fan installation",
      description: "",
      image: "https://s42814.pcdn.co/wp-content/uploads/2020/08/P3YFB1-1-scaled.jpg.optimal.jpg"
    },
    {
      name: "Lighting installation",
      description: "",
      image: "https://www.martinrowan.co.uk/wp-content/uploads/2018/02/IMG_3021.jpg"
    },
    {
      name: "Deck repair",
      description: "",
      image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-decking-and-joists-hero.jpg"
    },
    {
      name: "Fence repair",
      description: "",
      image: "https://handymanconnection.com/alpharetta/wp-content/uploads/sites/7/2021/04/MV_0604_0510.jpg"
    },
    {
      name: "Drywall repair",
      description: "",
      image: "https://www.jalapenopaintwerx.com/wp-content/uploads/2017/12/drywall-repair.jpg"
    },
    {
      name: "Painting touch-ups",
      description: "",
      image: "https://www.familyhandyman.com/wp-content/uploads/2020/12/Screen-Shot-2021-03-01-at-3.05.18-PM-copy.png"
    },
    {
      name: "Carpentry",
      description: "",
      image: "https://cdn.shopify.com/s/files/1/2676/8414/articles/shutterstock_578729953_720x.jpg?v=1598017657"
    },
    {
      name: "Heavy lifting",
      description: "",
      image: "https://petrocohen.com/wp-content/uploads/2021/05/JAN-20-incorrect-lifting-injuries-GT.jpg"
    },
    {
      name: "Wallpapering service",
      description: "",
      image: "https://s42814.pcdn.co/wp-content/uploads/2019/12/howto_wallpaper_01_copy-1.jpg.optimal.jpg"
    },
    {
      name: "Pressure washing",
      description: "",
      image: "https://insights.workwave.com/wp-content/uploads/2021/01/brick-pressure-washing-picture-id1094145182.jpg"
    },
    {
      name: "Plumbing",
      description: "",
      image: "https://gsmplumbing.com.au/wp-content/uploads/bb-plugin/cache/Depositphotos_207274982_l-2015-1024x682-landscape.jpg"
    },

  ];

  return (
    <div className={style.principalDiv}>
      <div className={style.navbar}>
        <div className={style.navname}>
          <p>Zurcher Handyman</p>
        </div>

        <div>
          <img
            classname={style.logo}
            src={logo}
            alt=""
            height="130px"
            width="130px"
          />
        </div>

        <div className={style.navcontact}>
          <p>Contact</p>
        </div>
      </div>

      <img
        className={style.banner}
        src="https://www.prevost.es/sites/default/files/styles/style_entete/public/2022-08/banner-batiment-V2.jpg?itok=gYTye8Fe"
        alt=""
        width="100%"
        height="400px"
      />

      <div className={style.namecontainer}>
        <p className={style.name}>Zurcher Handyman</p>
      </div>

      {works.map((work) => (
        <div className={style.container}>
          <div className={style.card}>
            <div>
              <img className={style.imageCard} src={work.image} alt="" />
            </div>
            
            <div>
              <h2>{work.name}</h2>
              <p>{work.description}</p>
              <button className={style.btn}>BOOK</button>
            </div>
          </div>
        </div>
      ))}

      <div className={style.description}>
        <h2>ABOUT US</h2>
        <p>
          Welcome to our home repair company located in sunny Florida! We
          specialize in providing top-quality repair services to homeowners
          throughout the state. Our skilled technicians are highly trained and
          experienced in all aspects of home repair, including plumbing,
          electrical work, HVAC, and more. Whether you need a leaky faucet
          fixed, a new air conditioning unit installed, or any other type of
          home repair, we are here to help. We understand that your home is your
          sanctuary, which is why we always strive to provide the best possible
          service to our customers. We use only the highest quality materials
          and equipment to ensure that your repairs are done right the first
          time, and we always stand behind our work with a satisfaction
          guarantee. So whether you're dealing with a minor repair issue or a
          major home renovation project, our team is here to help. Contact us
          today to schedule an appointment with one of our friendly and
          knowledgeable technicians!{" "}
        </p>
      </div>

      <div className={style.footer}>
        <p><IoLogoInstagram/>  Instagram</p>
        <p><IoLogoFacebook/>  Facebook</p>
        <p><IoMailOutline/>  Email:  zurcherhandyman@gmail.com</p>
        <p><IoLogoWhatsapp/>    Number: 657635091</p>
      </div>

      <ScrollUpButtom />
    </div>
  );
}
