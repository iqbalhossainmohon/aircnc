import { Outlet } from "react-router-dom"
import NavBar from "../components/Shared/NavBar/NavBar"
import Footer from "../components/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="py-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
