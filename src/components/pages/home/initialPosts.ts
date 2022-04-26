import { IPost } from "../../../types";

export const initialPosts: IPost[] = [
    {
      author: {
        _id: "abc",
        avatar: "https://cdn.iconscout.com/icon/free/png-256/national-geographic-461820.png",
        name: "National Geographic",
      },
      content: 'smth about',
      createdAt: '1 hour ago',
      images: [
          'https://images.unsplash.com/photo-1636237624676-2d1eb0eeec0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxnZW9ncmFwaGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
          'https://images.unsplash.com/photo-1632721708054-124a7033d638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxnZW9ncmFwaGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
          'https://images.unsplash.com/photo-1616992092377-8b1621a37121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGdlb2dyYXBoaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
          'https://images.unsplash.com/photo-1430514731097-e2d6deb9ebd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGdlb2dyYXBoaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
          'https://images.unsplash.com/photo-1617250273827-b3c3091e1164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',

      ],
    },
  ]