import { BrowserRouter, Routes, Route } from "react-router-dom";

// ── Layouts ──────────────────────────────────────────────────────────────────
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductsLayout from "./layouts/ProductsLayout";
import UsersLayout from "./layouts/UsersLayout";
import UserLayout from "./layouts/UserLayout";
import AuthLayout from "./layouts/AuthLayout";

// ── Root pages ────────────────────────────────────────────────────────────────
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// ── Dashboard pages ───────────────────────────────────────────────────────────
import Overview from "./pages/dashboard/Overview";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import Orders from "./pages/dashboard/Orders";

// ── Products pages ────────────────────────────────────────────────────────────
import PickProduct from "./pages/products/PickProduct";
import ProductDetail from "./pages/products/ProductDetail";

// ── Users pages ───────────────────────────────────────────────────────────────
import PickUser from "./pages/users/PickUser";
import UserPosts from "./pages/users/UserPosts";
import UserFollowers from "./pages/users/UserFollowers";
import UserSettings from "./pages/users/UserSettings";

// ── Auth pages ────────────────────────────────────────────────────────────────
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// ── Redirect ──────────────────────────────────────────────────────────────────
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
         * ════════════════════════════════════════════════════
         *  AUTH LAYOUT  –  completely outside RootLayout
         *  Centered card, no navbar/footer
         * ════════════════════════════════════════════════════
         */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        {/*
         * ════════════════════════════════════════════════════
         *  ROOT LAYOUT  –  top Navbar + Footer, <Outlet /> in the middle
         * ════════════════════════════════════════════════════
         */}
        <Route path="/" element={<RootLayout />}>
          {/* index route: exact "/" */}
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          {/*
           * ── DASHBOARD LAYOUT ──────────────────────────────
           *  Sidebar left + <Outlet /> right
           */}
          <Route path="dashboard" element={<DashboardLayout />}>
            {/* end prop on the NavLink inside: matches only "dashboard" exactly */}
            <Route index element={<Overview />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          {/*
           * ── PRODUCTS LAYOUT ───────────────────────────────
           *  Master-detail: product list left, details right
           *  The list sidebar keeps its <input> state across navigations
           *  because ProductsLayout never unmounts while we browse products.
           */}
          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<PickProduct />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          {/*
           * ── USERS LAYOUT ─────────────────────────────────
           *  User list (left) + UserLayout (nested, right)
           *  Demonstrates layout-inside-layout-inside-layout (3 Outlets)
           */}
          <Route path="users" element={<UsersLayout />}>
            <Route index element={<PickUser />} />

            {/* UserLayout: header with user name + tab bar */}
            <Route path=":id" element={<UserLayout />}>
              {/*
               * index → redirect to posts
               * This shows an index route that immediately redirects,
               * so "/users/42" always lands on "/users/42/posts"
               */}
              <Route index element={<Navigate to="posts" replace />} />
              <Route path="posts" element={<UserPosts />} />
              <Route path="followers" element={<UserFollowers />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
          </Route>

          {/* Catch-all 404 – must be last */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
