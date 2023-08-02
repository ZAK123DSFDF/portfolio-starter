import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";
const Contact = () => {
  const contact_info = [
    { icon: <AiOutlineMail />, text: "yourname@gmail.com" },
    { icon: <AiOutlinePhone />, text: "1233455" },
    { icon: <AiFillEnvironment />, text: "yourlocation" },
  ];

  return <div>Contact</div>;
};

export default Contact;
