import clean from "../assets/clean.png";
import dentalcrown from "../assets/dental-crown.png"
import braces from "../assets/braces.png"
import toothextraction from "../assets/tooth-extraction.png"
import dentalveneer from "../assets/dental-veneer.png"
import dentalimplant from "../assets/dental-implant.png"

const Services = () => {
  return (
    <section className="min-h-screen bg-[#E1F1F8] px-5 sm:px-10 pt-16 lg:pt-40">
      <div className="flex flex-col lg:flex-row gap-10 w-full ">
       
        <div className="w-full lg:w-1/3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Everything you <br />
            need in one <br />
            place.
          </h1>
        </div>

        
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col h-full">
            <img src={clean} className="w-8 mb-3" />
            <h2 className="text-lg font-semibold text-black mb-2">Preventive Care</h2>
            <p className="text-sm text-gray-500 mt-auto max-w-[220px]">
              Regular check-ups and fluoride treatments to prevent tooth decay and gum disease.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <img src={dentalcrown} className="w-8 mb-3" />
            <h2 className="text-lg font-semibold text-black mb-2">Restorative Care</h2>
            <p className="text-sm text-gray-500 mt-auto max-w-[220px]">
              Fillings, crowns, bridges, and dentures to restore damaged or missing teeth.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <img src={braces} className="w-8 mb-3" />
            <h2 className="text-lg font-semibold text-black mb-2">Orthodontic Care</h2>
            <p className="text-sm text-gray-500 mt-auto max-w-[220px]">
              Braces and clear aligners to straighten teeth and correct bite issues.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <img src={toothextraction} className="w-8 mb-3" />
            <h2 className="text-lg font-semibold text-black mb-2">Oral Surgery</h2>
            <p className="text-sm text-gray-500 mt-auto max-w-[220px]">
              Extractions, wisdom teeth removal, and other surgical procedures.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <img src={dentalveneer} className="w-8 mb-3" />
            <h2 className="text-lg font-semibold text-black mb-2">Cosmetic Dentistry</h2>
            <p className="text-sm text-gray-500 mt-auto max-w-[220px]">
              Teeth whitening, veneers, and other procedures to improve the appearance of teeth.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <img src={dentalimplant} className="w-8 mb-3" />
            <h2 className="text-lg font-semibold text-black mb-2">Dental Implants</h2>
            <p className="text-sm text-gray-500 mt-auto max-w-[220px]">
              Dental implants are a popular and effective way to replace missing teeth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;