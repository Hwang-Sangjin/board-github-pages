import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import MessagesPane from "./MessagesPAne";
import ChatsPane from "./ChatsPane";
import { ChatProps } from "../Chat/types";
import { chats } from "../Chat/data";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/joy";
import InfiniteScrollComponent from "./InfiniteScrollComponent";

export default function PostInputComponent() {
  return (
    <Sheet
      sx={{
        width: "100%",
        mx: "auto", // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: "flex",
        flexDirection: "column",
        borderRadius: "sm",
        boxShadow: "md",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          // to make the card resizable
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></Box>
        <CardContent>
          <Typography level="title-lg">NYC Coders</Typography>
          <Typography level="body-sm">
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing. We are
            a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing. We are
            a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing. We are
            a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing. We are
            a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
          </Typography>
        </CardContent>
      </Card>
    </Sheet>
  );
}
