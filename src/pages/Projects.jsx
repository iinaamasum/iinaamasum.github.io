import TextFormatter from '../components/TextFormatter';
import projectsData from '../database/projects.json';

const Projects = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
                Research Interests
            </h1>
            <ul className="list-disc list-inside space-y-2 text-justify">
                {projectsData.interests.map((interest, idx) => (
                    <li key={idx}>{interest}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold border-b border-gray-200 mt-10 mb-4">
                Projects
            </h2>
            <div className="space-y-8">
                {projectsData.projects.map((project, idx) => (
                    <div key={idx} className="border-l-4 border-gray-300 pl-4">
                        <h3 className="font-semibold text-lg">
                            <TextFormatter text={project.title} />
                            {project.note && (
                                <span className="italic font-normal text-[#008000] leading-5">
                                    {<TextFormatter text={project.note} />}
                                </span>
                            )}
                        </h3>
                        <ul className="list-inside mt-1 space-y-1 text-justify">
                            {project.details.map((detail, i) => (
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

export default Projects;
