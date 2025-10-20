import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Icons FontAwesome

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/ghofrane-messaoud-587498337/",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={30} />,
      link: "https://github.com/ghoffraanee/",
    },
    {
      name: "ghofranemessaoud05@gmail.com",
      icon: <FaEnvelope size={30} />
    },
  ];

  return (
    <div className="w-full mt-12 flex flex-col xl:flex-row gap-10">

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col items-start'
      >
        <p className={styles.sectionSubText}>Savoir plus</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 flex flex-col gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:text-primary transition-colors"
            >
              {contact.icon}
              <span className="text-lg font-medium">{contact.name}</span>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* Optionnel : Tu peux garder EarthCanvas ou le remplacer par une image */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
