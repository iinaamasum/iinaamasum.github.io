import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AwardsAchievements from './pages/AwardsAchievements';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';
import CV from './pages/CV';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import TeachingServices from './pages/TeachingServices';

function App() {
    return (
        <div className="max-w-screen-xl mx-auto cormorant-garamond-regular text-lg">
            <Header />
            <div className="grid grid-cols-12">
                {/* Sidebar */}
                <div className="col-span-3">
                    <div className="sticky top-0 left-0">
                        <Sidebar />
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-9 pl-6 md:pl-10 py-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Home />} />
                        <Route
                            path="/publications"
                            element={<Publications />}
                        />
                        <Route
                            path="/research-interests-projects"
                            element={<Projects />}
                        />
                        <Route path="/experiences" element={<Experience />} />
                        <Route
                            path="/teaching-services"
                            element={<TeachingServices />}
                        />
                        <Route
                            path="/awards"
                            element={<AwardsAchievements />}
                        />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/blogs/:id" element={<BlogDetail />} />

                        {/* Catch-all route */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
