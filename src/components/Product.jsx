import {
  Box,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/products`).then((e) => {
      console.log(e.data);
      setdatas(e.data);
    });
  });
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product" direction={'row'}>
      {datas.map((ev) => (
        <>
        <Box>
          <Image width={"200px"} src={ev.imageSrc} data-cy="product-image" />
          <Text data-cy="product-category">{ev.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{ev.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{ev.title}</Heading>
          <Box data-cy="product-price">{ev.price}</Box>
        </Box>
        </>
      ))}
    </Stack>
  );
};
export default Product;