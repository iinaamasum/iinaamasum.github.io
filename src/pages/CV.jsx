import React from 'react';

const CV = () => {
    const cvPath = '/portfolio/Masum_CV.pdf';
    const driveLink =
        'https://drive.google.com/file/d/1TP-3W7zL0J1K8mLCP-eyNhOKspS2Y7Ki/view?usp=sharing';
    return (
        <div className="flex flex-col h-screen">
            <h1 className="text-4xl font-bold mb-4 border-b pb-2">
                Curriculum Vitae (
                <a
                    href={driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                    Open in Drive Instead
                </a>
                )
            </h1>

            <div className="flex-grow border border-gray-300 rounded-md overflow-hidden">
                {/* PDF Content */}
                <iframe
                    src={cvPath}
                    className="w-full h-full"
                    title="CV"
                    style={{ border: 'none' }}
                />
            </div>
        </div>
    );
};

export default CV;
