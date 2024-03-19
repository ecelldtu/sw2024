import Section from "./Section";
import Heading from "./Heading";
import { service2 } from "../assets";
import { Gradient } from "./design/Services";

const Services = () => {
  const servicesData = [
    { title: "Photo editing", description: "Automatically enhance" },
    { title: "Photo editing", description: "Automatically enhance" },
    { title: "Photo editing", description: "Automatically enhance" },
  ];

  return (
    <Section id="speakers">
      <div className="container">
        <Heading title="Past Mentors & Judges" />
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <div key={index} className="relative min-h-[28rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="robot" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">{service.title}</h4>
                  <p className="body-2 text-n-3">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
