import { useReducer, useEffect, useMemo } from "react";

  const initialState = {
    first: {isShow: false, filterOption: "Mới nhất"},
    second: {isShow: false, filterOption: "Còn hàng"}
  };

  function filterReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'UPDATE_FIRST':
      return {
        ...state,
        first: { ...state.first, filterOption: action.payload }
      };
    case 'UPDATE_SECOND':
      return {
        ...state,
        second: { ...state.second, filterOption: action.payload }
      };
    case 'TOGGLE_FIRST':
      return {
        ...state,
        first: { ...state.first, isShow: !state.first.isShow }
      };
    case 'TOGGLE_SECOND':
      return {
        ...state,
        second: { ...state.second, isShow: !state.second.isShow }
      };
    default:
      return state;
  }
}

function AdditionalFilter({ onFilterChange, resetKey }) {
  const styleListItem = (isActive) =>
    `p-2 border-b border-b-gray-200 hover:bg-gray-100 hover:cursor-pointer ${isActive ? "bg-gray-100" : ""}`;

  const [state,dispatch] = useReducer(filterReducer,initialState)

  useEffect(()=>{
    dispatch({type: 'RESET'});
  },[resetKey])

  const filterParams = useMemo(() => ({
    SortBy: state.first.filterOption,
    Quantity: state.second.filterOption,
  }), [state.first.filterOption, state.second.filterOption]);

  useEffect(() => {
    onFilterChange?.(filterParams);
  }, [filterParams, onFilterChange]);

  return (
    <>
      <div className="mt-2 flex flex-col">
        <span className="font-medium">KẾT QUẢ TÌM KIẾM:</span>
        <ul className="flex flex-row gap-3 pl-100">
          <li className="mt-2">Sắp xếp theo</li>
          <li>
            <button
              className={
                state.first.isShow
                  ? "border border-green-400 p-2 rounded w-40 text-left hover:cursor-pointer"
                  : "border border-gray-400 p-2 rounded w-40 text-left hover:cursor-pointer"
              }
              onClick={() => dispatch({type:'TOGGLE_FIRST'})}
            >
              {state.first.filterOption}
            </button>
            <ul
              className={
                state.first.isShow
                  ? "w-40 bg-white border border-gray-300 absolute z-9999"
                  : "hidden"
              }
            >
              <li
                className={styleListItem(
                  state.first.filterOption === "Mới nhất",
                )}
                onClick={() => dispatch({type: 'UPDATE_FIRST',payload: "Mới nhất"})}
              >
                Mới nhất
              </li>
              <li
                className={styleListItem(
                  state.first.filterOptionn === "Giá từ cao đến thấp",
                )}
                onClick={() =>
                  dispatch({type: 'UPDATE_FIRST',payload: "Giá từ cao đến thấp"})
                }
              >
                Giá từ cao đến thấp
              </li>
              <li
                className={styleListItem(
                  state.first.filterOption === "Giá từ thấp đến cao",
                )}
                onClick={() =>
                  dispatch({type: 'UPDATE_FIRST',payload: "Giá từ thấp đến cao"})
                }
              >
                Giá từ thấp đến cao
              </li>
            </ul>
          </li>
          <li>
            <button
              className={
                state.second.isShow
                  ? "border border-green-400 p-2 rounded w-40 text-left hover:cursor-pointer"
                  : "border border-gray-400 p-2 rounded w-40 text-left hover:cursor-pointer"
              }
              onClick={() => dispatch({type: 'TOGGLE_SECOND'})}
            >
              {state.second.filterOption}
            </button>
            <ul
              className={
                state.second.isShow
                  ? "w-40 bg-white border border-gray-300 absolute z-9999"
                  : "hidden"
              }
            >
              <li
                className={styleListItem(
                  state.second.filterOption === "Còn hàng",
                )}
                onClick={() => dispatch({type: 'UPDATE_SECOND',payload: "Còn hàng"})}
              >
                Còn hàng
              </li>
              <li
                className={styleListItem(
                  state.second.filterOption === "Hết hàng",
                )}
                onClick={() => dispatch({type: 'UPDATE_SECOND',payload: "Hết hàng"})}
              >
                Hết hàng
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AdditionalFilter;
