export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}
