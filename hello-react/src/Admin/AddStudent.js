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
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

export default function AddStudent() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                        Add Student
                    </Typography>
                </Box>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="student_ID" label="StudentID" variant="outlined"
                                fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="avatar" label="Profild" variant="outlined"
                                fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="title_ID" label="Title" variant="outlined"
                                fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="firstname" label="firstname" variant="outlined"
                                fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="lastname" label="lastname" variant="outlined"
                                fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="email" label="email" variant="outlined"
                                fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="tel" label="tel" variant="outlined"
                                fullWidth required />
                        </Grid>
                        
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    );
}