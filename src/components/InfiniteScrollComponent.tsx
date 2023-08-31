import React, { useState } from "react";
import axios from "axios";
import queryString from "query-string";
import InfiniteScroll from "react-infinite-scroller";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import BottomActionsCard from "./Card";
import SERVER_URL from "../ServerURL";
import Divider from "@mui/joy/Divider";
import { Sheet } from "@mui/joy";

export default function InfiniteScrollComponent() {
  //   async function TryLogin(data: { email: string; password: string }) {
  //     try {
  //       await axios.post(`${SERVER_URL}/login`, data).then(function (res) {
  //         console.log(res);
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }

  return (
    // <InfiniteScroll
    //   pageStart={0}
    //   loadMore={TryLogin}
    //   hasMore={true}
    //   loader={
    //     <div className="loader" key="loader">
    //       Loading ...
    //     </div>
    //   }
    // >
    //   <BottomActionsCard />
    // </InfiniteScroll>
    <Sheet
      sx={{
        width: "100%",
        mx: "auto", // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
    >
      <BottomActionsCard />
      <Divider orientation="horizontal" />
      <BottomActionsCard />
      <Divider orientation="horizontal" />
      <BottomActionsCard />
      <Divider orientation="horizontal" />
      <BottomActionsCard />
      <Divider orientation="horizontal" />
      <BottomActionsCard />
    </Sheet>
  );
}
