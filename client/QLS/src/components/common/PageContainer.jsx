function PageContainer({children ,isFlex = false}){

    const classname = isFlex ? "mt-2 px-80 flex" : "mt-2 px-80";

    return(<>
        <div className={classname}>
            {children}
        </div>
    </>)
}

export default PageContainer;