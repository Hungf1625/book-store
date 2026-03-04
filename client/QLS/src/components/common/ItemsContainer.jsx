function ItemsContainer({ title, children }) {
  return (
    <>
      <div className="p-4 hp_block bg-white rounded-md mb-3">
        <div className="hp_block_head flex">
          {title}
        </div>
        <div className="hp_block_line">
          <div></div>
        </div>
        <div className="hp_block_content flex">{children}</div>
      </div>
    </>
  );
}

export default ItemsContainer;
