import {
  countUpItemsProps,
  NavLink,
  ProductProps,
  ServiceProps,
  ContactProps,
} from "@/Types";

import {
  BsFillBuildingsFill,
  BsBriefcaseFill,
  BsFillBoxFill,
  BsStarFill,
  BsFillClipboard2DataFill,
  BsFillCloudSunFill,
  BsFillChatRightHeartFill,
  BsFillFlagFill,
  BsFillHouseFill,
  BsFillPhoneFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const navLinks: NavLink[] = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Sobre Nosotros",
    path: "/about",
  },
  {
    label: "Productos",
    path: "/products",
  },
  {
    label: "Servicios",
    path: "/service",
  },
  {
    label: "Contacto",
    path: "/contact",
  },
];

const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 10,
    text: "Años de experiencia",
  },
  {
    id: 2,
    number: 157,
    text: "Clientes satisfechos",
  },
  {
    id: 3,
    number: 1050,
    text: "Artículos disponibles",
  },
  {
    id: 4,
    number: 112,
    text: "Servicios prestados",
  },
];

const products: ProductProps[] = [
  {
    id: 1,
    name: "Vaso Plastico",
    image: "/product1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    detail: ["+ Ver Mas", "Contacto"],
  },
  {
    id: 2,
    name: "Caja Cubo",
    image: "/product2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    detail: ["+ Ver Mas", "Contacto"],
  },
  {
    id: 3,
    name: "Caja Papas",
    image: "/product3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    detail: ["+ Ver Mas", "Contacto"],
  },
  {
    id: 4,
    name: "Caja Pizza",
    image: "/product4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    detail: ["+ Ver Mas", "Contacto"],
  },
  {
    id: 5,
    name: "Caja Triangular",
    image: "/product5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    detail: ["+ Ver Mas", "Contacto"],
  },
];

const services: ServiceProps[] = [
  {
    id: 1,
    title: "Empresa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillBuildingsFill />,
  },
  {
    id: 2,
    title: "Transparencia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsBriefcaseFill />,
  },
  {
    id: 3,
    title: "Compromiso",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillClipboard2DataFill />,
  },
  {
    id: 4,
    title: "Mision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillFlagFill />,
  },
  {
    id: 5,
    title: "Calidad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsStarFill />,
  },
  {
    id: 6,
    title: "Ambiental",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillCloudSunFill />,
  },
  {
    id: 7,
    title: "Seguridad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillBoxFill />,
  },
  {
    id: 8,
    title: "Satisfacción",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillChatRightHeartFill />,
  },
];

const contacts: ContactProps[] = [
  {
    id: 1,
    title: "Address",
    description: "School Street, 1st Avenue, New York, USA",
    icon: <BsFillHouseFill />,
  },
  {
    id: 2,
    title: "Phone",
    description: "+1 5589 55488 55",
    icon: <BsFillPhoneFill />,
  },
  {
    id: 3,
    title: "Email",
    description: "Jxw2n@example.com",
    icon: <BsFillEnvelopeFill />,
  },
];

export { navLinks, countUpItems, products, services, contacts };
