function QuantityCollector({ state, setState, maxAvaiableItems = 1 }) {
  function handleDecrease() {
    if (state < 2) return;
    setState(state - 1);
  }

  function handleIncrease() {
    if (state >= maxAvaiableItems) return;
    setState(state + 1);
  }

  return (
    <>
      <button
        className="w-6 h-6 md:w-8 md:h-8 rounded-l-lg border-2 border-gray-300 bg-white hover:bg-green-500 hover:text-white hover:border-green-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 text-gray-600 font-bold text-lg md:text-xl flex items-center justify-center transition-all duration-200 shadow-sm"
        onClick={handleDecrease}
        id="decreaseBtn"
      >
        -
      </button>
      <input
        type="text"
        id="quantity"
        value={state}
        className="w-8 h-8 md:w-10 md:h-8 border-y-2 border-gray-300 text-center font-medium text-gray-700 text-sm md:text-base focus:border-green-400"
        inputMode="numeric"
        onChange={(e) => setState(e.target.value)}
        pattern="[0-9]*"
        readOnly
      />

      <button
        className="w-6 h-6 md:w-8 md:h-8 rounded-r-lg border-2 border-gray-300 bg-white hover:bg-green-500 hover:text-white hover:border-green-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 text-gray-600 font-bold text-lg md:text-xl flex items-center justify-center transition-all duration-200 shadow-sm"
        onClick={handleIncrease}
        id="increaseBtn"
      >
        +
      </button>
    </>
  );
}

export default QuantityCollector;
