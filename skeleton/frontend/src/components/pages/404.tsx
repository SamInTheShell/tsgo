import { Box, Typography } from '@mui/material';

export default function NotFoundPage() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            <Typography variant="h2" color="error" gutterBottom>404 - Page Not Found</Typography>
            <Typography variant="body1">Sorry, the page you are looking for does not exist.</Typography>
        </Box>
    );
}
