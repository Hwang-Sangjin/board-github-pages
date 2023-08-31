import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import MessagesPane from "./MessagesPAne";
import ChatsPane from "./ChatsPane";
import { ChatProps } from "../Chat/types";
import { chats } from "../Chat/data";
import { Chip, Typography } from "@mui/joy";

export default function PostContainer() {
  return (
    <Sheet
      sx={{
        flex: 1,
        width: "100%",
        mx: "auto",
        pt: { xs: "var(--Header-height)", lg: 0 },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "minmax(min-content, min(30%, 400px)) 1fr",
        },
      }}
    >
      <Typography
        level="h1"
        fontSize={{ xs: "md", md: "lg" }}
        component="h1"
        fontWeight="lg"
        sx={{ mr: "auto" }}
      >
        Home
      </Typography>
    </Sheet>
  );
}
