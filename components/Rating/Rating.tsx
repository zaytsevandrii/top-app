import styles from "./P.module.css"
import { PProps } from "./P.props"
import cn from "classnames"

export const P = ({size='m', children,className,...props}: PProps): JSX.Element => {
 
    return (
        <>
        <p className={cn(styles.p,className,{
            [styles.p1]:size=='s',
            [styles.p2]:size=='m',
            [styles.p3]:size=='l',
        })} {...props}>{children}</p>
          
        </>
    )
}
