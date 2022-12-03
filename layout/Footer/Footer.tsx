import styles from "./Footer.module.css"
import { FooterProps } from "./Footer.props"
import cn from "classnames"

export const Footer = ({className,...props}: FooterProps): JSX.Element => {
    return (
      <footer className={cn(className,styles.footer)} {...props}>
        Copyright © OwlTop  2022 - 2023
      </footer>
    )
}
