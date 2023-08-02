import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
const Skills = () => {
  const skills = [
    { icon: <FaCss3 />, level: "Advance" },
    { icon: <FaHtml5 />, level: "Expert" },
    { icon: <FaNodeJs />, level: "Intermidate" },
    { icon: <FaReact />, level: "Beginner" },
  ];
  return <div>Skills</div>;
};

export default Skills;
