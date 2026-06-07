import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListingCard from "./components/ListingCard";
import { listings } from "@/data/listings";
import { Search, Hotel, Home, GraduationCap, Palmtree, Shield, Star, TrendingUp, Users } from "lucide-react";

export default function HomePage() {
  const featured = listings.filter(l => l.featured);

  return (
    <div className="min-h-screen" style={{background:"var(--cream)"}}>
      <Navbar/>

      {/* HERO */}
      <section className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize:"60px 60px"}}/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-sm font-medium">1,200+ active listings across the USA</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 fade-up-delay-1">
              Find Your Perfect<br/>
              <span style={{color:"var(--amber)"}}>Place to Stay</span>
            </h1>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed fade-up-delay-2">
              Hotels, homes, student rooms, and vacation rentals — all in one place. 
              Trusted by thousands of guests and property owners across the United States.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl fade-up-delay-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search size={18} className="text-gray-400 shrink-0"/>
                <input type="text" placeholder="City, state, or zip code..." className="w-full text-gray-800 text-sm bg-transparent border-0 focus:ring-0" style={{outline:"none"}}/>
              </div>
              <select className="flex-1 px-4 py-3 text-sm text-gray-600 bg-gray-50 rounded-xl border-0 focus:ring-0">
                <option value="">All Types</option>
                <option value="hotel">Hotels & B&Bs</option>
                <option value="house">Houses & Apartments</option>
                <option value="student">Student Housing</option>
                <option value="vacation">Vacation Rentals</option>
              </select>
              <Link href="/listings" className="teal-btn text-white font-semibold px-8 py-3 rounded-xl text-sm whitespace-nowrap text-center">
                Search Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[["1,200+","Active Listings"],["48","States Covered"],["8,500+","Happy Guests"],["4.8/5","Average Rating"]].map(([num,label])=>(
              <div key={label}>
                <div className="font-display text-2xl font-bold" style={{color:"var(--teal)"}}>{num}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-divider w-16 mx-auto mb-4"/>
          <h2 className="font-display text-3xl font-bold" style={{color:"var(--navy)"}}>Browse by Category</h2>
          <p className="text-gray-500 mt-2">Find exactly what you&apos;re looking for</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {icon:Hotel,label:"Hotels & B&Bs",desc:"Boutique stays & inns",q:"hotel",bg:"#EFF6FF",ic:"#1D4ED8"},
            {icon:Home,label:"Houses & Apts",desc:"Long-term rentals",q:"house",bg:"#F0FDF4",ic:"#15803D"},
            {icon:GraduationCap,label:"Student Housing",desc:"Near campuses",q:"student",bg:"#FFF7ED",ic:"#C2410C"},
            {icon:Palmtree,label:"Vacation Rentals",desc:"Weekend escapes",q:"vacation",bg:"#FDF4FF",ic:"#7E22CE"},
          ].map(({icon:Icon,label,desc,q,bg,ic})=>(
            <Link key={q} href={`/listings?type=${q}`}>
              <div className="rounded-2xl p-6 text-center card-hover cursor-pointer border border-gray-100" style={{background:bg}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background:"white",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"}}>
                  <Icon size={22} color={ic}/>
                </div>
                <h3 className="font-semibold text-sm text-gray-800">{label}</h3>
                <p className="text-xs text-gray-500 mt-1">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="py-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="section-divider w-12 mb-3"/>
            <h2 className="font-display text-3xl font-bold" style={{color:"var(--navy)"}}>Featured Listings</h2>
            <p className="text-gray-500 mt-1 text-sm">Handpicked top properties across the USA</p>
          </div>
          <Link href="/listings" className="text-sm font-semibold underline" style={{color:"var(--teal)"}}>View All →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(l => <ListingCard key={l.id} listing={l}/>)}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">List Your Property in Minutes</h2>
            <p className="text-blue-200 text-sm">Reach thousands of potential guests and tenants across the USA</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {step:"01",icon:Users,title:"Create Your Account",desc:"Sign up for free and set up your property manager profile in under 2 minutes."},
              {step:"02",icon:Home,title:"List Your Property",desc:"Add photos, description, pricing, and amenities. Your listing goes live immediately."},
              {step:"03",icon:TrendingUp,title:"Get Bookings",desc:"Guests find you, inquire, and you earn. Upgrade to a paid plan for premium placement."},
            ].map(({step,icon:Icon,title,desc})=>(
              <div key={step} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto" style={{background:"rgba(27,153,139,0.2)",border:"1px solid rgba(27,153,139,0.3)"}}>
                    <Icon size={28} color="var(--teal-light)"/>
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{background:"var(--amber)"}}>{step}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/list-property" className="inline-block text-white font-semibold px-8 py-3 rounded-xl text-sm" style={{background:"var(--amber)"}}>
              Start Listing Today →
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {icon:Shield,title:"Verified Listings",desc:"Every property is manually reviewed before going live to ensure quality and accuracy."},
            {icon:Star,title:"Genuine Reviews",desc:"Real guest reviews from verified stays and rentals — no fake or paid reviews."},
            {icon:Users,title:"Dedicated Support",desc:"Our USA-based support team is available 7 days a week to help guests and hosts."},
          ].map(({icon:Icon,title,desc})=>(
            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:"var(--teal)",opacity:0.9}}>
                <Icon size={20} color="white"/>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 mx-4 md:mx-8 lg:mx-16 mb-16 rounded-3xl text-white text-center" style={{background:"linear-gradient(135deg, var(--teal) 0%, #0D6E63 100%)"}}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to List Your Property?</h2>
        <p className="text-teal-100 mb-8 max-w-xl mx-auto">Join hundreds of property owners earning more with NestAway. Annual plan at just $199/year — cancel anytime.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/list-property" className="bg-white font-semibold px-8 py-3 rounded-xl text-sm transition-all hover:bg-gray-100" style={{color:"var(--teal)"}}>
            List Your Property
          </Link>
          <Link href="/pricing" className="border border-white/50 text-white font-semibold px-8 py-3 rounded-xl text-sm hover:bg-white/10 transition-all">
            View Pricing Plans
          </Link>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
