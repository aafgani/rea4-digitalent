import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Search, SearchIconWrapper, StyledInputBase } from "../style/styleToDo";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const ToDoForm = ({ addTodo }) => {
  const [item, setItem] = React.useState("");

  const AddNewItem = (e) => {
    e.preventDefault();
    //const itemTodo = { id: 99, name: item, isCompleted: false };
    addTodo(item);
    setItem("");
  };

  const onChangeItem = (e) => {
    let value = e.target.value;
    setItem(value);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block", mr: 2 } }}
            >
              To-do List
            </Typography>
            <Search>
              <SearchIconWrapper>
                <FormatListBulletedIcon />
              </SearchIconWrapper>
              <StyledInputBase
                // onChange={(e) => input(e.target.value)}
                placeholder="New Task"
                inputProps={{ "aria-label": "search" }}
                value={item}
                onChange={onChangeItem}
                onKeyPress={(e) => {
                  if (e.key == "Enter" && e.target.value !== "") {
                    AddNewItem(e);
                  }
                }}
              />
            </Search>
            <IconButton
              //type="submit"
              //   onClick={bolean ? setBtnToEdit : add}
              onClick={AddNewItem}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              /* sx={{ m: 'auto' }} */
            >
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default ToDoForm;
