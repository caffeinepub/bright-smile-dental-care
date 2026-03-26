import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Menu,
  Phone,
  Shield,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/918292950461";

const services = [
  {
    icon: "🦷",
    name: "Teeth Cleaning",
    description:
      "Professional scaling and polishing to remove plaque and tartar for a healthy, fresh smile.",
  },
  {
    icon: "✨",
    name: "Teeth Whitening",
    description:
      "Safe and effective whitening treatments to brighten your smile by several shades.",
  },
  {
    icon: "🔬",
    name: "Root Canal Treatment (RCT)",
    description:
      "Painless RCT to save infected teeth and relieve pain with modern endodontic techniques.",
  },
  {
    icon: "🪥",
    name: "Tooth Extraction",
    description:
      "Gentle and safe extraction of damaged or impacted teeth with minimal discomfort.",
  },
  {
    icon: "💊",
    name: "Dental Filling",
    description:
      "Tooth-colored composite fillings to restore decayed teeth naturally and durably.",
  },
  {
    icon: "😁",
    name: "Braces Consultation",
    description:
      "Expert orthodontic consultation for braces and aligners to give you perfectly aligned teeth.",
  },
];

const whyChooseUs = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Experienced Doctor",
    description:
      "Dr. Sweta Sinha (BDS) brings years of clinical expertise and patient-centered care.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Modern Equipment",
    description:
      "State-of-the-art dental technology for precise, comfortable and effective treatments.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safe & Hygienic Clinic",
    description:
      "Strict sterilization protocols and hygienic environment ensuring your complete safety.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Affordable Treatment",
    description:
      "High-quality dental care at fair and transparent prices accessible to all families.",
  },
];

const galleryItems = [
  {
    src: "/assets/generated/gallery-smile-makeover.dim_400x400.jpg",
    label: "Smile Makeover",
  },
  {
    src: "/assets/generated/gallery-teeth-whitening.dim_400x400.jpg",
    label: "Teeth Whitening",
  },
  {
    src: "/assets/generated/gallery-clinic-interior.dim_400x400.jpg",
    label: "Clinic Interior",
  },
  {
    src: "/assets/generated/gallery-rct-procedure.dim_400x400.jpg",
    label: "RCT Procedure",
  },
  {
    src: "/assets/generated/gallery-braces-result.dim_400x400.jpg",
    label: "Braces Result",
  },
  {
    src: "/assets/generated/gallery-teeth-cleaning.dim_400x400.jpg",
    label: "Teeth Cleaning",
  },
];

const timings = [
  {
    day: "Monday – Saturday",
    morning: "09:00 AM – 12:00 PM",
    evening: "04:00 PM – 08:00 PM",
  },
  { day: "Sunday", morning: "09:00 AM – 02:00 PM", evening: "—" },
];

