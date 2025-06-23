import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <DownloadApp />
      <Footer />
    </Box>
  );
}
export default App;