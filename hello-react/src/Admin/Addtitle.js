import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Addtitle() {
    const [title_ID, setTitleID] = useState("");
    const [titlename, setTitleName] = useState("");

    const navigate = useNavigate();

    const Ckicktest = () => {
        console.log(title_ID);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // ตรวจสอบค่า title_ID และ titlename ก่อนส่งข้อมูล
        if (title_ID.trim() === "" || titlename.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title_ID": title_ID,
                "titlename": titlename
            }),
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/AddTitle", requestOptions)
            .then(response => response.json())
            .then(result => {
                // alert(result['message']);
                if (result) {
                    navigate('../title');
                    // ทำอย่างไรก็ตามหลังจากที่เพิ่มข้อมูลสำเร็จแล้ว ตัวอย่างเช่น ทำการเรียก API ใหม่หรืออัปเดตข้อมูลในหน้านี้
                }
            })
            .catch(error => console.log('error', error));
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                        Add Title
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="title_ID"
                                label="title_ID"
                                variant="outlined"
                                fullWidth
                                required
                                onChange={(e) => setTitleID(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="titlename"
                                label="titlename"
                                variant="outlined"
                                fullWidth
                                required
                                onChange={(e) => setTitleName(e.target.value)}
                            />
                        </Grid>
                    </Grid><br />
                    <Grid item xs={12}>
                        <Button onClick={Ckicktest} type="submit" variant="contained" fullWidth sx={{ p: 1 }}>
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    );
}

export default Addtitle;
