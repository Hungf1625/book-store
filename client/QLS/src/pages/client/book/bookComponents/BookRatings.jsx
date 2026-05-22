import Rating from "@mui/material/Rating";
import Button from "../../../../components/common/button";
import ItemsContainer from "../../../../components/common/ItemsContainer";

function BookRatings({setOpenModal}) {


  return (
    <ItemsContainer
      title={
        <>
          <div className="grid grid-cols-2 gap-100">
            <div className="">
              <div className="flex flex-col">
                <h1 className="font-bold inline-block pb-3">
                  Đánh giá sản phẩm
                </h1>
                <div className="rating_score_display flex flex-col pl-3">
                  <div className="rating inline-block pl-6 pr-6 pb-2  font-medium">
                    <span className="BE_rating_score text-green-500">3.6</span>
                    <span className="FE_rating">/5</span>
                  </div>
                  <Rating
                    className="inline-block"
                    defaultValue={3.6}
                    precision={0.5}
                    size="medium"
                    readOnly
                  />
                  <span className="pl-3 pt-1 text-gray-400">( 3 đánh giá)</span>
                </div>
              </div>
            </div>

            <div className="relative top-15 left-10">
              <Button
                className="mt-1 bg-transparent hover:bg-green-800 text-green-600 font-semibold hover:text-white py-2 px-7 border border-green-600 hover:border-transparent rounded-2xl hover:cursor-pointer"
                btnType="button"
                onClick={() => setOpenModal(true)}
                title={
                  <>
                    <div className="flex w-60 justify-center">
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                      <span className="pl-2">Viết đánh giá</span>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </>
      }
    >
      <ul className="comments_li">
        <li className="comment flex pb-5">
          <div className="flex flex-col pl-2 w-50 mr-8">
            <span>Test</span>
            <span className="commented_date text-gray-400">created at</span>
          </div>
          <div className="flex flex-col">
            <Rating defaultValue={3.6} precision={0.5} readOnly/>
            <span className="comment_content pl-2">Test</span>
          </div>
        </li>
      </ul>
    </ItemsContainer>
  );
}

export default BookRatings;
