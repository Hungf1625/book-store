import { Link } from "react-router-dom";

function CategoryCard({path,icon,title}) {
  return (
    <>
      <Link to={path} className="shrink-0 hover:text-green-600">
        <div className="flex flex-col mr-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded">
          <img src={icon} alt="" className="w-35 h-30" />
          <span className="text-center">{title}</span>
        </div>
      </Link>
    </>
  );
}

export default CategoryCard;
