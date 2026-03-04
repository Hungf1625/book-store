import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Button from "../../components/common/button";

import PageContainer from "../../components/common/PageContainer";
import icon from "../../assets/bannerquatang.webp";
import icon2 from "../../assets/db2c4053daf2ab6068cbbb39b2fcd996.jpg";
import "./BookDetailPage.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import BookModal from "./bookComponents/BookModal";
import BookMainContent from "./bookComponents/BookMainContent";
import BookDetailContent from "./bookComponents/BookDetailContent";
import BookTransportContent from "./bookComponents/BookTransportContent";
import BookRatings from "./bookComponents/BookRatings";

function BookDetailPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);


  const thumbnails = [
    {
      src: icon,
      title: "Test",
      caption: "Test",
      alt: "Test",
      description: "Test",
    },
    {
      src: icon2,
      title: "Test2",
      caption: "Test2",
      alt: "Test2",
      description: "Test2",
    },
    {
      src: icon2,
      title: "Test3",
      caption: "Test3",
      alt: "Test3",
      description: "Tes3",
    },
    {
      src: icon2,
      title: "Test4",
      caption: "Test4",
      alt: "Test4",
      description: "Test4",
    },
    {
      src: icon2,
      title: "Test5",
      caption: "Test5",
      alt: "Test5",
      description: "Test5",
    },
    {
      src: icon2,
      title: "Test6",
      caption: "Test6",
      alt: "Test6",
      description: "Test6",
    },
  ];

  return (
    <>
      <PageContainer>
        <div className="detail_top rounded-2xl mt-2 flex">
          {/* image - title */}
          <div className="bg-white rounded-2xl mr-3 sticky top-4 h-fit mb-3">
            <img src={icon} alt="" className="BookIMG p-4" />
            {/* Gallery*/}
            <div className="flex overflow-x-auto gap-4 px-4 [&::-webkit-scrollbar]:hidden">
              {thumbnails.slice(0, 4).map((book, idx) => (
                <div
                  key={idx}
                  className="shrink-0 cursor-pointer group"
                  onClick={() => {
                    setIndex(idx);
                    setOpen(true);
                  }}
                >
                  <div className="relative">
                    <img
                      src={book.src}
                      alt={book.title}
                      className="w-20.25 h-20 object-cover shadow-md group-hover:scale-105 transition"
                    />
                  </div>
                </div>
              ))}
              {thumbnails.length > 4 && (
                <div
                  className="shrink-0 cursor-pointer group relative"
                  onClick={() => {
                    setIndex(4);
                    setOpen(true);
                  }}
                >
                  <div className="relative">
                    <img
                      src={thumbnails[4].src}
                      alt=""
                      className="w-20 h-20 object-cover shadow-md opacity-40"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        +{thumbnails.length - 4}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*LightBox*/}
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              index={index}
              plugins={[Thumbnails, Captions, Counter, Zoom]}
              thumbnails={{
                position: "bottom",
                width: 80,
                height: 60,
                border: 1,
                borderRadius: 4,
                padding: 2,
                gap: 8,
                showToggle: true,
              }}
              captions={{
                hidden: false,
                descriptionTextAlign: "center",
              }}
              slides={thumbnails.map((book) => ({
                src: book.src,
                alt: book.alt,
                caption: book.caption,
                description: book.description,
              }))}
            />

            <div className="Add_To_Cart&Buy_nowBTN px-3 py-4 flex">
              <Button
                btnType="Button"
                className="mt-1 bg-transparent hover:bg-green-800 text-green-600 font-semibold hover:text-white py-2 px-7 border border-green-600 hover:border-transparent rounded-2xl"
                title={
                  <>
                    <span className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                      </svg>
                      <span>Thêm vào giỏ hàng</span>
                    </span>
                  </>
                }
                isLink={true}
                path="/Register"
              />
              <Button
                btnType="Button"
                className="hover:bg-green-800 text-white font-semibold hover:text-white py-2 px-21 border bg-green-600 rounded-2xl ml-2 buynowBtn"
                title="Mua ngay"
                isLink={true}
                path="/Login"
              />
            </div>
          </div>
          {/* Cột phải - Nội dung chính / param là 1 object*/}
          <div className="flex-1 book_detail">
            <BookMainContent/>
            {/*Book detail*/}
            <BookDetailContent/>
            {/*Transport */}
            <BookTransportContent />
          </div>
        </div>

        <div className="detail_bottom rounded-2xl mt-2" id="rating">
          <BookRatings setOpenModal={setIsRatingModalVisible} />
          <BookModal currentState={isRatingModalVisible} onClose={()=>setIsRatingModalVisible(false)}/> 
        </div>
        
      </PageContainer>
    </>
  );
}

export default BookDetailPage;
