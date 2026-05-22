import { useState, useEffect,useMemo } from "react";

import FilterItem from "./FilterItem";
import FilterBox from "./FilterBox";

function CategoryFilter({
  filterArray = [],
  onFilterChange,
  resetKey,
  parentId = "",
  childrenId = ""
}) {
  filterArray = ["test", "test2", "test3", "test4", "test5", "test6"];

  const initialState = useMemo(
    () => ({
      parentId: parentId,
      childrenId: childrenId,
    }),
    [resetKey],
  );

  const [queryString, setQueryString] = useState(initialState);

  useEffect(() => {
    setQueryString(initialState);
  }, [initialState]);

  useEffect(() => {
    onFilterChange(queryString);
  }, [queryString, onFilterChange]);

  const filteredItems = filterArray.filter(
    (item) => item !== queryString.parentId,
  );

  const handleFilterChange = (value, checked, type) => {
    if (checked) {
      setQueryString((prev) => ({
        ...prev,
        [type]: value,
      }));
    } else {
      setQueryString((prev) => ({
        ...prev,
        [type]: "",
        childrenId: "",
      }));
    }
  };

  if (queryString.parentId != "") {
    return (
      <>
        <FilterBox title="Danh mục chính" checked={true}>
          <FilterItem
            title={queryString.parentId}
            value={queryString.parentId}
            type="parentId"
            checked={queryString.parentId !== ""}
            onChange={handleFilterChange}
          />
        </FilterBox>

        <FilterBox title="Danh mục phụ" visibleShowMore={true}>
          {filteredItems.map((item) => (
            <FilterItem
              title={item}
              key={item}
              value={item}
              type="childrenId"
              checked={queryString.childrenId === item}
              onChange={handleFilterChange}
            />
          ))}
        </FilterBox>
      </>
    );
  }

  return (
    <>
      <FilterBox title="Danh mục chính" visibleShowMore={true}>
        {filteredItems.map((item) => (
          <FilterItem
            key={item}
            title={item}
            value={item}
            type="parentId"
            checked={queryString.parentId === item}
            onChange={handleFilterChange}
          />
        ))}
      </FilterBox>
    </>
  );
}

export default CategoryFilter;
