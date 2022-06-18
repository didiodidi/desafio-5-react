import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Item from "./Item";
import "../../hojas-de-estilo/ItemList.css";

const ItemList = () => {
  const [users, setUsers] = useState([]);

  console.log("DATA: ", users);

  useEffect(() => {
    // Llamar a la api
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json)); // setUsers: le paso a users toda la data de la API
  }, []);
  //Crear un grid
  return (
    <div>
      <div className="container">
        {/* <h1>Users</h1> */}
        <Grid container>
          {users.map((user) => (
            <Grid item xs={2} sm={4} md={4}>
                <Box margin={3}>
                  <Item key={user.id} data={user} />
                </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ItemList;
