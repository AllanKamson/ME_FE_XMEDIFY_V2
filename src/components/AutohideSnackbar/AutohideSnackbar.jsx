import { Alert, Snackbar, Box } from '@mui/material';

export default function AutohideSnackbar({ open, setOpen, message }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return; 
    }
    setOpen(false); 
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000} 
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
    >
      <Alert
        onClose={handleClose}
        icon={false} 
        severity="success" 
        sx={{
          bgcolor: 'primary.green', 
          color: '#fff', 
          width: '100%', 
          justifyContent: 'center', 
          fontWeight: 600,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {message}
        </Box>
      </Alert>
    </Snackbar>
  );
}