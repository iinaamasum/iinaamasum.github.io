import React from "react";
import Sidebar from "../components/Sidebar";
import TextFormatter from "../components/TextFormatter";
import sidebar from "../database/sidebar.json";
import { aboutMe } from "../database/about-me.json";
import { education } from "../database/education.json";
import { recentUpdates } from "../database/recent-updates.json";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">About Me</h1>

      <div>
        <TextFormatter text={aboutMe.description} />
      </div>

      <div className="pt-6 pb-2">Here’s quick preview of {sidebar.name}:</div>

      <div className="">
        <ul>
          {aboutMe.quickPreviews.map((item, index) => {
            return (
              <li key={index} className="list-disc ml-6">
                <TextFormatter text={item} />
              </li>
            );
          })}
        </ul>
      </div>

      <InfoSection title="Education" bulletPoints={education} />
      <InfoSection title="Recent Updates" bulletPoints={recentUpdates} />
    </div>
  );
};

export default Home;
