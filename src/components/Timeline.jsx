import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

import Day1 from "./Sch1";
import Day2 from "./Sch2";
import Day3 from "./Sch3";

const Roadmap = () => (
  <Section className="overflow-hidden" id="timeline">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Timeline" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          let faqComponent;
          switch (item.title) {
            case 'DAY 1':
              faqComponent = <Day1 />;
              break;
            case 'DAY 2':
              faqComponent = <Day2 />;
              break;
            case 'DAY 3':
              faqComponent = <Day3 />;
              break;
            default:
              faqComponent = null;
          }

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              key={item.id}
            >
              <div className="relative w-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="flex items-center justify-between w-auto mb-8 text-2xl">
                    <Tagline className="text-base md:text-xl">{item.date}</Tagline>
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  {faqComponent}
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
