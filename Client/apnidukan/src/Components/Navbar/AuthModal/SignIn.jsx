import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  signup,
  signUpErr,
  signUpSuccess,
} from "../../../redux/authReducer/action";
import styles from "./Signup.module.css";
export const SignInComp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [pass, setPass] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  // function for sign up new user
  const handleSignUp = () => {
    if (email == "" || pass == "") {
      toast({
        title: "Please fill all the credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(signup({ firstName, lastName, email, password: pass, gender }))
        .then((re) => {
          dispatch(signUpSuccess());
          toast({
            title: "user Signup Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          dispatch(signUpErr());
          toast({
            title: "Oops, Check your credentials again",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  };
  return (
    <div className={styles.signup_box}>
      <Text fontSize={"2xl"} fontWeight="500">
        BECOME A MEMBER
      </Text>
      <Text>
        Become a member — don’t miss out on deals, offers, discounts and bonus
        vouchers.
      </Text>
      <div className={styles.signup_form_box}>
        <FormControl isRequired>
          <FormLabel fontWeight={"400"} marginTop="14px">
            Email
          </FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            borderRadius={"0"}
            focusBorderColor="green.400"
            colorScheme={"green"}
          />
          <FormLabel fontWeight={"400"} marginTop="14px">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type={show ? "text" : "password"}
              borderRadius={"0"}
              focusBorderColor="green.400"
              colorScheme={"green"}
            />
            <InputRightElement width="4.5rem">
              <Text size="sm" onClick={handleClick} cursor="pointer">
                {show ? "Hide" : "Show"}
              </Text>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Accordion
          allowMultiple
          marginTop={"15px"}
          marginBottom="15px"
          defaultIndex={[0]}
        >
          <AccordionItem border="none">
            <h2>
              <AccordionButton _hover={{ background: "var(--color-bg)" }}>
                <Box as="span" flex="1" textAlign="left">
                  ADD MORE & GET MORE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <FormControl>
                <FormLabel fontWeight={"400"} marginTop="14px">
                  FirstName
                </FormLabel>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  borderRadius={"0"}
                  focusBorderColor="green.400"
                  colorScheme={"green"}
                />
                <FormLabel fontWeight={"400"} marginTop="14px">
                  LastName
                </FormLabel>
                <InputGroup>
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    borderRadius={"0"}
                    focusBorderColor="green.400"
                    colorScheme={"green"}
                  />
                </InputGroup>
                <Select
                  focusBorderColor="green.400"
                  borderRadius={"0"}
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  marginTop="15px"
                >
                  <option disabled value="">
                    Select a Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button
          colorScheme={"blackAlpha"}
          background="var(--text-color)"
          width={"100%"}
          borderRadius="0"
          onClick={handleSignUp}
        >
          Become a Member
        </Button>
      </div>
    </div>
  );
};
