export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    url: string;
    title: string;
    type: string;
    description: string;
    image: string;
  }
}