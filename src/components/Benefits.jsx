import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="benefits2">
      <div className="container relative z-2">
        <Heading
          className="text-center"
          title="Innovate, Elevate: The Hidden Perks of Startup Weekend"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] rounded-b-3xl rounded-l-3xl rounded-tr-[20%] ${item.colorful ? "bg-conic-gradient" : "bg-conic-gradient"}`}
              key={item.id}
              style={{ borderTopRightRadius: '24px' }} 
            >
              <div className="relative z-2 flex flex-col h-auto p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>
              {item.light && <GradientLight />}
              <div className="absolute inset-0.5 rounded-2xl bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-[5%]">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
