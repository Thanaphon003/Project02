import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // เปลี่ยน useNavigate แทน useHistory
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ButtonGroup } from '@mui/material';

function EditTitle() {
    const { title_Id } = useParams();
    const navigate = useNavigate(); // เปลี่ยน useHistory เป็น useNavigate
    const [titleName, setTitleName] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/api/title/${title_Id}`)
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    setTitleName(result.titlename);
                } else {
                    console.log('Error fetching title details.');
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, [title_Id]);

    

    const handleSave = () => {
        // ส่ง request ไปยังเซิร์ฟเวอร์เพื่ออัปเดตข้อมูล Title
        fetch(`http://localhost:3000/api/title/${title_Id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titlename: titleName,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    // อัปเดตข้อมูล Title ใน state หรือทำการเปลี่ยนเส้นทางไปยังหน้ารายการ Title หลังจากแก้ไขสำเร็จ
                    console.log('Title updated successfully.');
                    navigate('../title'); // เปลี่ยนเส้นทางให้เป็น navigate แทน push
                } else {
                    // ถ้าเกิดข้อผิดพลาดในการอัปเดต ให้แสดงข้อความหรือกระบวนการที่เหมาะสมตามความต้องการ
                    console.log('Error updating title.');
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const handleCancel = () => {
        // ยกเลิกการแก้ไขและเปลี่ยนเส้นทางกลับไปยังหน้ารายการ Title
        navigate('../title'); // เปลี่ยนเส้นทางให้เป็น navigate แทน push
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Paper sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5" sx={{ flexGrow: 1 }}>
                            Edit Title
                        </Typography>

                    </Box>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="TitleID"
                            variant="outlined"
                            value={title_Id}
                            
                            sx={{ flexGrow: 1, mt: 2, mb: 2 }}
                        />
                    </Box>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="TitleName"
                            variant="outlined"
                            value={titleName}
                            
                            sx={{ flexGrow: 1, mt: 2, mb: 2 }}
                        />

                    </Box>
                    <ButtonGroup >
                    <Button onClick={handleSave} variant="contained" sx={{ ml: 2, mt: 2, mb: 2 }}>
                        Save
                    </Button>
                    <Button onClick={handleCancel} variant="outlined" sx={{ ml: 2, mt: 2, mb: 2 }}>
                        Cancel
                    </Button>
                    </ButtonGroup>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default EditTitle;
