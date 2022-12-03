import styles from "./Layout.module.css"
import { LayoutProps } from "./Layout.props"
import cn from "classnames"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { Footer } from "./Footer/Footer"

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
            <Footer />
        </>
    )
}
