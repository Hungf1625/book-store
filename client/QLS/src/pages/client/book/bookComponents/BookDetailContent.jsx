import TableRow from "../../../../components/common/TableRow"
import ItemsContainer from "../../../../components/common/ItemsContainer";

function BookDetailContent() {
  return (
    <div className="rounded-2xl mb-3">
      <ItemsContainer
        title={
          <span className="font-bold information_text">Thông tin chi tiết</span>
        }
      >
        <table className="w-full">
          <tbody>
            <TableRow title="Mã hàng" value="test" isLink={true} path="/test" />
            <TableRow title="Nhà cung cấp" value="test" />
            <TableRow title="Tác giả" value="test" />
            <TableRow title="Nhà XB" value="test" />
            <TableRow title="Năm XB" value="test" />
            <TableRow title="Trọng lượng (gr)" value="Test" />
            <TableRow title="Kích thước bao bì" value="test" />
            <TableRow title="Số trang" value="test" />
            <TableRow title="Hình thức" value="test" />
          </tbody>
        </table>
      </ItemsContainer>
    </div>
  );
}

export default BookDetailContent