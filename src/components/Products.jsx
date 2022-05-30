import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex, Spacer } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  // const getdata = () => {

  return (
    <Flex flexDirection={'column'}>
      {/*  AddProduct */}
      <AddProduct />
      <Grid >
        {/* List of Products */}
          <Product />
      </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
