import React from "react";

const Login = React.lazy(() => import("./LogInPage"));
const SignUp = React.lazy(() => import("./SignUpPage"));

const Pages = {
  Login,
  SignUp
};

export default Pages;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ChakraProvider } from '@chakra-ui/react';
// import UserContextProvider from './context/userContext'
// import  BlogContextProvider from './context/blogContext'

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <UserContextProvider>
//         <BlogContextProvider>
//           <App />
//         </BlogContextProvider>
//       </UserContextProvider>
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );