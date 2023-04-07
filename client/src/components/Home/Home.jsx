import React, { useRef } from "react";
import style from "./home.module.css";
import ScrollUpButtom from "../ScrollUpButton/ScrollUpButton.jsx";
import logo from "../../img/logo-removed.png";
import homeMaintence from "../../img/home.jpg";
import homeRepair from "../../img/home-repair.jpg";
import furnitureAssembly from "../../img/furniture-assembly.jpg";
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import emailjs from "@emailjs/browser";
import sweetalert from "sweetalert";

export default function Home() {
  let works = [
    {
      name: "Home Maintenance",
      description:
        "Home maintenance refers to the regular upkeep and repair of a home to keep it in good condition and functioning efficiently. It includes tasks like cleaning gutters, replacing air filters, inspecting plumbing.",
      image: homeMaintence,
    },

    {
      name: "Home Repairs",
      description:
        "Home repairs fix or restore a damaged or malfunctioning home. They include tasks such as fixing leaks, patching roofs,  broken windows or doors. Regular maintenance helps prevent major repairs, but unforeseen issues require prompt attention to avoid more damage or safety risks.",
      image: homeRepair,
    },

    {
      name: "Furniture Assembly",
      description:
        "Assembly of furniture in your home or workplace. Save time and avoid assembly errors.",
      image: furnitureAssembly,
    },
    {
      name: "TV Mounting",
      description:
        "TV Mounting: Professional installation of TV mounts. Get optimal viewing angles and save space in your room.",
      image:
        "https://www.tvaudiomounting.com/uploads/1/0/1/7/101710986/tv-mounting-gilbert-az_orig.jpg",
    },
    {
      name: "Picture Hanging",
      description:
        "We hang pictures and artwork making sure they are level and secure.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/woman-hanging-photographs-in-art-gallery-royalty-free-image-1619024190.?crop=0.668xw:1.00xh;0.332xw,0&resize=1200:*",
    },
    {
      name: "Doorbell Installation",
      description:
        "Professional installation of doorbells. Never miss a visitor or delivery again.",
      image:
        "https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2017/03/iStock-1271510499-1.jpg",
    },
    {
      name: "Smart Home Installation",
      description:
        "Installation and setup of smart home devices such as smart thermostats, security cameras, and voice assistants.",
      image:
        "https://www.techhive.com/wp-content/uploads/2022/01/gettyimages-583690618-100768089-orig.jpg?quality=50&strip=all",
    },
    {
      name: "Ceiling fan installation",
      description:
        "Professional installation of ceiling fans. Keep your home cool and comfortable.",
      image:
        "https://s42814.pcdn.co/wp-content/uploads/2020/08/P3YFB1-1-scaled.jpg.optimal.jpg",
    },
    {
      name: "Lighting installation",
      description:
        "Professional installation of lighting fixtures. Improve the ambiance and functionality of your living spaces.",
      image:
        "https://www.martinrowan.co.uk/wp-content/uploads/2018/02/IMG_3021.jpg",
    },
    {
      name: "Deck repair",
      description:
        "Repair and restoration of damaged decks. Ensure safety and prolong the life of your deck.",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-decking-and-joists-hero.jpg",
    },
    {
      name: "Fence repair",
      description:
        "Repair and restoration of damaged fences. Enhance the privacy and security of your property.",
      image:
        "https://handymanconnection.com/alpharetta/wp-content/uploads/sites/7/2021/04/MV_0604_0510.jpg",
    },
    {
      name: "Drywall repair",
      description:
        "Repair and patching of damaged drywall. Achieve a seamless and polished look in your walls.",
      image:
        "https://www.jalapenopaintwerx.com/wp-content/uploads/2017/12/drywall-repair.jpg",
    },
    {
      name: "Painting touch-ups",
      description:
        "Professional touch-ups to your painted walls and surfaces. Keep your home looking fresh and well-maintained.",
      image:
        "https://www.familyhandyman.com/wp-content/uploads/2020/12/Screen-Shot-2021-03-01-at-3.05.18-PM-copy.png",
    },
    {
      name: "Carpentry",
      description: "Repair and maintenance for all your wooden furniture",
      image:
        "https://cdn.shopify.com/s/files/1/2676/8414/articles/shutterstock_578729953_720x.jpg?v=1598017657",
    },
    {
      name: "Heavy lifting",
      description:
        "Professional heavy lifting services for moving or rearranging large and bulky items.",
      image:
        "https://petrocohen.com/wp-content/uploads/2021/05/JAN-20-incorrect-lifting-injuries-GT.jpg",
    },
    {
      name: "Wallpapering service",
      description:
        "Installation of wallpaper in your home or workplace. Transform your walls with stylish and personalized designs.",
      image:
        "https://s42814.pcdn.co/wp-content/uploads/2019/12/howto_wallpaper_01_copy-1.jpg.optimal.jpg",
    },
    {
      name: "Pressure washing",
      description:
        "High-pressure cleaning of outdoor surfaces such as decks, patios, and driveways. Remove dirt, grime, and stains for a refreshed look.",
      image:
        "https://insights.workwave.com/wp-content/uploads/2021/01/brick-pressure-washing-picture-id1094145182.jpg",
    },
    {
      name: "Plumbing",
      description:
        "Professional plumbing services for repairs and maintenance. Keep your pipes and fixtures in good condition and avoid costly water damage.",
      image:
        "https://gsmplumbing.com.au/wp-content/uploads/bb-plugin/cache/Depositphotos_207274982_l-2015-1024x682-landscape.jpg",
    },
  ];

  // const mailBook = () => {
  //   window.location.href = "mailto: zurcher.handyman@gmail.com"
  // };

  const form = useRef();

  const toContact = (e) => {
    form.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4rec7wc",
        "template_cv8ph4b",
        form.current,
        "W4nWKKi0VsLAZ18MC"
      )
      .then(
        (result) => {
          sweetalert(
            `Hi ${form.current.user_name.value} the email has been sent successfully. You will receive a response within 24 hours. Thank you very much.`
          );
        },
        (error) => {
          alert("Sorry something goes wrong, try later");
        }
      );
  };

  return (
    <div className={style.principalDiv}>
      <img
        className={style.banner}
        src="https://www.prevost.es/sites/default/files/styles/style_entete/public/2022-08/banner-batiment-V2.jpg?itok=gYTye8Fe"
        alt=""
      />

      <div className={style.namecontainer}>
        <p className={style.name}>Zurcher Handyman</p>
      </div>

      <div className={style.logoContainer}>
        <img
          classname={style.logo}
          src={logo}
          alt=""
        />
      </div>

      <div>
        <button className={style.contactContainer} onClick={toContact}>
          Contact
        </button>
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
              <button
                className={style.btn}
                onClick={toContact}
                value={work.name}
              >
                BOOK
              </button>
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
          painting and more. Whether you need a leaky faucet fixed, keep your
          fences, hang a tv, or any other type of home repair, we are here to
          help. We understand that your home is your sanctuary, which is why we
          always strive to provide the best possible service to our customers.
          We use only the highest quality materials and equipment to ensure that
          your repairs are done right the first time, and we always stand behind
          our work with a satisfaction guarantee. So whether you're dealing with
          a minor repair issue or a major home renovation project, our team is
          here to help. Contact us today to schedule an appointment with one of
          our friendly and knowledgeable technicians!
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className={style.contactForm}>
        Contact us
        <div className={style.inputContainer}>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="Name"
              name="user_name"
            />
          </div>

          <div>
            <input
              className={style.input}
              type="email"
              placeholder="Email"
              name="user_email"
            />
          </div>

          <div>
            <input
              className={style.input}
              type="tel"
              placeholder="Phone"
              name="user_phone"
            />
          </div>
          <div>
            <select name="user_service" id="" className={style.select}>
              <option value="Services" hidden>
                Services
              </option>
              {works.map((work) => (
                <option value={work.name}>{work.name}</option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              className={style.textarea}
              type="text"
              placeholder="Your messagge"
              name="message"
            />
          </div>

          <div className={style.submitContainer}>
            <button>
              <span className={style.box}>Submit</span>
            </button>
          </div>
        </div>
      </form>

      <div className={style.footer}>
        

        <div>
          <div>
            <IoLogoInstagram />
            <a
              href="https://www.instagram.com/zurcher.handyman/"
              target={"new"}
            >
              Instagram: zurcher.handyman
            </a>
          </div>
          <div>
            <IoMailOutline />
            <a
              href="mailto:zurcher.handyman@gmail.com?Subject=
Interested%20in your%20service,%20when%20do%20you%20have%20availability?"
            >
              Email: zurcher.handyman@gmail.com
            </a>
          </div>

          <div>
            <IoLogoWhatsapp />
            <a href="https://wa.me/14074194495">Number: (407) 419-4495</a>
          </div>
          <div>
            <IoLocationOutline />
            <a href=" ">Orlando, Florida</a>
          </div>
        </div>

        <div>
          <p>
            Copyright © Zurcher Handyman, All rights reserved. All locations are
            locally owned and independently operated franchises. Fully Insured -
            General Liability and Workers' Compensation. Some services are
            subject to state and local licensing and may not be available at all
            locations.
          </p>
        </div>

      </div>

      <ScrollUpButtom />
    </div>
  );
}
