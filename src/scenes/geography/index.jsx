import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { tokens } from "../../theme";

export default function Line() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m={"20px"}>
            <Header title={"Geographic Chart"} subtitle="Geographic Chart with Random Data" />
            <Box height={'75vh'} border={`1px solid ${colors.grey[100]}`} borderRadius={"10px"}>
                <GeoChart />
            </Box>
        </Box>
    )
}