import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react';
import {memo} from "react"


export const MakeList =  memo ((props) => {
            return (<UnorderedList spacing={2} >{props.chatData.map((chat) => 
            (<ListItem>{chat.Name + ": " + chat.Comment}</ListItem>))
            }</UnorderedList>
            );
        }
);