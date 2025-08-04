import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
export default function DefaultLayout() {
    return (
        <>
            <Header></Header>
            <div className="bg-dark my-0">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </>

    )
}