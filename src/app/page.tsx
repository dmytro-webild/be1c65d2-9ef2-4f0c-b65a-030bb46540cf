"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Star, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Top Notch Restro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "rotated-rays-static",
      }}
      logoText="Top Notch Restro"
      description="Experience fine dining at its best. Book your table online and order your favorite dishes today."
      buttons={[
        {
          text: "Book a Table",
          href: "#contact",
        },
        {
          text: "View Menu",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/table-with-white-servant_140725-6421.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="A Legacy of Culinary Excellence"
      metrics={[
        {
          icon: Utensils,
          label: "Years Experience",
          value: "15+",
        },
        {
          icon: Star,
          label: "Avg Rating",
          value: "4.9",
        },
        {
          icon: Users,
          label: "Happy Guests",
          value: "50k+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Truffle Pasta",
          price: "$28",
          imageSrc: "http://img.b2bpic.net/free-photo/shrimp-linguine-pasta-with-basil-sun-dried-tomatoes_84443-94397.jpg",
        },
        {
          id: "p2",
          name: "Grilled Salmon",
          price: "$32",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-healthy-pasta-cooking-pot-jute-textile-with-cherry-tomato-salad_23-2148076248.jpg",
        },
        {
          id: "p3",
          name: "Wagyu Steak",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-piece-meat-potatoes-fried-tomato_140725-6649.jpg",
        },
        {
          id: "p4",
          name: "Garden Salad",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-food-composition-with-kitchen-tools_23-2147992840.jpg",
        },
        {
          id: "p5",
          name: "Chocolate Lava",
          price: "$12",
          imageSrc: "http://img.b2bpic.net/free-photo/meat-cutting-glass-champagne_140725-2149.jpg",
        },
        {
          id: "p6",
          name: "Creamy Soup",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-bell-peppers-lettuce-cucumber-boiled-egg_140725-10671.jpg",
        },
      ]}
      title="Signature Menu"
      description="Explore our chef's curated selections and order online."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "pl1",
          badge: "Solo",
          price: "$50",
          subtitle: "Perfect for date night",
          features: [
            "Reserved table",
            "Welcome drink",
            "2-course meal",
          ],
        },
        {
          id: "pl2",
          badge: "Group",
          price: "$150",
          subtitle: "Perfect for celebrations",
          features: [
            "VIP table",
            "Premium menu",
            "Champagne",
          ],
        },
        {
          id: "pl3",
          badge: "Full",
          price: "$300",
          subtitle: "Perfect for events",
          features: [
            "Full venue access",
            "Custom menu",
            "Priority service",
          ],
        },
      ]}
      title="Reservation Packages"
      description="Choose a dining package for your special occasions."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "200+",
          description: "Meals Served Daily",
        },
        {
          id: "m2",
          value: "12",
          description: "Expert Chefs",
        },
        {
          id: "m3",
          value: "5",
          description: "Awards Won",
        },
      ]}
      title="Serving Smiles Daily"
      description="Our numbers speak volumes about our commitment to quality."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "Best dining experience in town!",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006735.jpg",
        },
        {
          id: "t2",
          name: "Mark D.",
          handle: "@markd",
          testimonial: "Exceptional food and service.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-sushi-park-picnic-nature_169016-22794.jpg",
        },
        {
          id: "t3",
          name: "Emma R.",
          handle: "@emmar",
          testimonial: "Love the atmosphere here.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-smartphone_23-2149250123.jpg",
        },
        {
          id: "t4",
          name: "John K.",
          handle: "@johnk",
          testimonial: "Top notch indeed!",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006704.jpg",
        },
        {
          id: "t5",
          name: "Anna P.",
          handle: "@annap",
          testimonial: "Always a pleasure to dine here.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-holding-hands-table-restaurant_23-2148014447.jpg",
        },
      ]}
      title="Guest Experiences"
      description="What our patrons say about Top Notch Restro."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="Contact"
      title="Book Your Experience"
      description="Reserve a table or make inquiries here."
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/elegant-couple-spend-time-restaurant_1157-20500.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Top Notch Restro"
      columns={[
        {
          title: "Useful Links",
          items: [
            {
              label: "Menu",
              href: "#products",
            },
            {
              label: "Reservations",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
