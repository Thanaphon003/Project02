import React, { useState, useEffect, Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function AddStudent() {

    const handleSubmit = event => {
        event.prevenDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "student_ID": student_ID,
            "title_ID": title_ID,
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "tle": tel
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch("http://localhost:3000/api/student", requestOptions)
            .then(response => response.text())
            .then(result => {
                alert(result['message'])
                if (result['status'] === 'ok') {
                    window.location.href = '/'
                }

            })
            .catch(error => console.log('error', error));
    }

    const Ckicktest = () => {
        console.log(student_ID);
    }


    const [student_ID, setStudentID] = useState("");
    // const [student_ID, setStudentID] = useState("");
    const [title_ID, setTitleID] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTle] = useState("");

    // const [student, setStudent] = useState([]);

    const [title, setTitle] = useState([]);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/student")
            .then(res => res.json())
            .then(
                (result) => {
                    //setIsLoaded(true);
                    setItems(result);
                },

            )
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                        Add Student
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="student_ID" label="StudentID" variant="outlined"
                                fullWidth required
                                onChange={(e) => setStudentID(e.target.value)} />
                        </Grid><br />
                        <Grid item xs={12} sm={6}>
                            <TextField id="avatar" label="Profild" variant="outlined"
                                fullWidth required
                                onChange={(e) => setStudentID(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel onChange={(e) => setTitleID(e.target.value)} id="demo-simple-select-label">Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Title"

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    
                                    {title.map((item) => (
                                        <MenuItem
                                            key={item.title_ID}
                                            value={item.title_ID}
                                            required>{item.titlename}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="firstname" label="Firstname" variant="outlined"
                                fullWidth required
                                onChange={(e) => setFirstname(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="lastname" label="Lastname" variant="outlined"
                                fullWidth required
                                onChange={(e) => setLastname(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="email" label="Email" variant="outlined"
                                fullWidth required
                                onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="tel" label="Tel" variant="outlined"
                                fullWidth required
                                onChange={(e) => setTle(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} >
                            <Button onClick={Ckicktest} variant="contained" fullWidth sx={{ p: 1 }}>Submit</Button>
                        </Grid>

                    </Grid>
                </form>
            </Container>
        </React.Fragment >
    );
}