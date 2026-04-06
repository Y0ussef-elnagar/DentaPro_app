import teethModel from "../assets/model.jpg";
const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen w-full gap-16 bg-gradient-to-r from-white to-blue-400">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-h-full justify-center flex-1">
                <h1 className="text-4xl md:text-7xl font-semibold leading-snug text-slate-900 max-w-xl">
                    Treat Yourself <br /> with beautiful, <br />
                    <span className="text-sky-400">white</span> smile.
                </h1>
                <div className="flex  justify-between gap-16 mt-10"> 
                <p className="text-lg font-semibold"><span className="text-2xl font-semibold text-sky-400">01.</span> <br />Preventive Care</p>
                <p className="text-lg font-semibold"><span  className="text-2xl font-semibold text-sky-400">02.</span> <br />Restorative Care</p>
                <p className="text-lg font-semibold"><span  className="text-2xl font-semibold text-sky-400">03.</span> <br />Cosmetic Dentistry</p>
                </div>
            </div>

            <img
                src={teethModel}
                alt="Hero"
                className="max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl object-contain flex-1 transition-all duration-300  shadow-[0_35px_60px_rgba(0,0,0,0.3)] rounded-lg "
            />
        </section>
    );
};

export default Hero;
