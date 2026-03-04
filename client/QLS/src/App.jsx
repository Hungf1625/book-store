import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import HomePage from "./pages/home/home";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import CartPage from "./pages/cart/CartPage";
import BookDetailPage from "./pages/book/BookDetailPage";
import CategoryPage from "./pages/category/categoryPage";
import "./App.css";

const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<ClientLayout />}>
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/search" element={<CategoryPage />} />
            <Route path="/chi-tiet-sach" element={<BookDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route path="/Admin" element={<AdminLayout />}>

          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
