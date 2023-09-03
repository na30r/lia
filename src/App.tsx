import { ConfigProvider, Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Index from "./pages/Products";
import Header from "./component/general/Header";
import Footer from "./component/general/Footer";
import Products from "./pages/Products";
const { Content, Sider } = Layout;
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Yekan",
        },
      }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header />
        <Content className="content">
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/products/:categoryId" element={<Products />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
