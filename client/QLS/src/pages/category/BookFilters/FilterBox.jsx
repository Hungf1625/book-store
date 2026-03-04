import { useState } from "react";

import Button from "../../../components/common/button";

function FilterBox({
  title,
  children,
  checked = false,
  visibleShowMore = false,
}) {
  const [showMore,setShowMore] = useState(false);

  const handleShowMore = () =>{
    setShowMore(prev => !prev)
  }

  var className = checked ? "h-5 overflow-hidden border-b border-b-gray-300 pb-8" : "h-26 overflow-hidden";

  if(showMore == true && checked == false) className = "h-full"

  if (visibleShowMore)
    return (
      <>
        <span className="font-medium">{title}</span>
        <div className="m-0 p-2">
          <ol className={className}>{children}</ol>
        </div>
        <Button
          btnType="button"
          className="pt-2 w-full text-center font-semibold text-green-600 hover:cursor-pointer"
          onClick={handleShowMore}
          title={showMore ? "Hiển thị ít lại ▲" : "Hiển thị thêm ▼"}
        />
      </>
    );
  return (
    <>
      <span className="font-medium">{title}</span>
      <div className="m-0 p-2">
        <ol className={className}>{children}</ol>
      </div>
    </>
  );
}

export default FilterBox;
