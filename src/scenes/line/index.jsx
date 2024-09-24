import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

export default function Line() {

    return (
        <Box m={"20px"}>
            <Header title={"Line Chart"} subtitle="Line Chart with Random Data" />
            <Box height={'75vh'}>
                <LineChart />
            </Box>
        </Box>
    )
}