import React from "react";
import { Grid } from "@mui/material";
import Category from "../components/main/CategorySlide/Category/Category";
import Footer from "../components/main/Footer/Footer";
export default function Home(){
  return (
<Grid>
  <Category/>
  <Footer/>
</Grid>
  )
}