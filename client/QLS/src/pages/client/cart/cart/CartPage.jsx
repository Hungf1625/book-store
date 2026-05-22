import { useState, useCallback } from "react";

import PageContainer from "../../../../components/common/PageContainer";
import CartItem from "./cartComponents/CartItem";
import ItemsContainer from "../../../../components/common/ItemsContainer";

function CartPage() {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckedBox = useCallback((itemId, { isChecked, value }) => {
    setCheckedItems((prev) => {
      const updated = { ...prev };
      if (isChecked) {
        updated[itemId] = value;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectAll(!selectAll);
  }, [selectAll]);

  const total = Object.values(checkedItems).reduce((sum, val) => sum + val, 0);

  return (
    <>
      <PageContainer isFlex={true}>
        <div className="w-full mr-3">
          {" "}
          {/*Cart header */}
          <div className="bg-white p-2 rounded-md flex justify-between">
            <div className="">
              <input 
                type="checkbox" 
                className="m-2 accent-green-600"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              <span className="ml-2 font-medium">Chọn tất cả</span>
            </div>
            <div className="flex gap-21.5 mr-28 pt-0.5">
              <span className="font-medium">Số lượng</span>
              <span className="font-medium">Thành tiền</span>
            </div>
          </div>
          <div className="mt-1 flex flex-col w-full">
            {" "}
            {/*Cart container */}
            <CartItem
              LinkTo="/chi-tiet-sach?id=36"
              Title="Đúng Việc - Một Góc Nhìn Về Câu Chuyện Khai Minh - Bìa Cứng (Tái
              Bản 2023)"
              Price={125000}
              Discount={35}
              initialQuantity={1}
              onCheckedChange={(obj) => handleCheckedBox("item-1", obj)}
              maxItems={2}
              selectAll={selectAll}
            />
            <CartItem
              LinkTo="/chi-tiet-sach?id=36"
              Title="Đúng Việc - Một Góc Nhìn Về Câu Chuyện Khai Minh - Bìa Cứng (Tái
              Bản 2023)"
              Price={155000}
              Discount={35}
              initialQuantity={1}
              onCheckedChange={(obj) => handleCheckedBox("item-2", obj)}
              maxItems={5}
              selectAll={selectAll}
            />
          </div>
          <div></div>
        </div>
        <div className="w-120 h-130 flex flex-col">
          <ItemsContainer
            title={
              <>
                <div className="justify-between flex w-full">
                  <span className="font-medium ">Thành tiền</span>
                  <span>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(total)}
                  </span>
                </div>
              </>
            }
          >
            <div className="justify-between flex w-full">
              <span className="font-medium">Tổng tiền (gồm VAT) </span>
              <span className="text-green-600">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(total - (total * 0.1))}
              </span>
            </div>
          </ItemsContainer>
        </div>
      </PageContainer>
    </>
  );
}

export default CartPage;
