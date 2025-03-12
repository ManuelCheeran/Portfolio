import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiAngular, SiBootstrap, SiTailwindcss, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: "Advanced", icon: <FaHtml5 color="#E34F26" /> }, // HTML5 orange
  { name: "CSS3", level: "Advanced", icon: <FaCss3Alt color="#1572B6" /> }, // CSS3 blue
  { name: "Python", level: "Intermediate", icon: <SiPython color="#3776AB" /> }, // Python blue
  { name: "JavaScript", level: "Intermediate", icon: <FaJs color="#F7DF1E" /> }, // JS yellow
  { name: "React.js", level: "Intermediate", icon: <FaReact color="#61DAFB" /> }, // React cyan
  { name: "Angular", level: "Intermediate", icon: <SiAngular color="#DD0031" /> }, // Angular red
  { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss color="#06B6D4" /> }, // Tailwind teal
  { name: "Bootstrap", level: "Intermediate", icon: <SiBootstrap color="#7952B3" /> }, // Bootstrap purple
  { name: "Node.js", level: "Intermediate", icon: <FaNodeJs color="#339933" /> }, // Node.js green
  { name: "Express.js", level: "Intermediate", icon: <SiExpress color="#000000" /> }, // Express black
  { name: "MongoDB", level: "Intermediate", icon: <SiMongodb color="#47A248" /> } // MongoDB green
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 id="Skills">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
