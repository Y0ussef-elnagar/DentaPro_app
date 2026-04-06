import React from "react";
import aboutImage from "../assets/aboutimage.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 pt-28 overflow-x-hidden">
            <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden flex-shrink-0 md:max-w-[45%] w-full">
                <img
                    className="w-full h-auto object-cover shadow-2xl"
                    src={aboutImage}
                    alt="Dental care"
                />
            </div>

            <div className="text-sm text-slate-600 w-full md:max-w-[45%]">
                <h1 className="text-4xl font-semibold text-slate-700">
                    Expert dental care for the whole family.
                </h1>

                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-2"></div>

                <p className="mt-8">
                    Regular checkups, cleanings, and dental exams are essential
                    for maintaining good oral health. We offer a full range of
                    preventive care services, including fluoride treatments,
                    dental sealants, and oral cancer screenings. Our new patient
                    information page provides helpful information about what to
                    expect during your first visit and what to bring with you.
                </p>

                <p className="mt-4">
                    Dental health affects people’s overall physical and
                    psychological well-being. We are on a mission to change the
                    way people perceive dental health services. Our outstanding
                    medical team of cosmetic and implant consultants uses
                    cutting-edge technologies to transform your dental service
                    experience from a journey of pain to a journey of comfort
                    and luxury.
                </p>

                <p className="mt-4">
                    Our vision is to reach the pinnacle of therapeutic and
                    cosmetic dental services. We strive to meet the highest
                    global standards and offer a painless service, as quickly as
                    possible. To achieve this vision, we have a team of
                    consultants in all dentistry fields using the latest
                    technologies and treatment methods to offer a level of
                    service that meets the highest standards in this profession.
                </p>

                <div className="mt-8">
                    <Link
                        to="/services"
                        className="relative px-8 py-3 text-white font-bold text-sm rounded-full bg-gray-800 overflow-hidden group hover:scale-105 transition-transform duration-300 inline-block"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-md transition-all duration-500 group-hover:opacity-100"></span>
                        <span className="relative z-10">Explore Services</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
