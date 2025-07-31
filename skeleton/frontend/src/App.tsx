import '@/App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NotFoundPage from '@/components/pages/404';
import TodoPage from '@/components/pages/todo';
import ScrollToTop from '@/components/layout/ScrollToTop';

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<TodoPage />} />

                    {/* Catch-all 404 Route - MUST REMAIN AT BOTTOM */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
