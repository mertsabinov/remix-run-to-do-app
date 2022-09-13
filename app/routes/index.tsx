import { Box, Text } from "@chakra-ui/react";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Card } from "~/components/Card";
import { Navbar } from "~/components/Navbar";

export const loader: LoaderFunction = async () => {
  const url = process.env.API_URL || "";
  const res = await fetch(url).then((res) => res.json());
  return { data: res };
};

type ToDo = {
  id: string;
  key: string;
  value: string;
};

type LoaderData = {
  data: ToDo[];
};

export const index = () => {
  const { data } = useLoaderData<LoaderData>();
  return (
    <Box>
      <Navbar />
      {data.map(({ id, key, value }) => (
        <Box id={id} marginTop="2%" marginLeft="25%" marginRight="25%">
          <Card id={id} title={key} content={value} />
        </Box>
      ))}
    </Box>
  );
};

export default index;
