export type ListingType = "hotel" | "house" | "student" | "vacation";

export interface Listing {
  id: string;
  title: string;
  type: ListingType;
  location: string;
  state: string;
  price: number;
  priceUnit: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  amenities: string[];
  image: string;
  rating: number;
  reviews: number;
  featured: boolean;
  available: boolean;
  contact: string;
}

export const listings: Listing[] = [
  {
    id: "1", title: "The Harbor View Inn", type: "hotel",
    location: "San Francisco, CA", state: "California",
    price: 129, priceUnit: "night", beds: 1, baths: 1, sqft: 320,
    description: "A charming boutique hotel steps from Fisherman's Wharf. All rooms include bay views, complimentary breakfast, and free WiFi.",
    amenities: ["Free WiFi","Breakfast Included","Bay View","Parking","Air Conditioning","Concierge"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    rating: 4.8, reviews: 142, featured: true, available: true, contact: "info@harborviewinn.com"
  },
  {
    id: "2", title: "Sunny 3BR House – Great Schools", type: "house",
    location: "Austin, TX", state: "Texas",
    price: 2200, priceUnit: "month", beds: 3, baths: 2, sqft: 1450,
    description: "Spacious family home in a quiet neighborhood. Large backyard, two-car garage, updated kitchen. Walking distance to parks and top-rated schools.",
    amenities: ["Garage","Backyard","Washer/Dryer","Central AC","Dishwasher","Pet Friendly"],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    rating: 4.7, reviews: 23, featured: true, available: true, contact: "rent@austinhomes.com"
  },
  {
    id: "3", title: "Student Studio – Near NYU Campus", type: "student",
    location: "New York, NY", state: "New York",
    price: 1350, priceUnit: "month", beds: 1, baths: 1, sqft: 420,
    description: "Affordable fully-furnished studio a 5-minute walk from NYU. Utilities included, fast internet, shared laundry, secure building.",
    amenities: ["Furnished","Utilities Included","Fast WiFi","Laundry","Secure Entry","Study Lounge"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    rating: 4.5, reviews: 67, featured: true, available: true, contact: "nyustudio@housing.com"
  },
  {
    id: "4", title: "Beachfront Vacation Cottage", type: "vacation",
    location: "Miami Beach, FL", state: "Florida",
    price: 245, priceUnit: "night", beds: 2, baths: 2, sqft: 900,
    description: "Wake up to ocean views in this stunning beachfront cottage. Private deck, beach chairs included, 2 min walk to the water.",
    amenities: ["Beachfront","Private Deck","Beach Chairs","Full Kitchen","BBQ Grill","Free Parking"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
    rating: 4.9, reviews: 88, featured: true, available: true, contact: "miamicottage@vacay.com"
  },
  {
    id: "5", title: "Mountain Lodge B&B", type: "hotel",
    location: "Aspen, CO", state: "Colorado",
    price: 189, priceUnit: "night", beds: 1, baths: 1, sqft: 380,
    description: "Cozy mountain B&B with stunning Rockies views. Homemade breakfast, ski storage, fireplace lounge.",
    amenities: ["Ski Storage","Breakfast","Fireplace","Mountain View","Hot Tub","WiFi"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    rating: 4.9, reviews: 56, featured: false, available: true, contact: "lodge@aspenmountain.com"
  },
  {
    id: "6", title: "Modern 1BR Apartment Downtown", type: "house",
    location: "Chicago, IL", state: "Illinois",
    price: 1750, priceUnit: "month", beds: 1, baths: 1, sqft: 720,
    description: "Sleek, modern apartment in the heart of Chicago. Floor-to-ceiling windows, rooftop access, gym in building.",
    amenities: ["Rooftop Deck","Gym","Doorman","In-Unit Laundry","Bike Storage","Modern Kitchen"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    rating: 4.6, reviews: 34, featured: false, available: true, contact: "chicago1br@realty.com"
  },
  {
    id: "7", title: "Shared Room – Near UCLA", type: "student",
    location: "Los Angeles, CA", state: "California",
    price: 850, priceUnit: "month", beds: 1, baths: 1, sqft: 200,
    description: "Affordable shared housing near UCLA campus. Roommate matching service, furnished, all utilities included. Perfect for students on a budget.",
    amenities: ["Furnished","All Utilities","Near Campus","WiFi","Laundry","Kitchen Access"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    rating: 4.3, reviews: 91, featured: false, available: true, contact: "ucla.rooms@housing.net"
  },
  {
    id: "8", title: "Desert Retreat – Scottsdale", type: "vacation",
    location: "Scottsdale, AZ", state: "Arizona",
    price: 195, priceUnit: "night", beds: 3, baths: 2, sqft: 1200,
    description: "Luxurious desert retreat with private pool, mountain views, and resort-style amenities. Perfect for groups and families.",
    amenities: ["Private Pool","Mountain View","BBQ","Free Parking","Hot Tub","Full Kitchen"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    rating: 4.8, reviews: 45, featured: false, available: true, contact: "scottsdale@desertretreat.com"
  },
  {
    id: "9", title: "Historic Inn – Savannah", type: "hotel",
    location: "Savannah, GA", state: "Georgia",
    price: 99, priceUnit: "night", beds: 1, baths: 1, sqft: 350,
    description: "Step back in time at this beautifully restored 1880s inn. Walk to shops, restaurants, and the famous River Street.",
    amenities: ["Historic Building","WiFi","Breakfast","Garden","Free Parking","Air Conditioning"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    rating: 4.7, reviews: 113, featured: false, available: true, contact: "info@savannahinn.com"
  },
  {
    id: "10", title: "4BR Family Home – Suburbs", type: "house",
    location: "Nashville, TN", state: "Tennessee",
    price: 2800, priceUnit: "month", beds: 4, baths: 3, sqft: 2100,
    description: "Spacious suburban family home. Huge backyard, two-car garage, finished basement. Great school district.",
    amenities: ["Garage","Large Backyard","Basement","Central AC","Dishwasher","Storage"],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    rating: 4.5, reviews: 18, featured: false, available: true, contact: "nashville4br@homes.com"
  },
  {
    id: "11", title: "Campus Dorm-Style Housing", type: "student",
    location: "Boston, MA", state: "Massachusetts",
    price: 1100, priceUnit: "month", beds: 1, baths: 1, sqft: 300,
    description: "Purpose-built student housing near Harvard & MIT. All-inclusive, community events, 24/7 security.",
    amenities: ["All-Inclusive","Community Events","24/7 Security","Study Rooms","Gym","Near T-Stop"],
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80",
    rating: 4.4, reviews: 155, featured: false, available: true, contact: "boston@studenthousing.edu"
  },
  {
    id: "12", title: "Lake House Weekend Getaway", type: "vacation",
    location: "Lake Tahoe, NV", state: "Nevada",
    price: 320, priceUnit: "night", beds: 4, baths: 3, sqft: 1800,
    description: "Stunning lakefront property with private dock, kayaks, and breathtaking Sierra Nevada views. Sleeps up to 8.",
    amenities: ["Private Dock","Kayaks","Lake View","Full Kitchen","Fireplace","Sleeps 8"],
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
    rating: 5.0, reviews: 62, featured: false, available: true, contact: "tahoe@lakehouse.com"
  },
];
