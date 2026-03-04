function ScreenCover({isCovered = false}) {
  if(isCovered){
    return(
        <>
            <div className="Cover fixed inset-0 bg-[#261E1E] bg-none bg-repeat bg-scroll bg-0% 0% opacity-50 w-full h-full float-left z-2000"></div>
        </>
    )
  }
}

export default ScreenCover;
