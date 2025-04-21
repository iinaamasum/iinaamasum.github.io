import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';

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
                        {/* Catch-all route */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
