import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Invalid email";
        if (!form.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess("");
            return;
        }

        setErrors({});
        setSuccess("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(""), 3000);
    };

    return (
        <section className="min-h-screen bg-gray-100 px-4 py-20 flex items-center justify-center">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Have any questions or want to work with us? Feel free to
                        contact us anytime.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-envelope text-blue-600"></i>
                            <span>example@email.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-phone text-blue-600"></i>
                            <span>+20 123 456 789</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-location-dot text-blue-600"></i>
                            <span>Cairo, Egypt</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white transition"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-400 hover:text-white transition"
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
                >
                    {success && (
                        <p className="text-green-600 text-sm">{success}</p>
                    )}

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={`border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""}`}
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">
                            {errors.name}
                        </span>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className={`border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : ""}`}
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">
                            {errors.email}
                        </span>
                    )}

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className={`border p-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-500" : ""}`}
                        value={form.message}
                        onChange={handleChange}
                    />
                    {errors.message && (
                        <span className="text-red-500 text-sm">
                            {errors.message}
                        </span>
                    )}

                    <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
