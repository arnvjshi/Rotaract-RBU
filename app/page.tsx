"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LogoLoader from "@/components/LogoLoader";
import Navbar from "@/components/Navbar";
import WipBadge from "@/components/WipBadge";

// Page-level sections below

function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge,.hero-title,.hero-sub,.hero-cta", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      <div className="brand-hero-gradient">
        <div className="container-page relative py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="hero-badge chip bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25)]">
                <span className="bg-magenta-600 px-3 py-1 rounded-full">ROTARACT</span>
                <span className="px-3 py-1 rounded-full bg-white/10">RBU</span>
              </div>
              <h1 className="hero-title mt-6 text-5xl/[1.15] sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(227,28,121,.15)]">
                Persevering
                <br />
                Hopes
              </h1>
              <p className="hero-sub mt-6 text-lg text-white/80 max-w-xl">
                If your actions inspire others to dream more, learn more, do more and become more then you are a Leader. Do you want to become a Leader? Join the Rotaract crew today!
              </p>
              <div className="hero-cta mt-8 flex gap-4">
                <a href="#join" className="btn-primary">JOIN NOW</a>
                <a href="#about" className="btn-outline">About Us</a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image src="/rotary-white.png" alt="Rotary International" width={720} height={720} className="opacity-95 select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ overline, title, subtitle }: { overline?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {overline && (
        <div className="chip bg-white/5 text-white/80 border border-white/10 w-fit mx-auto mb-4">{overline}</div>
      )}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid md:grid-cols-2 gap-10 items-center">
        <div className="card-surface rounded-2xl p-6 shadow-[8px_8px_24px_#070b1e,_-8px_-8px_24px_#0f1633]">
          <Image src="/about.jpg" width={960} height={720} alt="About Section" className="rounded-xl object-cover w-full h-auto" />
        </div>
        <div>
          <SectionHeading overline="About Us" title="Welcome To Rotaract RBU" />
          <p className="mt-4 text-white/80">
            With a noble desire to take the lead for the upliftment of society, empowering women and youth, we Rotaract club of Shri Ramdeobaba College of Engineering and Management from Nagpur strives forth with novel point of view that will pave the path for the club to reach greater heights, and a better community.
          </p>
          <p className="mt-3 text-white/70">
            We strive for excellence, diligent work culture and ought to prepare fellow rotaractors as future leaders and compassionate citizens.
          </p>
          <a href="https://www.rotary.org" target="_blank" rel="noreferrer" className="btn-outline mt-6 inline-block">Visit Rotary International Website</a>
        </div>
      </div>
    </section>
  );
}

