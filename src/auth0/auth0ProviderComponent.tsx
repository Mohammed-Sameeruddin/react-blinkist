import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

interface AuthProps {
  children: React.ReactNode;
}

const Auth0ProviderComponent = (props: AuthProps) => {
  const navigate = useNavigate();
  const domain: string = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

  const onRedirectCallBack = () => {
    navigate("/library");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + "/library"}
      onRedirectCallBack={onRedirectCallBack}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0ProviderComponent;
