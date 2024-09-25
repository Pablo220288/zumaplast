type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

type NavLink = {
  label: string;
  path: string;
};

type CountUpProps = {
  start: number;
  end: number;
  duration: number;
};

type countUpItemsProps = {
  id: number;
  number: number;
  text: string;
};

type ProductProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  detail: string[];
};

type CardProductProps = {
  children: React.ReactNode;
}

type ServiceProps = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ContactProps = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export {
  WrapperProps,
  NavLink,
  CountUpProps,
  countUpItemsProps,
  ProductProps,
  CardProductProps,
  ServiceProps,
  ContactProps,
};
