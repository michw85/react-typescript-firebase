import { Box, TextField } from "@mui/material";
import React, { useState, KeyboardEvent } from "react";
import { IPost, TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUsers";
import { useAuth } from "../../providers/useAuth";

interface IAddPost {
  setPost: TypeSetState<IPost[]>;
}

const AddPost: React.FC<IAddPost> = ({ setPost }) => {
  const [content, setContent] = useState<string>("");
  const {user} = useAuth()

  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter"  && user) {
      setPost((prev) => [
        {
          author: user,
          content,
          createdAt: "5 min ago",
        },
        ...prev,
      ]);
      setContent('')
    }
  };
  return (
    <Box
      sx={{
        border: "1px solid #e2e2e2",
        borderRadius: "10px",
        backgroundColor: "#d2e3f7",
        padding: 2,
      }}
    >
      <TextField
        label="How are You?"
        variant="outlined"
        InputProps={{
          sx: {
            border: "none",
            borderRadius: "25px",
            backgroundColor: "#F9F9F9",
            color: '#004AAD'
          },
        }}
        sx={{ width: "100%" }}
        onKeyDown={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
