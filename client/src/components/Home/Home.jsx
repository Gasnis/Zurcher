import React from "react";
import style from "./home.module.css";
import ScrollUpButtom from "../ScrollUpButton/ScrollUpButton.jsx";
import logo from "../../img/logo-removed.png";
import homeMaintence from "../../img/home.jpg";
import homeRepair from "../../img/home-repair.jpg"

export default function Home() {
  let works = [
    {
      name: "Home Maintenance",
      description:
        "Home maintenance refers to the regular upkeep and repair of a home to keep it in good condition and functioning efficiently. It includes tasks like cleaning gutters, replacing air filters, inspecting plumbing and electrical systems, and servicing HVAC equipment.",
      image: homeMaintence,
    },

    {
      name:"Home Repairs",
      description:"Home repairs fix or restore a damaged or malfunctioning home. They include tasks such as fixing leaks, repairing electrical systems, patching roofs, and replacing broken windows or doors. Regular maintenance helps prevent major repairs, but unforeseen issues require prompt attention to avoid more damage or safety risks.",
      image: homeRepair
    }
  ];

  return (
    <div className={style.principalDiv}>
      <div className={style.navbar}>
        <img
          classname={style.logo}
          src={logo}
          alt=""
          height="110px"
          width="110px"
        />
        <p>Zurcher Handyman</p>
        <p>Contact</p>
      </div>

      <img className={style.banner}
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
            <img className={style.imageCard} src={work.image} alt="" />
            <div>
              <h2>{work.name}</h2>
              <p>{work.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div>
        <h2>ABOUT US</h2>
        <p className={style.description}>
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
        <p>instagram</p>
        <p>facebook</p>
        <p>email</p>
        <p>number</p>
      </div>

      

      <ScrollUpButtom />
    </div>
  );
}
