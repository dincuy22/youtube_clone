import React from "react";
import { IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        onChange={() => {}}
        value={""}
        type="text"
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
