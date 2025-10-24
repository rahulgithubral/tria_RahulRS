export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
    createdAt: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}
