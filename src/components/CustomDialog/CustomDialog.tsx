import { Dialog } from "@mui/material"
import { useCustomDialog } from '../../hooks/useCustomDialog';

interface Props {
    children: React.ReactNode
}

export const CustomDialog = ({ children }: Props) => {

    const { isOpen, startClosingCustomDialog } = useCustomDialog()

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={startClosingCustomDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                {children}
            </Dialog>
        </div>
    )
}
