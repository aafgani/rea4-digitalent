import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Item, darkTheme, lightTheme, ThemeProvider } from "../style/styleToDo";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Typography from "@mui/material/Typography";

const TodoForm = ({ todos, removeItemTodo, checkedItem }) => {
  const onItemRemoved = (i) => {
    removeItemTodo(i);
  };
  return (
    <>
      <Typography
        align="center"
        variant="h7"
        noWrap
        sx={{ display: { xs: "none", sm: "block", mr: 2 } }}
      >
        You have {todos.filter((i) => !i.isCompleted).length} items to complete!
      </Typography>
      <Grid item>
        {todos.map((item) => (
          <Box key={item.id} display="flex" justifyContent="space-between">
            <Box>
              <Checkbox
                checked={item.isCompleted ? true : false}
                onClick={(e) =>
                  checkedItem(item.id, item.name, !item.isCompleted)
                }
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
              <span className="lead">
                {item.isCompleted ? <s> {item.name}</s> : item.name}
              </span>
            </Box>
            <Box
              m={1}
              //margin
              display="flex"
              justifyContent="flex-end"
              // alignItems="flex-end"
            >
              <IconButton
                aria-label="edit"
                onClick={() => {
                  alert("on edit");
                }}
              >
                <CreateIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  onItemRemoved(item.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>

          //   <Item
          //     className=" mt-2 "
          //     key={item.id}
          //     elevation={12}
          //     sx={{ margin: 1 }}
          //   >
          //     <Checkbox
          //       checked={item.isCompleted ? true : false}
          //       //   onClick={(e) => chek(item.id, !item.isCompleted, item.name)}
          //       sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          //     />

          //     <span className="lead">
          //       {item.isCompleted ? <s> {item.name}</s> : item.name}
          //     </span>
          //     <Box
          //       m={1}
          //       //margin
          //       display="flex"
          //       justifyContent="flex-end"
          //       // alignItems="flex-end"
          //     >
          //       <IconButton
          //         aria-label="edit"
          //         onClick={() => {
          //           alert("on edit");
          //         }}
          //       >
          //         <CreateIcon />
          //       </IconButton>
          //       <IconButton
          //         aria-label="delete"
          //         onClick={() => {
          //           alert("on delete");
          //         }}
          //       >
          //         <DeleteIcon />
          //       </IconButton>
          //     </Box>
          //   </Item>
        ))}
      </Grid>
    </>
  );
};

export default TodoForm;
