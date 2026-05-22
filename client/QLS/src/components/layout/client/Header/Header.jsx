import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import icon from "../../../../assets/maxresdefault.jpg";
import "./Header.css";
import SearchBar from "../../../common/searchBar";
import Button from "../../../common/button";

function Header() {
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [isAccountBtnHovered,setIsAccountBtnHovered] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentSearchValue, setCurrentSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSearchValue(searchValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`);
    }else{
      navigate(`/category`);
    }
  }

  return (
    <>
      <div className="relative top-0 right-0 left-0 flex justify-between header pl-70 pr-70 bg-white z-40">
        <div className="flex">
          <Link to="/"><img className="h-15 w-15 object-cover icon_img" src={icon} alt="" /></Link>
          <ul className="navbar">
            <li className="navitems text-lg">
              <Link to="/" className="font-medium">Trang chủ</Link>
            </li>
            <li
              className={
                isCategoryHovered ? "navitems navitem_activated text-lg" : "navitems text-lg"
              }
              onMouseEnter={() => setIsCategoryHovered(true)}
              onMouseLeave={() => setIsCategoryHovered(false)}
            >
              <Link to="/category" className="font-medium">Thể loại sách</Link>
            </li>
            <li className="navitems text-lg"><Link to='/cart' className="font-medium">Giỏ hàng</Link></li>
          </ul>
        </div>

        <SearchBar
          placeHolder={
            currentSearchValue == "" ? "Tìm kiếm sách" : currentSearchValue
          }
          value={searchValue}
          onChange={handleSearch}
          onClick={handleSubmit}
        />

        <div className={isAccountBtnHovered ? "flex m-5 mt-5 accountBtn navitem_activated" : "flex m-5 mt-5 accountBtn"} 
          onMouseEnter={() => setIsAccountBtnHovered(true)}
          onMouseLeave={() => setIsAccountBtnHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>

      <div
        className={
          isCategoryHovered
            ? "ml-90 top-16 w-120 bg-green-100 absolute category z-50"
            : "category_none"
        }
        onMouseEnter={() => setIsCategoryHovered(true)}
        onMouseLeave={() => setIsCategoryHovered(false)}
      >
        <ul>
          <li className="category_item">test</li>
          <li className="category_item">test</li>
          <li className="category_item">test</li>
          <li className="category_item">test</li>
          <li className="category_item">test</li>
        </ul>
      </div>

      <div
        className={
          isAccountBtnHovered
            ? "ml-376 top-2 m-14 w-33 shadow-2xl absolute rounded-b-lg z-50 bg-white"
            : "category_none"
        }
        onMouseEnter={() => setIsAccountBtnHovered(true)}
        onMouseLeave={() => setIsAccountBtnHovered(false)}
      >
        <ul className="m-2">
          <Button 
            btnType="Button"
            className="hover:bg-green-800 text-white font-semibold hover:text-white py-2 px-4 border bg-green-600 rounded"
            title="Đăng nhập"
            isLink={true}
            path="/Login"
          />
          <Button
            btnType="Button"
            className="mt-1 bg-transparent hover:bg-green-800 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded w-28.5"
            title="Đăng ký"
            isLink={true}
            path="/Register"
          />
        </ul>
      </div>
    </>
  );
}

export default Header;
