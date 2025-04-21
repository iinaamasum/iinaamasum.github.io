import React from 'react';
import TextFormatter from '../components/TextFormatter';
import teachingServicesData from '../database/teachingServices.json';

const TeachingServices = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
                Teaching & Services
            </h1>
            <div className="space-y-8">
                {teachingServicesData.teachingServices.map((service, idx) => (
                    <div key={idx} className="border-l-4 border-gray-300 pl-4">
                        <h3 className="font-semibold text-lg">
                            <TextFormatter text={service.title} />
                        </h3>
                        {service.organization && (
                            <span className="italic font-semibold text-[#008000] leading-5">
                                {<TextFormatter text={service.organization} />}
                            </span>
                        )}

                        <p className="text-gray-600">{service.date}</p>
                        <ul className="list-inside mt-1 space-y-1 text-justify">
                            {service.description.map((detail, i) => (
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

export default TeachingServices;
