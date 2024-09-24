import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import PropTypes from 'prop-types';
import ProgressCircle from "./progressCircle";

StatBox.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    progress: PropTypes.number.isRequired,
    increase: PropTypes.string.isRequired,
};

export default function StatBox({ title, subtitle, icon, progress, increase }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width={"100%"} m={"0 30px"}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Box>
                    {icon}
                    <Typography variant={"h4"} fontWeight={"bold"} sx={{ color: colors.grey[100] }}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography variant={"h5"} sx={{ color: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>
                <Typography variant={"h5"} fontStyle={"italic"} sx={{ color: colors.greenAccent[600] }}>
                    {increase}
                </Typography>
            </Box>

        </Box>
    )
}