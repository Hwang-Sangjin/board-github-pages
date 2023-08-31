import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import MessagesPane from "./MessagesPAne";
import ChatsPane from "./ChatsPane";
import { ChatProps } from "../Chat/types";
import { chats } from "../Chat/data";
import { Chip, Typography } from "@mui/joy";
import InfiniteScrollComponent from "./InfiniteScrollComponent";
import PostInputComponent from "./PostInputComponent";

export default function PostContainer() {
  return (
    <Sheet
      sx={(theme) => ({
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 0,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "minmax(min-content, min(30%, 400px)) 1fr",
        },
      })}
    >
      <Typography
        width="100%"
        level="h1"
        fontSize={{ xs: "md", md: "lg" }}
        component="h1"
        fontWeight="lg"
        sx={{ mr: "auto", mx: "auto" }}
      >
        <PostInputComponent />
        <InfiniteScrollComponent />
      </Typography>
    </Sheet>
  );
}
