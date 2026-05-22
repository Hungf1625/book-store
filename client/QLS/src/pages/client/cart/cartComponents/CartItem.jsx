import { useState, useMemo, useEffect} from "react";
import { Link } from "react-router-dom";

import Button from "../../../../components/common/button";
import QuantityCollector from "../../../../components/common/QuantitySelector";
import icon from "../../../../assets/maxresdefault.jpg";

const formatVND = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

function CartItem({
  LinkTo,
  Title,
  Discount,
  Price,
  initialQuantity,
  onCheckedChange,
  setCheck = false,
  maxItems = 1,
  selectAll = false
}) {
  const [isChecked, setIsChecked] = useState(setCheck);
  const [quantity, setQuantity] = useState(initialQuantity);

  const newPrice = useMemo(() => {
    return Price - (Price * Discount) / 100;
  }, [Price, Discount]);

  const total = useMemo(() => {
    return newPrice * quantity;
  }, [newPrice, quantity]);

  const handleCheckbox = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
  };

  useEffect(() => {
    setIsChecked(selectAll);
  }, [selectAll]);

  useEffect(() => {
    onCheckedChange({
      value: isChecked ? total : 0,
      isChecked: isChecked,
    });
  }, [isChecked, total, onCheckedChange]);

  const trashcanIcon = (
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
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );

  return (
    <>
      <div className="flex w-full mt-2 p-0 bg-white rounded-md">
        <input
          type="checkbox"
          className="m-4 accent-green-600"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        <Link to={LinkTo}>
          <img src={icon} alt="" className="p-2 w-30 h-30" />
        </Link>
        <div className="p-2 w-90 flex flex-col item_context">
          <Link to={LinkTo}>
            <span className="line-clamp-2">{Title}</span>
          </Link>
          <div className="mt-9">
            {/* cart item price */}
            <span className="font-medium text-green-700">
              {formatVND(newPrice)}
            </span>
            <span className="text-gray-400 line-through ml-1 pt-1">
              {formatVND(Price)}
            </span>
          </div>
        </div>
        <div className="w-30 flex justify-center items-center">
          <div className="flex items-center">
            <QuantityCollector state={quantity} setState={setQuantity} maxAvaiableItems={maxItems}/>
          </div>
        </div>
        <div className="w-50 flex justify-center items-center">
          <span className="font-medium text-green-700">{formatVND(total)}</span>
        </div>
        <div className="flex justify-center items-center">
          <Button
            title={trashcanIcon}
            className="p-5 hover:cursor-pointer hover:text-green-700"
          />
        </div>
      </div>
    </>
  );
}

export default CartItem;
