export interface Config {
  businessName: string;
  location: string;
  year: number;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  services: string[];
  description: string;
  tag?: string;
}

export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: "Haircuts" | "Beard & Shave" | "Beauty & Styling";
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
