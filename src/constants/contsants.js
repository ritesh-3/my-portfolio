import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import commerce from '../assets/commerce.png'
import web from '../assets/web.png'
import research from '../assets/research.png'
import mobile from '../assets/mobile.png'

import admiinify from '../assets/adminify.jpg'
import jsmMedia from '../assets/jsmMedia.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'

export const selfDescription = "I am a full stack developer with a passion for creating innovative web applications. My portfolio showcases my expertise in front-end and back-end development, delivering seamless user experiences and robust functionality.";
// export const selfDescription = "I am a Developer"
export const servicesDescription = "I offer comprehensive full stack development services, delivering efficient and innovative web applications tailored to meet clients' needs. From front-end design to back-end implementation, I provide end-to-end solutions that ensure seamless user experiences and robust functionality."
export const portfolioDescription = "Here is some of my recent projects which i have worked on."
export const contactsDescriptiom = "These are the ways you can get in touch with me, Hopeto hear from you soon"
export const getFormIOUrl = "https://getform.io/f/00eaae2d-944f-4240-b23e-70896d7d76f9"

export const MySocials = [
    {
        id: 1,
        link: "",
        icon: <FaLinkedin />
    },
    {
        id: 2,
        link: "https://github.com/ritesh-2",
        icon: <FaGithub />
    },
    {
        id: 3,
        link: "",
        icon: <FaInstagram />
    },
]

export const MyServices = [
    {
        id: 1,
        image: commerce,
        title: 'ECommerce Webiste'
    },
    {
        id: 2,
        image: web,
        title: 'Web Development'
    },
    {
        id: 2,
        image: mobile,
        title: 'Mobile Development'
    },
    {
        id: 2,
        image: research,
        title: 'Research Development'
    }
]

export const PortfolioProjects = [
    {
        id: 1,
        image: admiinify,
        title: 'Admin Dashboard',
        github: 'https://github.com/ritesh-3/adminiify',
        demo: 'https://admiinify.web.app'
    },
    {
        id: 2,
        image: jsmMedia,
        title: 'Youtube Clone',
        github: 'https://github.com/ritesh-3/jsm-media',
        demo: 'https://jsm-media.web.app/'
    },
    {
        id: 3,
        image: p3,
        title: 'Best App',
        github: '',
        demo: ''
    },
    {
        id: 4,
        image: p4,
        title: 'Next gen',
        github: '',
        demo: ''
    },
]