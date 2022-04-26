import { Avatar, Button, Card, Chip } from "@mui/material";
import React from "react";
import { useAuth } from "../../providers/useAuth";
import {signOut} from 'firebase/auth'

const User: React.FC = () => {
  const { user, ga } = useAuth();
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 1,
        backgroundColor: "#d2e3f7",
        border: "none",
        borderRadius: 3,
        marginBottom: 2
      }}
    >
      <Chip
        avatar={<Avatar alt="photo" src={user?.avatar} />}
        label={user?.name || 'Noname'}
        variant="outlined"
        sx={{ display: 'flex', marginBottom: 2}}
      />
      <Button 
      variant="outlined"
      onClick={() => signOut(ga)}
      >Exit</Button>
    </Card>
  );
};

export default User;
