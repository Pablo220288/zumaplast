import {
  countUpItemsProps,
  NavLink,
  ProductProps,
  ServiceProps,
} from "@/Types";

import {
  BsFillTaxiFrontFill,
  BsBriefcaseFill,
  BsTelephoneInboundFill,
  BsStarFill,
  BsAirplaneFill,
  BsFillCarFrontFill,
  BsFillPinMapFill,
  BsFillSendCheckFill,
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
    label: "Galeria",
    path: "/gallery",
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
    id: 1,
    name: "Caja Papas",
    image: "/product3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    detail: ["+ Ver Mas", "Contacto"],
  },
  {
    id: 1,
    name: "Caja Pizza",
    image: "/product4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    detail: ["+ Ver Mas", "Contacto"],
  },
  {
    id: 1,
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
    title: "Car Rental with Driver",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillTaxiFrontFill />,
  },
  {
    id: 2,
    title: "Business Car Rental",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsBriefcaseFill />,
  },
  {
    id: 3,
    title: "Airpot Transportation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsAirplaneFill />,
  },
  {
    id: 4,
    title: "Chauffeur Side Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillSendCheckFill />,
  },
  {
    id: 5,
    title: "VIP Luxory Transportation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsStarFill />,
  },
  {
    id: 6,
    title: "Private Transportation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillCarFrontFill />,
  },
  {
    id: 7,
    title: "Roadside Asistant Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillPinMapFill />,
  },
  {
    id: 8,
    title: "Event Transportation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsTelephoneInboundFill />,
  },
];

export { navLinks, countUpItems, products, services };
