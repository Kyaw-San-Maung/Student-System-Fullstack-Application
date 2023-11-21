import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";
import addStudent from "../services/AddStudent";
import getStudent from "../services/GetStudent";
import { useState } from "react";
import { useEffect } from "react";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [students, setStudent] = useState([]);

  const Namechange = (e) => {
    setName(e.target.value);
  };

  const AddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };

    console.log(student);

    let studentInfo = { name: name, address: address };

    addStudent(studentInfo);

    console.log("New Student added");
  };

  useEffect(() => {
    getStudent().then(res => setStudent(res.data));
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "#4682b4" }}>Add Student Here</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Student name"
            variant="outlined"
            fullWidth
            onChange={Namechange}
          />
          <TextField
            id="outlined-basic"
            label="Student address"
            variant="outlined"
            fullWidth
            onChange={AddressChange}
          />
          <Button
            variant="contained"
            style={{ backgourndcolor: "#4682b4" }}
            onClick={handleClick}
          >
            Contained
          </Button>
        </Box>
      </Paper>

      <h1>Student List</h1>

      <Paper elevation={3} style={paperStyle}>
        {students.map(student => 
          <Paper elevation={6} style={{margin:"15px", padding:"15px", textAlign:"left"}} key={student.id}>
            <div>
            ID : {student.id}<br/>
           Name : {student.name}<br />
           Address : {student.address}
          </div>
          </Paper>
          
          
         
        )}
      </Paper>
    </Container>
  );
}
