import React, { useState, FormEvent } from 'react';
import {
  Box,
  Button,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth";
import { useParams } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {

  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Add your registration logic here
    AuthService.resetPassword(token===undefined?"":token, password).then(
      () => {
        navigate("/login");
        window.location.reload();
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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
        <Typography component="h1" variant="h5">
          Reset your password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={3}>
          <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          <LoadingButton type="submit" variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}>Reset</LoadingButton>
          <Button component={RouterLink} variant="text" to='/login' sx={{ mt: 4, mb: 3 }} >Cancel</Button>
          <FormHelperText>{message}</FormHelperText>
        </Box>
      </Box>
    </Container>);
    };

    export default ResetPasswordPage;
