import { Link } from "react-router-dom";
import useAutoScroll from "../../../hook/useAutoScroll";

import icon from "../../../assets/maxresdefault.jpg";
import icon2 from "../../../assets/8936130671112.webp";
import "./homepage.css";
import ItemsContainer from "../../../components/common/ItemsContainer";
import ProductCard from "../../../components/common/ProductCard";
import Button from "../../../components/common/button";
import CategoryCard from "../../../components/common/CategoryCard";
import PageContainer from "../../../components/common/PageContainer";


function HomePage() {
  const containerRef = useAutoScroll(0.5);
  return (
    <>
      <PageContainer>
        <ItemsContainer
          title={
            <>
              <span className="icon pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
              </span>
              <span className="font-medium text-2xl">Danh mục sản phẩm</span>
            </>
          }
        >
          <div
            ref={containerRef}
            className="category_content_list flex overflow-x-auto flex-nowrap"
          >
            <CategoryCard path="/" icon={icon2} title="Test" />
          </div>
        </ItemsContainer>
        <ItemsContainer
          title={
            <>
              <span className="icon pr-2 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </span>
              <span className="font-medium text-2xl">Sản phẩm mới ra mắt</span>
            </>
          }
        >
          <div className="products_container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <Link to="chi-tiet-sach?id=36" className="pl-2 pr-2">
                <ProductCard
                  image={icon}
                  title="Test"
                  price={18000}
                  originalPrice={36000}
                  discount={36}
                  labels={["Test"]}
                />
              </Link>
            </div>
            <Button
              title="Xem thêm"
              className="bg-transparent hover:bg-green-800 text-green-600 font-semibold hover:text-white hover:cursor-pointer py-2 px-4 border border-green-600 hover:border-transparent rounded-2xl mx-135 mt-5"
              btnType="Button"
              isLink={true}
              path="/category"
            />
          </div>
        </ItemsContainer>
      </PageContainer>
    </>
  );
}

export default HomePage;
