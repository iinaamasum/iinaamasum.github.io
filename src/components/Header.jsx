import { Link } from "react-router-dom";
import { name } from "../database/sidebar.json";

const Header = () => {
  return (
    <div className="flex justify-start items-center gap-4 border-b border-gray-200 h-20">
      <div className="cormorant-garamond-bold text-2xl px-10">
        <Link to="/portfolio">{name}</Link>
      </div>
      <div className="ml-6">
        <ul className="flex justify-start items-center gap-6">
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>Research & Developed Artifacts</li>
          <li>Experience</li>
          <li>Teaching & Services</li>
          <li>Awards</li>
          <li>CV</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
