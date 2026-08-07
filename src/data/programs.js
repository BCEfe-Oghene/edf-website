import educationImg from "../assets/education.png";
import washImg from "../assets/wash.png";
import healthImg from "../assets/healthcare.png";
import humanitarianImg from "../assets/humanitarian_response.png";
import livelihoodsImg from "../assets/livelihoods.png";
import researchImg from "../assets/research.png";
export const programs = [
  {
    label: 'Education',
    href: '/programmes/education',
    image: educationImg,
    description: 'Expanding access to quality education through scholarships, digital learning, literacy programmes, school improvement initiatives, and youth empowerment.'
  },

  {
    label: 'WASH',
    href: '/programmes/wash',
    image: washImg,
    description: 'Providing clean water, sanitation facilities, hygiene promotion, and sustainable WASH infrastructure.'
  },

  {
    label: 'Healthcare',
    href: '/programmes/healthcare',
    image: healthImg,
  description: 'Strengthening primary healthcare through medical outreach, disease prevention, maternal and child health, health education, and community-based healthcare services.'
  },

  {
    label: 'Humanitarian Response',
    href: '/programmes/humanitarian-response',
    image: humanitarianImg,
    description: 'Providing timely emergency relief, disaster response, food assistance, shelter support, protection services, and long-term recovery for vulnerable communities.'
  },

   {
  label: 'Community Empowerment',
  href: '/programmes/community-empowerment',
  image: livelihoodsImg,
  description: 'Empowering individuals and communities through skills development, entrepreneurship, vocational training, leadership, social inclusion, and sustainable economic opportunities.'
},

  {
    label: 'Research & Innovation',
    href: '/programmes/research-innovation',
    image: researchImg,
    description: 'Driving evidence-based research, policy advocacy, innovation, climate resilience, and sustainable development solutions that create lasting community impact.'
  }
];