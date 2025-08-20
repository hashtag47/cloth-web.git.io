import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App.jsx";
// import { UserProvider } from "./contexts/user.provider.jsx";
// import { CategoriesProvider } from "./contexts/categories.provider.jsx";
// import { CartDropdownProvider } from "./contexts/cart-dropdown.provider.jsx";
import { store, persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils.js";

import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          {/* <CartDropdownProvider> */}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
          {/* </CartDropdownProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
