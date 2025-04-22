import { Route, Routes, useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const showSidebarOnMobile = ['/', '/portfolio', '/portfolio/'].includes(
        location.pathname
    );

    return (
        <div className="max-w-screen-xl mx-auto cormorant-garamond-regular text-lg">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Sidebar */}
                <div
                    className={`md:col-span-3 ${
                        showSidebarOnMobile
                            ? 'block md:block'
                            : 'hidden md:block'
                    }`}
                >
                    <div className="sticky top-0 left-0">
                        <Sidebar />
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-9 md:pl-6 md:py-10 py-6 px-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Home />} />
                        <Route path="/portfolio/" element={<Home />} />{' '}
                        {/* Added trailing slash route */}
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
