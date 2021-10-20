import { useContext } from "react";
import { AuthContext, IAuthContext} from "../contexts/authContext";

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}
