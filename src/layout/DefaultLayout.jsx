import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
export default function DefaultLayout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>

    )
}