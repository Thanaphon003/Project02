import React, { useState, useEffect } from 'react';
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




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}




const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Student() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/student")
            .then(res => res.json())
            .then(
                (result) => {
                    //   setIsLoaded(true);
                    setItems(result);
                },

            )
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Paper sx={{ p: 1 }}>
                    <Box display="flex">
                        <Box sx={{ flexGrow: 1 }}> 
                        <Typography variant="h5" gutterBottom>
                            Student
                        </Typography></Box>
                        <Box>
                            <Link href="AddStudent">
                                <Button variant="contained">Add</Button>
                            </Link>
                        </Box>

                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="center">Profild</TableCell>
                                    <TableCell align="center">Title</TableCell>
                                    <TableCell align="center">firstname</TableCell>
                                    <TableCell align="center">lastname</TableCell>
                                    <TableCell align="center">email</TableCell>
                                    <TableCell align="center">tel</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.student_ID}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Box display='flex' justifyContent='center'>
                                                <Avatar alt="Cindy Baker" src={row.avatar} />
                                            </Box>

                                        </TableCell>
                                        <TableCell align="center">{row.title_ID}</TableCell>
                                        <TableCell align="center">{row.firstname}</TableCell>
                                        <TableCell align="center">{row.lastname}</TableCell>
                                        <TableCell align="center">{row.email}</TableCell>
                                        <TableCell align="center">{row.tel}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" sx={{ p: 1 }}>Edit</Button>
                                            <Button variant="outlined" sx={{ p: 1 }}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </React.Fragment >
    );
}