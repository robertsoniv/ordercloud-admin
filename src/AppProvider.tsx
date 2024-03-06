import { FC } from "react";
import routes from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { OrderCloudProvider } from "@rwatt451/ordercloud-react";
import {
  ALLOW_ANONYMOUS,
  BASE_API_URL,
  CLIENT_ID,
  CUSTOM_SCOPE,
  SCOPE,
} from "./constants";
import { ChakraProvider } from "@chakra-ui/react";

const basename = import.meta.env.VITE_APP_CONFIG_BASE;

const router = createBrowserRouter(routes, { basename });

const AppProvider: FC = () => {
  return (
    <OrderCloudProvider
      baseApiUrl={BASE_API_URL}
      clientId={CLIENT_ID}
      scope={SCOPE}
      customScope={CUSTOM_SCOPE}
      allowAnonymous={ALLOW_ANONYMOUS}
    >
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </OrderCloudProvider>
  );
};

export default AppProvider;
