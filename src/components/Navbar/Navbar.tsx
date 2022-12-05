import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCustomDialog } from '@/hooks';
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
export const Navbar = () => {

    const { startOpeningCustomDialog } = useCustomDialog()

    return (
        <>
            <CustomDialog>
                <FavoriteTable />
            </CustomDialog>
            <AppBar position="sticky">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        Ismael Cobo prueba técnica
                    </Typography>
                    <IconButton color="default" aria-label="favorites" component="label" onClick={startOpeningCustomDialog}>
                        <FavoriteIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}
