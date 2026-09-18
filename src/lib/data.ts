import type { ArtItem, LiteratureItem, MarketItem, MediaItem, NewsItem, SMMOrder, WalletLedgerEntry } from "@/lib/types";

export const movieCatalog: MediaItem[] = [
  {
    id: "midnight-signal",
    title: "Midnight Signal",
    genre: "Sci-Fi",
    quality: "4K UHD",
    year: 2025,
    duration: "2h 11m",
    rating: "8.9/10",
    description: "A cryptic signal from the edge of the solar system awakens a disillusioned crew.",
    synopsis: "The crew of a deep-space salvage vessel discover a data stream that predicts a catastrophe on Earth. As the timeline fractures, they must decide whether to save humanity or protect the truth hidden beneath the signal.",
    director: "Nia Sol",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    price: 9.99,
  },
  {
    id: "glass-echoes",
    title: "Glass Echoes",
    genre: "Drama",
    quality: "1080p",
    year: 2024,
    duration: "1h 53m",
    rating: "8.7/10",
    description: "A polished pianist rediscovers her voice in a city built on memory.",
    synopsis: "When a forgotten score resurfaces in a ruined conservatory, a celebrated pianist confronts the legacy of her mother and the choices that shaped her life.",
    director: "Rafael Voss",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    price: 6.99,
  },
  {
    id: "iron-reign",
    title: "Iron Reign",
    genre: "Action",
    quality: "2160p",
    year: 2023,
    duration: "2h 24m",
    rating: "9.1/10",
    description: "A mercenary becomes the final barrier between a city and a brutal coup.",
    synopsis: "In a future where private armies control the skyline, one ex-soldier must protect a wounded city and choose between revenge and redemption.",
    director: "Dorian Vale",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    price: 11.99,
  },
  {
    id: "mosaic-of-pine",
    title: "Mosaic of Pine",
    genre: "Indie",
    quality: "4K",
    year: 2025,
    duration: "1h 42m",
    rating: "8.8/10",
    description: "A drifting artist chases a vanished mountain village through fragmented archive footage.",
    synopsis: "A documentary filmmaker returns to a forgotten valley to find the stories that disappeared with its last residents.",
    director: "Lina Hara",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    price: 7.49,
  },
];

export const featureCards = [
  { id: "f1", title: "The Signals Archive", category: "Documentary", rating: "9.3", description: "Investigate the hidden messages beneath modern media narratives.", href: "/news", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80" },
  { id: "f2", title: "Vanta Nights", category: "Music", rating: "8.8", description: "Immersive electronic sessions with live visual overlays.", href: "/media", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80" },
  { id: "f3", title: "Apex Market", category: "Commerce", rating: "9.1", description: "Affiliate deals tuned for premium creators and global retail networks.", href: "/market", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" },
  { id: "f4", title: "The Atlas of Voices", category: "Literature", rating: "9.5", description: "Rare biographies, manuscripts, and long-form digital editions.", href: "/literature", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80" },
];

export const heroStatCards = [
  { label: "Streams live", value: "1.4M" },
  { label: "Wallet volume", value: "$18.3M" },
  { label: "Creator reach", value: "92.4K" },
];

export const feedItems = [
  { id: "feed-1", title: "Global football analytics reveals a shift in wing-back tempo.", category: "Football", time: "2m ago", image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80" },
  { id: "feed-2", title: "Independent publishers are dominating premium digital reading revenue.", category: "Literature", time: "17m ago", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80" },
  { id: "feed-3", title: "Why art collectors are leaning into immersive digital exhibitions.", category: "Art", time: "36m ago", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80" },
  { id: "feed-4", title: "Emerging creator brands are earning from bundled SMM and affiliate bundles.", category: "Marketing", time: "52m ago", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" },
];

export const marketCatalog: MarketItem[] = [
  {
    id: "market-1",
    title: "Aurora Studio Bundle",
    category: "Design",
    description: "A premium brand kit for creators building visual identity and conversion assets.",
    price: 149,
    commission: 18,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "market-2",
    title: "Signal Growth Kit",
    category: "SMM",
    description: "High-performing campaign templates optimized for digital product launches.",
    price: 239,
    commission: 24,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "market-3",
    title: "Nomad Audio Deck",
    category: "Audio",
    description: "A mobile-friendly bundle of podcasting, voice, and distribution tools.",
    price: 99,
    commission: 16,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
  },
];

export const newsCatalog: NewsItem[] = [
  { id: "news-1", title: "The new pulse of media ownership is platform-neutral and creator-led.", category: "Analysis", excerpt: "Independent content ecosystems are accelerating while legacy distribution slows.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80", time: "7 min" },
  { id: "news-2", title: "Football data networks are rewriting live fan engagement.", category: "Football", excerpt: "Real-time overlays are becoming the benchmark for premium sports consumption.", image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80", time: "21 min" },
  { id: "news-3", title: "Publishers turn to immersive archives to drive premium subscriptions.", category: "Culture", excerpt: "The next literacy revolution is combining narrative context with digital interactivity.", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80", time: "46 min" },
  { id: "news-4", title: "Global art markets embrace digital provenance and community-owned exhibitions.", category: "Art", excerpt: "Collectors are moving toward traceable, networked ownership experiences.", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80", time: "1 hour" },
];

export const literatureCatalog: LiteratureItem[] = [
  { id: "lit-1", title: "The Quiet Inventor", author: "Mara Leth", genre: "Biography", year: 2025, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80" },
  { id: "lit-2", title: "Signal in the Dust", author: "Erin Voss", genre: "Essay", year: 2024, image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80" },
  { id: "lit-3", title: "Atlas of Unlived Cities", author: "Faris Kline", genre: "Manuscript", year: 2023, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80" },
  { id: "lit-4", title: "The Last Moon Ledger", author: "Lena Quay", genre: "Memoir", year: 2025, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80" },
];

export const artCatalog: ArtItem[] = [
  { id: "art-1", title: "Nocturne Bloom", origin: "Tokyo, JP", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80" },
  { id: "art-2", title: "Field of Echoes", origin: "Berlin, DE", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { id: "art-3", title: "Everyday Geometry", origin: "Cairo, EG", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80" },
  { id: "art-4", title: "Tidal Memory", origin: "Lisbon, PT", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80" },
];

export const walletLedger: WalletLedgerEntry[] = [
  { id: "w1", title: "Affiliate payout", type: "credit", amount: 420.75, status: "completed", timestamp: "2026-09-15T14:20:00Z" },
  { id: "w2", title: "SMM campaign spend", type: "debit", amount: 164.2, status: "completed", timestamp: "2026-09-14T11:10:00Z" },
  { id: "w3", title: "Media subscription rollup", type: "credit", amount: 108.5, status: "pending", timestamp: "2026-09-12T08:00:00Z" },
];

export const smmOrders: SMMOrder[] = [
  { id: "s1", service: "Algorithmic 10K followers", quantity: 10000, total: 189.0, status: "complete", createdAt: "2026-09-16T10:00:00Z" },
  { id: "s2", service: "Boost reel reach", quantity: 25000, total: 310.75, status: "processing", createdAt: "2026-09-17T08:30:00Z" },
];

export { featureCards, heroStatCards, feedItems };
