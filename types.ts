export type RoleType = 'customer' | 'rider' | 'vendor' | null;

export interface CustomerFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  services: string[];
}

export interface RiderFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  vehicleType: string;
  availability: string;
}

export interface VendorFormData {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  city: string;
  category: string;
}

export const SERVICES_LIST = [
  "Errands & Shopping",
  "Package Delivery",
  "Food Delivery",
  "Tech Purchases",
  "Bulk Logistics"
];

export const VEHICLE_TYPES = [
  "Bicycle",
  "Motorbike",
  "Car / Sedan",
  "Van / Mini-Bus",
  "Truck"
];

export const VENDOR_CATEGORIES = [
  "Restaurant / Food",
  "Retail Store",
  "Pharmacy",
  "Supermarket",
  "Electronics / Tech",
  "Other"
];

export const ABEOKUTA_LOCATIONS = [
  "Adatan",
  "Asero",
  "Camp / Osiele",
  "Elega",
  "Ibara / GRA",
  "Idi Aba",
  "Kuto",
  "Lafenwa",
  "Obantoko",
  "Oke-Ilewo",
  "Oke-Mosan",
  "Olomore",
  "Onikolobo",
  "Panseke",
  "Sapon",
  "Other"
];