import React from "react"
import {  Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { menu } from "./dataMenu";

const MenuItem: React.FC = () => {
    const history = useNavigate()
    return (
        <Card
          variant="outlined"
          sx={{
            padding: 1,
            backgroundColor: "#d2e3f7",
            border: "none",
            borderRadius: 3,
            marginTop: 2,
            marginBottom: 2
          }}
        >
          <List>
              {menu.map(item => ( 
            <ListItem key={item.link} disablePadding>
              <ListItemButton onClick={() => history(item.link)}>
                <ListItemIcon
                sx={{
                    minWidth: 35
                }}
                >
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            ))}
          </List>
        </Card>
    )
}

export default MenuItem