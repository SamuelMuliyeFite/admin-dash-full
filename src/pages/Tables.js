import DefaultLayout from '../layout/DefaultLayout';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Message from "./message.js";
import {Box, Button, Card, CardContent, Grid, TextField} from "@mui/material";
import SwitcherTwo from '..//components/SwitcherTwo';
import ChartTwo from '..//components/ChartTwo';



const Tables = () => {
 {/*} const messagesListRef = React.createRef();
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  const baseURL = "https://support.b4a.app/";

  const sendMessage = (content) => {
    // add the message to the state
    setMessages([
      ...messages,
      {
        content: content,
        isCustomer: true,
      }
    ]);
  
    // post the request and add the bot response to the state
    axios.post(baseURL + "ask", {
      content: content
    }).then(res => {
      console.log(res);
      setMessages(prevState => [
        ...prevState,
        res.data,
      ]);
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage(messageInput);
    setMessageInput("");
  } */}
  return (
    <DefaultLayout>
     {/*} <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{maxWidth: 620}}>
        <CardContent>
          <Box
            ref={messagesListRef}
            sx={{
              height: 620,
              overflow: "scroll",
              overflowX: "hidden",
            }}
          >
            <Box sx={{m: 1, mr: 2}}>
            {messages.map((message, index) => (
  <Message
    key={index}
    content={message.content}
    image={message.image}
    isCustomer={message.isCustomer}
    choices={message.choices}
    handleChoice={sendMessage}
  />
))}
              {/* TODO: messages will be displayed here */}
     {/*}       </Box>
          </Box>
          <Box
            component="form"
            sx={{
              mt: 2,
              display: "flex",
              flexFlow: "row",
              gap: 1,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              type="submit"
            >
              Send
            </Button>
          </Box>
        </CardContent>
      </Card>
          </Grid> */}
    <SwitcherTwo />


    </DefaultLayout>
  );
};

export default Tables;
