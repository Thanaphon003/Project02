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
import { ButtonGroup } from '@mui/material';



function Title() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/title")
            .then(res => res.json())
            .then(
                (result) => {
                    //   setIsLoaded(true);
                    setItems(result);
                },

            )
    }, [])

    const handleDelete = (titleId) => {
        fetch(`http://localhost:3000/api/title/${titleId}`, {
          method: 'DELETE',
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((result) => {
            if (result.success) {
              setItems(items.filter((item) => item.title_ID !== titleId));
            } else {
              console.log('Error deleting title:', result.error);
              // แสดงข้อความข้อผิดพลาดหรือดำเนินการอื่น ๆ ตามที่จำเป็น
            }
          })
          .catch((error) => {
            console.log('Error:', error);
            // แสดงข้อความข้อผิดพลาดหรือดำเนินการอื่น ๆ ตามที่จำเป็น
          });
      };



    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Paper sx={{ p: 1 }}>
                    <Box display="flex">
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" gutterBottom>
                                Title
                            </Typography></Box>
                        <Box>
                            <Link href="Addtitle">
                                <Button variant="contained">Add</Button>
                            </Link>
                        </Box>

                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Title_ID</TableCell>
                                    <TableCell align="center">Title_Name</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((row) => (
                                    <TableRow  key={row.title_ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center" component="th" scope="row">
                                            {row.title_ID}
                                        </TableCell>
                                        <TableCell align="center">{row.titlename}</TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup>
                                                <Button href="Edittitle" variant="contained" sx={{ p: 1 }}>Edit</Button>
                                                <Button onClick={() => handleDelete(row.title_ID)} variant="outlined" sx={{ p: 1 }}>Delete</Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </React.Fragment >
    )
}

export default Title