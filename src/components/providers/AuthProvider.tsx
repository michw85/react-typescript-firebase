import { createContext, FC, useEffect, useState, useMemo } from "react";
import { IUser, TypeSetState } from "../../types";
import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { SelectUnstyledRootSlotProps } from "@mui/base";
import { walkUpBindingElementsAndPatterns } from "typescript";
import { users } from "../layout/sidebar/dataUsers";
import {getFirestore} from "firebase/firestore"
// import {useLoading} from 'react-hook-loading'
// import { Lines } from "react-preloaders";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();
  const db = getFirestore()

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      console.log(user);
      if (authUser)
        setUser({
          _id: authUser.uid,
          avatar: users[1].avatar,
          name: authUser.displayName || "",
        });
      else {
        setUser(null);
      }
    });
    return () => {
      unListen();
    };
    // eslint-disable-next-line
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
      db
    }),
    [user, ga]
  );
if (values === null){
    return <p>Loading profile...</p>;
}
  return(
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
};
