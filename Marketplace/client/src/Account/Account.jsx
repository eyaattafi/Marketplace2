import React, { useState } from "react";
import SideBar from "./SideBar.jsx";
import axios from 'axios';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Outlet } from "react-router-dom";

const Account = () => {
  console.log("test");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [address, setAddress] = useState("");

  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const update =async()=>{
    try {
      if(newPassword === confirmPassword)
  {    await axios.put(`http://localhost:3000/api/getone/${idu}`, {
          password: newPassword,
          name: `${firstName} + ${lastName}`,
          email:email,
          // address: address,
        })
  alert("your update is successfully")
  return 
    }} catch (error) {
      alert("check passworrd")
    }
  }
// const handleSubmit = async () => {
//   if (
//     firstName === "" ||
//     lastName === "" ||
//     email === "" ||
//     password === "" ||
//     newPassword === "" ||
//     confirmPassword === "" )
//     // address === ""
//    {
//     alert("Please enter your all  information");
//     return;
//   }
//   if ( password ===  newPassword) {
//     alert("Current Password is incorrect");
//     return;
//   }
//   if (newPassword !== confirmPassword) {
//     alert("New Passwords do not match");
//     return;
//   }

//   try {
//     const response = await axios.put('http://localhost:3000/api/update', {
//       password: newPassword,
//       name: `${firstName} + ${lastName}`,
//       email: email,
//       // address: address,
//     });

//     if (response.status === 200) {
//       alert("User updated successfully");
//     } else {
//       alert("Failed to update user");
//     }
//   } catch (error) {
//     console.error("Error updating user:", error);
//     alert("An error occurred while updating user");
//   }
// };

  return (
    <div>
    
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Paper
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="error" gutterBottom>
          Edit Your Profile
        </Typography>

        <Grid container spacing={2} style={{ marginBottom: "16px" }}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => handleInputChange(e, setLastName)}
            />
          </Grid>
          
          <Grid item xs={12}>
            
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Current Password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="New Password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Confirm New Password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
        </Grid>
  <div >
        <Button
          variant="contained"
          color="error"
          onClick={()=>{update({email:email,newPassword:newPassword,password:password,firstName:firstName,lastName:lastName})}}
          style={{ marginBottom: "16px" }}
        >
          Save Changes
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setNewPassword("");
            setConfirmPassword("");
            // setAddress("");
          }}
          style={{ color: "black" }}
        >
          Cancel
        </Button>
        </div>
      </Paper>
    </Container>
    <div>
    <SideBar/>
      <Outlet />
    </div>
 </div>
  )
  
        }



export default Account;

