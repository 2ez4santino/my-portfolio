import React from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaNetworkWired, FaUserSecret,
} from 'react-icons/fa';
import {
  SiJavascript, SiHackthebox, SiAndroidstudio, SiArduino,
} from 'react-icons/si';
import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from 'react-icons/tb';
import './Skills.css';

const skills = [
  { icon: <FaHtml5 />,        label: 'HTML5',      color: '#e34f26' },
  { icon: <FaCss3Alt />,      label: 'CSS3',       color: '#1572b6' },
  { icon: <SiJavascript />,   label: 'JavaScript', color: '#f7df1e' },
  { icon: <FaReact />,        label: 'React',      color: '#61dafb' },
  { icon: <FaNodeJs />,       label: 'Node.js',    color: '#3c873a' },
  { icon: <FaPython />,       label: 'Python',     color: '#3776ab' },
  { icon: <FaGitAlt />,       label: 'Git',        color: '#f05032' },
  { icon: <SiAndroidstudio />, label: 'Android Studio', color: '#3ddc84' },
  { icon: <SiArduino />,      label: 'Arduino Uno', color: '#00979d' },
  { icon: <TbBrandAdobePhotoshop />, label: 'Adobe Photoshop', color: '#31a8ff' },
  { icon: <TbBrandAdobeIllustrator />, label: 'Adobe Illustrator', color: '#ff9a00' },
  { icon: <FaNetworkWired />, label: 'Cisco Networking', color: '#1ba0d7' },
  { icon: <FaUserSecret />,   label: 'TryHackMe',  color: '#d32f2f' },
  { icon: <SiHackthebox />,   label: 'Hack The Box', color: '#9fef00' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="section__header">
        <h2 className="section__title">My <span>Skills</span></h2>
        <div className="section__line" />
      </div>

      <p className="skills__intro">
        Technologies and tools I work with on a daily basis.
      </p>

      <div className="skills__grid">
        {skills.map(({ icon, label, color }) => (
          <div className="skills__card" key={label}>
            <div className="skills__icon" style={{ color }}>
              {icon}
            </div>
            <span className="skills__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
