import {useState} from "react"
import "./App.css";
import PageHeader from "./PageHeader";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {

  const [messages,setMessages] = useState([]);

  const onMessageSend = (username, msgText) => {
    const newMessage = {
      username: username,
      text: msgText,
    };
    setMessages(messages.concat([newMessage]));
    console.log(`${JSON.stringify(messages)}`)
  }

  return (
    <div className="App">
      <PageHeader/>
      <div className="container">
        {users.map((user,index) => <ChatWindow key={index} currentUser={user} messagesList ={messages} onMessageSend={onMessageSend}/> )}
      </div>
    </div>
  );
};

export default App;
