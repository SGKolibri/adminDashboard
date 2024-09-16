import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header"

export default function Team() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'access',
            headerName: 'Access Level',
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent={"center"}
                        width={"60%"}
                        m={"0 auto"}
                        p={"5px"}
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[500]
                                : colors.greenAccent[800]
                        }
                        borderRadius={"4px"}
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography
                            variant="h5"
                            sx={{ ml: "5px" }}
                        >
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },
    ]


    return (
        <Box m={"20px"}>
            <Header title="Team" subtitle="Manage your team" />
            <Box
                m={"40px 0 0 0"}
                height={"75vh"}
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box >
    )
}