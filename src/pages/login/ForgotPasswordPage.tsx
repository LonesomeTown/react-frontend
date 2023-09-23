import React, { useState, FormEvent } from 'react';
import {
  Box,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth';

    const ForgotPasswordPage: React.FC = () => {
        const [email, setEmail] = useState("");

        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState("");

        const navigate = useNavigate();
            
        const handleSubmit = (event: FormEvent) => {
            event.preventDefault();
            
            setMessage("");
            setLoading(true);
                
            AuthService.sendEmail(email).then(
                () => {
                    navigate("/");
                    // window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        };
    
    return (
        <Container maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }}>
                <Typography component="h1" variant="h5">
                    Reset Your Password?
                </Typography>
                <Box component="form" onSubmit={handleSubmit} mt={3}>
                    <TextField label="Email Address" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <LoadingButton type="submit" variant="contained" loading={loading} sx={{ mt: 4, mb: 3, alignItems:'center' }}>
                        Send Request Link
                    </LoadingButton>
                    <FormHelperText>{message}</FormHelperText>
                </Box>
            </Box>
        </Container>
    );

}

export default ForgotPasswordPage;