import styles from "./Button.module.css"
import { ButtonProps } from "./Button.props"
import cn from "classnames"
import ArrowIcon from './Vector.svg'
export const Button = ({ appearance, children,className,arrow='none',...props }: ButtonProps): JSX.Element => {
    /*  switch(appearance){
        case "primary":
            return <h1 className={styles.h1}>{children}</h1>
        case "ghost":
            return <h2 className={styles.h2}>{children}</h2>
       
    } */
    return (
        <>
            <button className={cn(styles.button,className,{
                [styles.primary]:appearance=='primary',
                [styles.ghost]:appearance=='ghost'
            })} {...props}>{children}
            {arrow!=='none'&& <span className={cn(styles.arrow,{
                [styles.down]:arrow=='down'
            })}><ArrowIcon/></span>} </button>
        </>
    )
}
