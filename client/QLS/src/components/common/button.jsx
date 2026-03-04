import { Link } from "react-router-dom";

function Button({title,className,btnType,isLink = false,path = "",onClick}){
    
    const buttonContent = (
        <button
            className={className}
            type={btnType}
            onClick={onClick}
        >
            {title}
        </button>
    );

    if(isLink){
        return(
            <>
                <Link to={path}>
                    {buttonContent}
                </Link>
            </>
        );
    }

    return buttonContent;
};

export default Button;