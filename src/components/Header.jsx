import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();

    const isActive = (paths) => paths.includes(location.pathname);

    const linkClass = (paths) =>
        isActive(paths)
            ? 'text-blue-600 font-semibold'
            : 'text-gray-700 hover:text-blue-500';

    return (
        <header className="border-b border-gray-200">
            <div className="flex justify-between items-center h-20 px-6 md:px-10">
                <div
                    className={`text-2xl cormorant-garamond-bold ${linkClass([
                        '/',
                        '/portfolio',
                    ])}`}
                >
                    <Link to="/portfolio">{"Masum's Homepage"}</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    <Link
                        to="/publications"
                        className={linkClass(['/publications'])}
                    >
                        Publications
                    </Link>
                    <Link
                        to="/research-interests-projects"
                        className={linkClass(['/research-interests-projects'])}
                    >
                        Research Interests & Projects
                    </Link>
                    <span className="text-gray-700">Experience</span>
                    <span className="text-gray-700">Teaching & Services</span>
                    <span className="text-gray-700">Awards</span>
                    <span className="text-gray-700">CV</span>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faTimes : faBars}
                        size="lg"
                    />
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <nav className="md:hidden flex flex-col gap-4 px-6 pb-4">
                    <Link
                        to="/publications"
                        className={linkClass(['/publications'])}
                        onClick={toggleMenu}
                    >
                        Publications
                    </Link>
                    <Link
                        to="/research-interests-projects"
                        className={linkClass(['/research-interests-projects'])}
                        onClick={toggleMenu}
                    >
                        Research Interests & Projects
                    </Link>
                    <span onClick={toggleMenu}>Experience</span>
                    <span onClick={toggleMenu}>Teaching & Services</span>
                    <span onClick={toggleMenu}>Awards</span>
                    <span onClick={toggleMenu}>CV</span>
                </nav>
            )}
        </header>
    );
};

export default Header;
