import { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PageContainer from "../../../components/common/PageContainer";
import ItemsContainer from "../../../components/common/ItemsContainer";
import ProductCard from "../../../components/common/ProductCard";
import icon from "../../../assets/maxresdefault.jpg";
import Pagination from "@mui/material/Pagination";
import CategoryFilter from "./BookFilters/CategoryFilter";
import AdditionalFilter from "./BookFilters/AdditionalFilter";

function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const qParam = searchParams.get("q");
  const parentId = searchParams.get("parentId") || "";
  const childrenId = searchParams.get("childrenId") || "";

  const initialState = useMemo(() => {
    var finalChildrenId;
    if (parentId === childrenId) {
      searchParams.set("childrenId", "");
      finalChildrenId = "";
    } else {
      finalChildrenId = childrenId;
    }

    return {
      q: qParam,
      Quantity: "Mới nhất",
      SortBy: "Còn hàng",
      parentId: parentId,
      childrenId: finalChildrenId,
    };
  }, [qParam, parentId, childrenId]);

  const [filterState, setFilterState] = useState(initialState);

  useEffect(() => {
    setFilterState(initialState);
  }, [initialState]);

  const currentQuery = useMemo(
    () => ({
      q: qParam || "",
      Quantity: filterState.Quantity,
      SortBy: filterState.SortBy,
      parentId: filterState.parentId,
      childrenId: filterState.childrenId,
    }),
    [
      qParam,
      filterState.Quantity,
      filterState.SortBy,
      filterState.parentId,
      filterState.childrenId,
    ],
  );

  console.log("query", currentQuery);

  const handleFetchPageItems = (e, value) => {
    console.log(value);
  };

  const handleCategoryChange = useCallback(
    (categoryData) => {
      setFilterState((prev) => ({
        ...prev,
        parentId: categoryData.parentId,
        childrenId: categoryData.childrenId,
      }));

      const newParams = new URLSearchParams(searchParams);

      if (categoryData.parentId) {
        newParams.set("parentId", categoryData.parentId);
      } else {
        newParams.delete("parentId");
      }

      if (categoryData.childrenId) {
        newParams.set("childrenId", categoryData.childrenId);
      } else {
        newParams.delete("childrenId");
      }

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const handleAdditionalFilterChange = useCallback(
    (additionalData) => {
      setFilterState((prev) => ({
        ...prev,
        SortBy: additionalData.SortBy,
        Quantity: additionalData.Quantity,
      }));

      const newParams = new URLSearchParams(searchParams);
      newParams.set("SortBy", additionalData.SortBy);
      newParams.set("Quantity", additionalData.Quantity);
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  return (
    <>
      <PageContainer>
        <div className="flex gap-3">
          <ItemsContainer
            title={
              <>
                <span className="text-green-700 font-medium text-2xl">
                  LỌC THEO
                </span>
              </>
            }
          >
            <div className="p-3 w-80">
              <CategoryFilter
                onFilterChange={handleCategoryChange}
                resetKey={qParam || ""} /* use search query as reset trigger */
                childrenId={childrenId}
                parentId={parentId}
              />
            </div>
          </ItemsContainer>

          <ItemsContainer
            title={
              <>
                <AdditionalFilter
                  onFilterChange={handleAdditionalFilterChange}
                  resetKey={qParam || ""}
                />
              </>
            }
          >
            <div className="flex flex-col">
              <div className="w-full flex flex-wrap">
                <Link to="/chi-tiet-sach?id=36">
                  <ProductCard
                    image={icon}
                    title="Test"
                    price={18000}
                    originalPrice={36000}
                    discount={36}
                    labels={["Test"]}
                    isCategory={true}
                  />
                </Link>
              </div>
              <Pagination
                className="px-50 pt-10"
                count={10}
                onChange={handleFetchPageItems}
                showFirstButton
                showLastButton
              />
            </div>
          </ItemsContainer>
        </div>
      </PageContainer>
    </>
  );
}

export default CategoryPage;
