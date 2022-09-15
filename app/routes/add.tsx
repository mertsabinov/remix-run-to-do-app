import { Box, Text, VStack, Input, Button } from "@chakra-ui/react";
import { redirect } from "@remix-run/node";
import { Navbar } from "~/components/Navbar";
import ValidationAlert from "~/components/ValidationAlert";
import { Form, useActionData } from "@remix-run/react";
import { API_URL } from "~/config";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const key = formData.get("key");
  const value = formData.get("value");
  // Validation
  if (key === "") {
    return "key is empty";
  }
  if (value === "") {
    return "value is empty";
  }
  // post to do
  const url = API_URL || "";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: key, value: value }),
  };
  await fetch(url, requestOptions);

  return redirect("/");
};

export const add = () => {
  const errors = useActionData();
  return (
    <Box>
      <Navbar />
      <Form method="post">
        <Box marginLeft="5%" marginRight="5%" marginTop="5%">
          <VStack>
            <Text fontWeight="bold" fontSize="xl">
              Add to do
            </Text>
          </VStack>
          <VStack marginLeft="20%" marginRight="20%">
            <Input name="key" placeholder="key" />
            <Input name="value" placeholder="value" />
            {errors !== undefined ? (
              <ValidationAlert title={"Error"} description={errors} />
            ) : null}

            <Button type="submit" w="50%">
              Save
            </Button>
          </VStack>
        </Box>
      </Form>
    </Box>
  );
};

export default add;
