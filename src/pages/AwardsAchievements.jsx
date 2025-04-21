import React from 'react';
import TextFormatter from '../components/TextFormatter';
import awardsAchievementsData from '../database/awardsAchievements.json';

const AwardsAchievements = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
                Awards & Achievements
            </h1>
            <div className="space-y-8">
                {awardsAchievementsData.awardsAchievements.map((award, idx) => (
                    <div key={idx} className="border-l-4 border-gray-300 pl-4">
                        <h3 className="font-semibold text-lg">
                            <TextFormatter text={award.title} />
                        </h3>
                        {award.organization && (
                            <span className="italic font-semibold text-[#008000] leading-5">
                                {<TextFormatter text={award.organization} />}
                            </span>
                        )}
                        <p className="text-gray-600">{award.date}</p>
                        <ul className="list-inside mt-1 space-y-1 text-justify">
                            {award.description.map((detail, i) => (
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

export default AwardsAchievements;
