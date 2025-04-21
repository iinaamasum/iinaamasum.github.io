import React from 'react';
import TextFormatter from '../components/TextFormatter';
import experienceData from '../database/experience.json';

const Experience = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
                Experiences
            </h1>
            <div className="space-y-8">
                {experienceData.experiences.map((exp, idx) => (
                    <div key={idx} className="border-l-4 border-gray-300 pl-4">
                        <h3 className="font-semibold text-lg">
                            <TextFormatter text={exp.title} />
                        </h3>
                        {exp.company && (
                            <span className="font-semibold text-lg italic text-[#008000] leading-5">
                                {<TextFormatter text={exp.company} />}
                            </span>
                        )}
                        <p className="text-gray-600">{exp.date}</p>
                        <ul className="list-inside mt-1 space-y-1 text-justify">
                            {exp.description.map((detail, i) => (
                                <li key={i}>
                                    <TextFormatter text={detail} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
