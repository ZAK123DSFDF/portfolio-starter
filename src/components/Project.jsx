import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Multi Page App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project2,
      name: "Dental App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project3,
      name: "Crypto App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project4,
      name: "Admin Dashboard",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
  ];
  return <div>Project</div>;
};

export default Project;
