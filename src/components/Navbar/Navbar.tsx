import { AppBar, Toolbar, Typography } from "@mui/material"

export const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    Ismael Cobo prueba técnica
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
