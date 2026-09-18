export interface MediaItem {
  id: string;
  title: string;
  genre: string;
  quality: string;
  year: number;
  duration: string;
  rating: string;
  description: string;
  synopsis: string;
  director: string;
  image: string;
  price?: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  time: string;
}

export interface MarketItem {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  commission: number;
  image: string;
}

export interface ArtItem {
  id: string;
  title: string;
  origin: string;
  image: string;
}

export interface LiteratureItem {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  image: string;
}

export interface WalletLedgerEntry {
  id: string;
  title: string;
  type: "credit" | "debit";
  amount: number;
  status: "completed" | "pending";
  timestamp: string;
}

export interface SMMOrder {
  id: string;
  service: string;
  quantity: number;
  total: number;
  status: "queued" | "processing" | "complete";
  createdAt: string;
}
