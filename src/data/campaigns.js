import educationImg from '../assets/education.png';
import zakatImg from '../assets/heroimg.png';
import washImg from '../assets/wash.png';
import healthImg from '../assets/health.png';
import humanitarianImg from '../assets/humanitarian.png';

export const campaigns = [
  {
    {
  id: "education",
  label: "Education",
  category: "EDUCATION",

  heroHeadingPrefix: "BUILDING STRONGER\nCOMMUNITIES THROUGH\n",

  heroHighlight: "EDUCATION",

  heroHeadingSuffix: "",

  heroDescription:
    "Efe-Oghene Development Foundation empowers underserved communities by improving access to quality education, empowering young people, and creating opportunities for lifelong learning.",

  image: educationImg,

  donationTitle: "Education",

  donationDescription:
    "Help provide quality education and learning opportunities for underserved children and youth.",

  formCause: "Education",

  badges: ["Education", "Youth Empowerment", "Community Development"]
  },
  {
    id: "zakat",
    label: "Zakat",
    category: "ZAKAT APPEAL",
    heroHeadingPrefix: "YOUR ZAKAT\nCAN RESTORE\n",
    heroHighlight: "HOPE",
    heroHeadingSuffix: " & DIGNITY",
    heroDescription: "Fulfill your Zakat obligation and help provide sustainable support, healthcare, education, and essential assistance to deserving families.",
    image: zakatImg,
    donationTitle: "Zakat",
    donationDescription: "Empowering deserving families through your Zakat.",
    formCause: "Zakat",
    badges: ["Zakat Eligible", "Shariah Compliant", "Secure Donation"]
  },
  {
    {
  id: "wash",
  label: "WASH",
  category: "WATER, SANITATION & HYGIENE",

  heroHeadingPrefix: "SAFE WATER\nCREATES\n",

  heroHighlight: "HEALTHY",

  heroHeadingSuffix: " COMMUNITIES",

  heroDescription:
    "EDF works with communities to improve access to clean water, sanitation facilities, hygiene education, and sustainable WASH infrastructure.",

  image: washImg,

  donationTitle: "WASH",

  donationDescription:
    "Support clean water, sanitation, and hygiene programmes across Nigeria.",

  formCause: "WASH",

  badges: ["Clean Water", "Sanitation", "Healthy Communities"]
},
{
  id: "health",
  label: "Healthcare",
  category: "PRIMARY HEALTHCARE",

  heroHeadingPrefix: "EXPANDING ACCESS TO\n",

  heroHighlight: "QUALITY",

  heroHeadingSuffix: " HEALTHCARE",

  heroDescription:
    "EDF strengthens community health through medical outreach, health education, disease prevention, maternal and child health, and mobile healthcare services.",

  image: healthImg,

  donationTitle: "Healthcare",

  donationDescription:
    "Improve healthcare access for vulnerable communities.",

  formCause: "Healthcare",

  badges: ["Healthcare", "Medical Outreach", "Well-being"]
},
{
  id: "humanitarian",
  label: "Humanitarian Response",
  category: "HUMANITARIAN RESPONSE",

  heroHeadingPrefix: "RESTORING\n",

  heroHighlight: "HOPE",

  heroHeadingSuffix: " DURING CRISIS",

  heroDescription:
    "EDF provides emergency assistance, protection, and recovery support to vulnerable populations affected by disasters, displacement, and humanitarian emergencies.",

  image: humanitarianImg,

  donationTitle: "Humanitarian Response",

  donationDescription:
    "Deliver lifesaving assistance where it is needed most.",

  formCause: "Humanitarian Response",

  badges: ["Emergency Relief", "Protection", "Recovery"]
},
  {
    id: "emergency-relief",
    label: "Emergency Relief",
    category: "EMERGENCY RESPONSE",
    heroHeadingPrefix: "WHEN CRISIS STRIKES\nWE RESPOND\nWITH ",
    heroHighlight: "HUMANITY",
    heroHeadingSuffix: "",
    heroDescription: "Support rapid humanitarian response for families affected by disasters, displacement, and unexpected emergencies.",
    image: emergencyImg,
    donationTitle: "Emergency Relief",
    donationDescription: "Responding quickly to save lives and support families in times of crisis.",
    formCause: "Emergency Relief",
    badges: ["Rapid Response", "Emergency Support", "Secure Donation"]
  }
];
