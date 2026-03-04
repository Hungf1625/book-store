import { useRef } from "react";

function FilterItem({ onChange, title, value, checked = false, type }) {
  const filterItemRef = useRef();
  return (
    <>
      <li>
        <input
          ref={filterItemRef}
          className="p-2 accent-green-600"
          type="checkbox"
          checked={checked}
          value={value}
          onChange={(e) => onChange(e.target.value, e.target.checked, type)}
        />
        <span className="p-1">{title}</span>
      </li>
    </>
  );
}

export default FilterItem;
