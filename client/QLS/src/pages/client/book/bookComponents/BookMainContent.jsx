import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Rating from "@mui/material/Rating";

function BookMainContent() {
  return (
    <div className="bg-white rounded-2xl mb-3 p-3 flex flex-col">
      <h1 className="pb-4">Chung Một Ngôi Nhà - Atlas 54 Dân Tộc Việt Nam</h1>
      <div className="additional_info flex">
        <div className="left w-95 inline-block">
          <div className="inline_block pb-2">
            <span>Nhà cung cấp: </span>
            <Link
              to="/"
              className="text-green-400 hover:cursor-pointer hover:text-green-700"
            >
              Test
            </Link>
          </div>
          <div className="inline-block">
            <span>Nhà xuất bản: </span> <span>Test</span>
          </div>
        </div>

        <div className="right inline-block">
          <div className="inline_block pb-2">
            <span>Tác giả: </span> <span> Test</span>
          </div>
          <div className="inline-block">
            <span>Độ tuổi: </span> <span>Test</span>
          </div>
        </div>
      </div>
      <div className="Rating_BuyCount pt-2 flex">
        <div></div>
        <ScrollLink
          to="rating"
          smooth={true}
          className="hover:cursor-pointer pt-1"
        >
          <Rating size="small" defaultValue={3.5} precision={0.5} readOnly />
        </ScrollLink>
        <div className="pl-3 text-gray-700">|</div>
        <div className="pl-3">
          <span className="text-gray-500">Đã bán </span> <span>36</span>
        </div>
      </div>
      <div className="price-box flex items-center gap-3">
        <span className="text-green-600 font-bold text-3xl">
          765.000<span className="text-lg align-top">đ</span>
        </span>
        <span className="text-gray-400 line-through text-lg pt-1">
          900.000đ
        </span>
        <span className="px-1 py-1 bg-green-500 text-white font-bold text-sm rounded">
          -36%
        </span>
      </div>
    </div>
  );
}

export default BookMainContent;