type EventCardProps = { title: string; description: string; tag?: string };
function EventCard({ title, description, tag }: EventCardProps) {
  return (
    <div className="card-surface rounded-2xl p-6 backdrop-blur-xl/2 shadow-[8px_8px_24px_#070b1e,_-8px_-8px_24px_#0f1633]">
      {tag && <span className="chip bg-white/5 text-white/70 border border-white/10 mb-3">{tag}</span>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function Events() {
  const events: EventCardProps[] = [
    { title: "Fit Street", tag: "Weight Lifting", description: "Join us on Fit Street, where we promote healthy living through various fitness activities and challenges." },
    { title: "Resume Building Session", tag: "Cardio & Strenght", description: "Enhance your career prospects by attending our Resume Building Session, designed to help you create a standout resume." },
    { title: "Spread Happines", tag: "Power Yoga", description: "Participate in our Spread Happiness event, where we bring joy to the community through various fun and engaging activities." },
    { title: "Green Mourya", tag: "The Fitness Pack", description: "Join our Green Mourya initiative to promote environmental sustainability through eco freindly Ganpati Bappa Idol making." },
    { title: "Stationary Donation", tag: "The Fitness Pack", description: "Contribute to our Stationary Donation drive, where we collect and distribute stationery to underprivileged students." },
    { title: "NMC Cleanlines Drive", tag: "The Fitness Pack", description: "Take part in our NMC Cleanliness Drive and help us make our community a cleaner and healthier place to live." },
    { title: "Garbha Night", tag: "The Fitness Pack", description: "Celebrate the festival of Navratri with us at Garbha Night, filled with traditional music, dance, and cultural activities." },
  ];
  return (
    <section id="events" className="section">
      <div className="container-page">
        <SectionHeading overline="Our Events" title="Few of Our Notable Events" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutRotary() {
  return (
    <section id="about-rotary" className="section">
      <div className="container-page grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionHeading overline="About Rotary" title="What is Rotary?" />
          <p className="mt-4 text-white/80">
            Rotary International is one of the largest service organizations in the world. The mission of Rotary is to "provide service to others, promote integrity, and advance world understanding, goodwill, and peace through the fellowship of business, professional, and community leaders".
          </p>
          <p className="mt-3 text-white/70">Chartered on 15th February 2012, Sponsored by Rotary Club of Nagpur Mihan Town, we align our interest with District 3030 to be a better version of ourselves.</p>
        </div>
        <div className="card-surface rounded-2xl p-6">
          <h3 className="text-xl font-bold">Unleash your potential</h3>
          <p className="mt-2 text-white/70 text-sm">
            Are you ready to make a real difference in your community? Join Rotaract RCOEM and become part of a global network of young leaders dedicated to service, friendship, and personal growth. As a Rotaractor, you'll have the opportunity to: Lead Projects, Network Globally, Develop Skills, Create Memories, Inspire Change.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact-us" className="section">
      <div className="container-page grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeading overline="Queries" title="Contact Us" />
          <form className="mt-6 grid gap-4">
            <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3" placeholder="Your Name" />
            <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3" placeholder="Your Email" />
            <textarea className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 min-h-32" placeholder="Your Message" />
            <button className="btn-primary w-fit">Send Message</button>
          </form>
        </div>
        <div className="card-surface rounded-2xl p-6">
          <h3 className="text-xl font-bold">Join Us</h3>
          <form id="join" className="mt-4 grid gap-3">
            <input className="rounded-lg bg-white/5 border border-white/10 px-4 py-2" placeholder="Your Name" />
            <input className="rounded-lg bg-white/5 border border-white/10 px-4 py-2" placeholder="Your Mobile Number" />
            <input className="rounded-lg bg-white/5 border border-white/10 px-4 py-2" placeholder="Your Email" />
            <input className="rounded-lg bg-white/5 border border-white/10 px-4 py-2" placeholder="Your Branch" />
            <div className="grid grid-cols-3 gap-2 text-sm text-white/80">
              <label className="flex items-center gap-2"><input name="gender" type="radio" /> Male</label>
              <label className="flex items-center gap-2"><input name="gender" type="radio" /> Female</label>
              <label className="flex items-center gap-2"><input name="gender" type="radio" /> Can't say</label>
            </div>
            <select className="rounded-lg bg-white/5 border border-white/10 px-4 py-2">
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
            </select>
            <textarea className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 min-h-24" placeholder="Why do you want to join us?" />
            <textarea className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 min-h-24" placeholder="How can you be useful to us?" />
            <textarea className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 min-h-24" placeholder="Any past social service experience?" />
            <button className="btn-primary mt-2 w-fit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page grid md:grid-cols-3 gap-10 text-sm text-white/70">
        <div>
          <h3 className="font-bold text-white">Rotaract RBU</h3>
          <p className="mt-2">Fellowship isn't what we do for each other. Fellowship is what we do together for the world.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Our Links</h4>
          <ul className="mt-2 space-y-1">
            {["Home","About Us","Events","Hall Of Fame","About Rotary","Contact Us","Join Us"].map(x => (
              <li key={x}><a className="hover:text-white" href={`#${x.toLowerCase().replaceAll(" ","-")}`}>{x}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact Us</h4>
          <p className="mt-2">Shri Ramdeobaba College of Engineering and Management, Gittikhadan, Nagpur - 440 013</p>
          <p className="mt-2">Rtr. Shanmukh Pardhi (President) — +91 7972208467</p>
          <p>Rtr. Samiksha Harjal (Secretary) — +91 8600720151</p>
          <p className="mt-2">rotaract.rcoem.3030@gmail.com<br/>rotaracttechnical@gmail.com</p>
        </div>
      </div>
      <div className="container-page mt-8 text-xs text-white/60">© 2025 Rotaract RBU. All Rights Reserved.</div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <LogoLoader />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <AboutRotary />
      <Contact />
      <Footer />
      <WipBadge />
    </div>
  );
}
