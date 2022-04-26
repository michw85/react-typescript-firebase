import logo from "../../img/logo.png";
import girl1 from "../../img/girl1.jpg";
import girl2 from "../../img/girl2.jpg";
import men1 from "../../img/men1.jpg";
import men2 from "../../img/men2.jpg";
import { IUser } from "../../../types";

export const users: IUser[] = [
    {
      _id: '1',
      avatar: logo,
      name: 'Mike Vorontsov',
      isInNetwork: true,
    },
    {
      _id: '2',
      avatar: girl1,
      name: "Emma Smith",
      isInNetwork: false,
    },
    {
      _id: '3',
      avatar: men1,
      name: "Ivan Ivanov",
      isInNetwork: true,
    },
    {
      _id: '4',
      avatar: girl2,
      name: "Olga Che",
      isInNetwork: true,
    },
    {
      _id: '5',
      avatar: men2,
      name: "Vlad Donev",
      isInNetwork: false,
    },
  ];