function NavLink({
  href,
  children,
}: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    preferredDate: "",
    preferredTime: "",
    age: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Hello, I'd like to book a dental appointment.",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Treatment: ${formData.treatment}`,
      `Preferred Date: ${formData.preferredDate}`,
      `Preferred Time: ${formData.preferredTime}`,
    ];

    if (formData.age) lines.push(`Age: ${formData.age}`);
    if (formData.message) lines.push(`Message: ${formData.message}`);

    const message = lines.join("\n");
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918292950461?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Toaster position="top-center" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-2xl">🦷</span>
              <div className="leading-tight">
                <div className="font-bold text-sm sm:text-base text-foreground">
                  Bright Smile
                </div>
                <div className="text-xs text-muted-foreground">Dental Care</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              data-ocid="main.nav.panel"
            >
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#why">Why Us</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm font-semibold px-3 sm:px-5"
                data-ocid="nav.book_appointment.button"
              >
                <a href="#appointment">BOOK APPOINTMENT</a>
              </Button>
              <button
                type="button"
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                data-ocid="nav.mobile_menu.toggle"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-white px-4 pb-4"
            >
              <nav className="flex flex-col gap-3 pt-3">
                {[
                  "#home",
                  "#services",
                  "#about",
                  "#why",
                  "#gallery",
                  "#contact",
                ].map((href, i) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm font-medium text-foreground py-2 border-b border-border last:border-0"
                    onClick={() => setMobileMenuOpen(false)}
                    data-ocid={`nav.mobile.link.${i + 1}`}
                  >
                    {
                      [
                        "Home",
                        "Services",
                        "About",
                        "Why Us",
                        "Gallery",
                        "Contact",
                      ][i]
                    }
                  </a>
                ))}
                <Button
                  type="button"
                  className="bg-primary text-primary-foreground w-full mt-2"
                  data-ocid="nav.mobile_book.button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document
                      .getElementById("appointment")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  BOOK APPOINTMENT
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1F6FAE 0%, #1a5c93 40%, #155280 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/assets/generated/hero-dental-clinic.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(31,111,174,0.85) 0%, rgba(21,82,128,0.9) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs font-medium">
              🏥 Trusted Dental Care in Gaya, Bihar
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Bright Smile
              <br />
              <span className="text-cyan-300">Dental Care</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light mb-3">
              Make Your Dream Smile a Reality
            </p>
            <p className="text-white/70 mb-10 text-base">
              Dr. Sweta Sinha (BDS) · Gaya, Bihar
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg"
                data-ocid="hero.whatsapp.button"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    role="img"
                    aria-label="WhatsApp"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 text-white bg-white/10 hover:bg-white/20 font-semibold px-8 rounded-full"
                data-ocid="hero.explore_services.button"
              >
                <a href="#services" className="flex items-center gap-2">
                  Explore Services <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex gap-8">
              {[
                { value: "500+", label: "Happy Patients" },
                { value: "6+", label: "Services" },
                { value: "5★", label: "Patient Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Doctor */}
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/generated/doctor-sweta-sinha.dim_400x480.jpg"
                  alt="Dr. Sweta Sinha BDS"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <h3 className="text-white font-bold text-xl">
                    Dr. Sweta Sinha
                  </h3>
                  <p className="text-white/80 text-sm">BDS · Dental Surgeon</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-card p-4 border border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-foreground">
                    Verified Dentist
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Meet Our Lead Dentist
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Dr. Sweta Sinha
              </h2>
              <p className="text-lg text-primary font-semibold mb-6">
                BDS (Bachelor of Dental Surgery)
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Sweta Sinha is a dedicated dental professional committed to
                providing exceptional oral healthcare to the people of Gaya,
                Bihar. With a BDS degree and extensive clinical experience, she
                brings a gentle, patient-centered approach to every treatment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Her clinic follows the highest standards of sterilization and
                hygiene, ensuring a safe environment for all patients—from
                children to seniors. She believes that every patient deserves a
                healthy, confident smile.
              </p>

              <blockquote className="border-l-4 border-primary pl-4 mb-8">
                <p className="text-foreground font-medium italic">
                  "Dedicated to giving you a healthy, beautiful smile with
                  compassionate and personalized care."
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Patient Care",
                  "Oral Hygiene",
                  "Pain-Free Dentistry",
                  "Modern Techniques",
                ].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="about.book_appointment.button"
              >
                <a href="#appointment" className="flex items-center gap-2">
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              What We Offer
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care services delivered with the latest
              techniques and a gentle touch.
            </p>
          </motion.div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.list"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`services.item.${i + 1}`}
                className="bg-white rounded-2xl p-6 shadow-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Why Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Bright Smile?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We combine expertise, technology, and compassion to deliver the
              best dental experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Our Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Gallery
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A glimpse into our clinic, procedures, and the smiles we've helped
              create.
            </p>
          </motion.div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="gallery.list"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`gallery.item.${i + 1}`}
                className="group relative rounded-2xl overflow-hidden shadow-card aspect-square"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment + Contact */}
      <section id="appointment" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Book Your Dental Appointment
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill in the form below and we'll instantly connect you on WhatsApp
              to confirm your slot.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card border border-border"
              data-ocid="appointment.panel"
            >
              <h3 className="text-xl font-bold text-foreground mb-1">
                Book Your Dental Appointment
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                We'll open WhatsApp with your details pre-filled.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      autoComplete="name"
                      data-ocid="appointment.name.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                      autoComplete="tel"
                      data-ocid="appointment.phone.input"
                    />
                  </div>
                </div>

                {/* Treatment Type */}
                <div className="space-y-1.5">
                  <Label htmlFor="treatment">
                    Treatment Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.treatment}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, treatment: v }))
                    }
                    required
                  >
                    <SelectTrigger
                      id="treatment"
                      data-ocid="appointment.treatment.select"
                    >
                      <SelectValue placeholder="Select a treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Teeth Cleaning",
                        "Teeth Whitening",
                        "Root Canal Treatment (RCT)",
                        "Tooth Extraction",
                        "Dental Filling",
                        "Braces Consultation",
                      ].map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Row 2: Date + Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="date">
                      Preferred Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          preferredDate: e.target.value,
                        }))
                      }
                      required
                      data-ocid="appointment.date.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="time">
                      Preferred Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          preferredTime: e.target.value,
                        }))
                      }
                      required
                      data-ocid="appointment.time.input"
                    />
                  </div>
                </div>

                {/* Patient Age (optional) */}
                <div className="space-y-1.5">
                  <Label htmlFor="age">
                    Patient Age{" "}
                    <span className="text-muted-foreground text-xs font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min="1"
                    max="120"
                    placeholder="e.g. 28"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, age: e.target.value }))
                    }
                    data-ocid="appointment.age.input"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message">
                    Message / Problem Description{" "}
                    <span className="text-muted-foreground text-xs font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your dental concern or any special requirements..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        message: e.target.value,
                      }))
                    }
                    data-ocid="appointment.message.textarea"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 text-base flex items-center justify-center gap-2"
                  data-ocid="appointment.submit.button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current flex-shrink-0"
                    role="img"
                    aria-label="WhatsApp"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book Appointment on WhatsApp
                </Button>

                {/* Trust text */}
                <p className="text-center text-xs text-muted-foreground pt-1">
                  🔒 Safe &amp; Hygienic Treatment | Experienced Dentist
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              id="contact"
            >
              {/* Contact card */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-5">
                  Contact & Visit Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Phone / WhatsApp
                      </p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                        data-ocid="contact.whatsapp.button"
                      >
                        +91 82929 50461
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Address
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Infront of Rukhaiyar Palace, Near DR. R.B. Singh,
                        <br />
                        Kali Wadi, Tilha Mahavir Asthan,
                        <br />
                        Gaya, Bihar
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                  data-ocid="contact.whatsapp_book.button"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      role="img"
                      aria-label="WhatsApp"
                    >
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Timings */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">
                    Clinic Timings
                  </h3>
                </div>
                <div className="space-y-3">
                  {timings.map((t) => (
                    <div
                      key={t.day}
                      className="border-b border-border last:border-0 pb-3 last:pb-0"
                    >
                      <p className="font-semibold text-foreground text-sm mb-1">
                        {t.day}
                      </p>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          Morning: {t.morning}
                        </div>
                        {t.evening !== "—" && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            Evening: {t.evening}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=24.7847607,85.0040398&z=16&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bright Smile Dental Care Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🦷</span>
                <div>
                  <div className="font-bold text-white">Bright Smile</div>
                  <div className="text-xs text-white/60">Dental Care</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Making smiles brighter and lives healthier in Gaya, Bihar with
                compassionate dental care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  ["#home", "Home"],
                  ["#services", "Services"],
                  ["#about", "About Doctor"],
                  ["#why", "Why Choose Us"],
                  ["#gallery", "Gallery"],
                  ["#appointment", "Book Appointment"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <p className="text-white/60 text-sm">📞 +91 82929 50461</p>
                <p className="text-white/60 text-sm">
                  📍 Infront of Rukhaiyar Palace,
                  <br />
                  Kali Wadi, Tilha Mahavir Asthan,
                  <br />
                  Gaya, Bihar
                </p>
              </div>
            </div>

            {/* Timings */}
            <div>
              <h4 className="font-semibold text-white mb-4">Timings</h4>
              <div className="space-y-2">
                <p className="text-white/60 text-sm">Mon – Sat</p>
                <p className="text-white/80 text-sm">09:00 AM – 12:00 PM</p>
                <p className="text-white/80 text-sm">04:00 PM – 08:00 PM</p>
                <p className="text-white/60 text-sm mt-2">Sunday</p>
                <p className="text-white/80 text-sm">09:00 AM – 02:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Bright Smile Dental Care. All Rights
              Reserved.
            </p>
            <p className="text-white/40 text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors whatsapp-pulse"
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp.floating.button"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
          role="img"
          aria-label="WhatsApp"
        >
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
