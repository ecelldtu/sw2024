import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-3xl text-center text-n-1/50">
        OUR PARTNERS
      </h5>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center lg:gap-32">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center h-[8.5rem] mb-4"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
