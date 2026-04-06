import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Appointment = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        date: "",
        service: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            await addDoc(collection(db, "appointments"), {
                ...form,
                createdAt: new Date(),
            });

            setSuccess(true);

            // reset form
            setForm({
                name: "",
                email: "",
                date: "",
                service: "",
            });
        } catch (error) {
            console.log(error);
            alert(error.message);;
        }

        setLoading(false);
    };

    return (
        <section className="relative min-h-screen w-full py-20 px-4 md:px-16 lg:px-24 bg-gradient-to-r from-sky-900 via-sky-800 to-cyan-800">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                {/* left side */}
                <div className="max-w-lg text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                        🦷Book Your <br />
                        <span className="text-cyan-200 font-extrabold tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            Appointment
                        </span>
                    </h2>

                    <div className="w-56 h-1 bg-white/80 rounded transition-all duration-300 hover:w-64"></div>

                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                        Get the best dental care with our experienced doctors.
                        Book your appointment now and enjoy a healthy smile.
                    </p>
                </div>

                {/* right side */}
                <div className="w-full max-w-md">
                    {success && (
                        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                            🎉 Your appointment has been confirmed! We will
                            contact you soon.
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-xl shadow-lg space-y-5"
                    >
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                            required
                            autoFocus
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                            required
                        />

                        {/* Date */}
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />

                        {/* Service */}
                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            <option value="">Select Dental Service</option>
                            <option>
                                Preventive Care - Check-ups & Fluoride
                                Treatments
                            </option>
                            <option>
                                Restorative Care - Fillings, Crowns & Bridges
                            </option>
                            <option>
                                Orthodontic Care - Braces & Aligners
                            </option>
                            <option>
                                Oral Surgery - Extractions & Wisdom Teeth
                                Removal
                            </option>
                            <option>
                                Cosmetic Dentistry - Whitening & Veneers
                            </option>
                            <option>
                                Dental Implants - Tooth Replacement Solutions
                            </option>
                        </select>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-sky-500 hover:bg-sky-600 transition text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                        >
                            {loading ? "Booking..." : "Book Now"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
