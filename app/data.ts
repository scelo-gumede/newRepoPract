import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import CloudIcon from '@mui/icons-material/Cloud';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';
import portImage from "@/app/assets/imagePort.jpg"



export const links =[
    {
        label:"Home",
        url:"/"
    },
    {
        label:"About",
        url:"/about"
    },
    {
        label:"Portfolio",
        url:"/portfolio"
    },
    {
        label:"Services",
        url:"/services"
    }
]


export const skills = [
    {
        title:"Software Development",
        text:"Our experienced team of software developers specializes in creating custom solutions tailored to meet your specific business needs. From web applications to mobile apps and enterprise software.",
        icon:WysiwygIcon
    },
    {
        title:"Cloud Computing",
        text:"Harness the power of cloud computing to transform your business operations. We offer cloud migration, infrastructure setup, and managed services to help you optimize performance, enhance security, and reduce costs.",
        icon:CloudIcon
    },
    {
        title:"Crypto Currency",
        text:"Protect your digital assets and sensitive data from evolving cyber threats. Our comprehensive cybersecurity services include vulnerability assessments, penetration testing, network security, data encryption, and employee training.",
        icon:CurrencyBitcoinIcon
    },
    {
        title:"Artificial Intelligence",
        text:"Unlock the potential of AI to gain valuable insights and drive intelligent automation. Our AI services encompass machine learning, natural language processing, computer vision, and predictive analytics.",
        icon:CurtainsClosedIcon
    }
]


export const portfolio =[
    {
        image:portImage,
        type:"technology",
        title:"Project Phoenix",
        text:"A strategic IT infrastructure overhaul project that revitalizes your legacy systems, modernizes your technology stack, and optimizes your network architecture to support your organization's growth and future scalability."
    },
    {
        image:portImage,
        type:"business",
        title:"Project Sentinel",
        text:"A robust cybersecurity initiative focused on safeguarding your organization's sensitive data and critical assets, employing advanced threat detection, encryption, and proactive security measures to mitigate risks and protect against cyber threats."
    }
]