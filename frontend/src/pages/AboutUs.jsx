import React, { useEffect, useState } from "react";
import AOS from "aos";

// CSS
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/AboutUs.css";

// Utils
import { avatars } from "../utils/avatar";

// Material UI Components
import { IconButton } from "@mui/material";

// Material UI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Images
import HarshImg from "../images/members/Harsh.jpg"
import BhavyaImg from "../images/members/Bhavya.jpeg"
import VaishvikImg from "../images/members/vaishvik.jpeg"


const teamMembers = [
  {
    name: "Harshvardhan Vajani",
    photo: HarshImg,
    linkedin: "https://www.linkedin.com/in/harshvardhan-vajani-318401248/",
  },
  {
    name: "Bhavya Patel",
    photo: BhavyaImg,
    linkedin: "https://www.linkedin.com/in/bhavya-patel-a37562260/",
  },
  {
    name: "Vaishvik Patel",
    photo: VaishvikImg,
    linkedin: "https://www.linkedin.com/in/vaishvik-patel-11bb89239/",
  }
];


function AboutUS() {
  const [shuffledMembers, setShuffledMembers] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    // Shuffle the team members
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledMembers(shuffleArray(teamMembers));
  }, []);

  return (
   <div></div>
  );
}

export default AboutUS;
