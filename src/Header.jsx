import React from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

export default function Header() {
  return (
    <header>
      {/* <img src="favicon-32x32.png" alt="logo" /> */}

      <h1>
        <NoteAltIcon sx={{ fontSize: 28 }} />
        Keeper
      </h1>
    </header>
  );
}
