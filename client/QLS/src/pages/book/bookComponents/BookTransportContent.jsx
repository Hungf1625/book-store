import ItemsContainer from "../../../components/common/ItemsContainer";

function BookTransportContent() {
  return (
    <div className="rounded-2x1 mb-3">
      <ItemsContainer
        title={
          <span className="font-bold information_text">
            Thông tin vận chuyển
          </span>
        }
      ></ItemsContainer>
    </div>
  );
}

export default BookTransportContent;
