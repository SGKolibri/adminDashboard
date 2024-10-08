import { Box, Button, IconButton, Typography } from "@mui/material"
import { tokens } from "../../theme"
import { mockTransactions } from "../../data/mockData"
import Header from "../../components/Header"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import LineChart from "../../components/LineChart"
import BarChart from "../../components/BarChart"
import GeoChart from "../../components/GeoChart"
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/progressCircle"
import { useTheme } from "@emotion/react"

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"} >
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Header title="Dashboard" subtitle="Welcome to the dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* ROW 1 */}
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="451"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ fontSize: "26px", color: colors.greenAccent[600] }} />}
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="7,762"
            subtitle="Sales Made"
            progress="0.5"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ fontSize: "26px", color: colors.greenAccent[600] }} />}
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="21,952"
            subtitle="New Clients"
            progress="0.35"
            increase="+51%"
            icon={<PersonAddIcon sx={{ fontSize: "26px", color: colors.greenAccent[600] }} />}
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="3,621,952"
            subtitle="Traffic Inbound"
            progress="0.8"
            increase="+41%"
            icon={<TrafficIcon sx={{ fontSize: "26px", color: colors.greenAccent[600] }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={"span 8"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt={"25px"}
            p={"0 30px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant={"h5"} fontWeight={"600"} sx={{ color: colors.grey[100] }}>
                Revenue Generated
              </Typography>
              <Typography variant={"h3"} fontWeight={"bold"} sx={{ color: colors.greenAccent[500] }}>
                R$ 1,200,000
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>

          <Box height={"250px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`3px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p={"15px"}
          >
            <Typography color={colors.grey[100]} variant={"h5"} fontWeight={"600"}>
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}-${index}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`3px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p={"15px"}
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant={"h5"} fontWeight={"600"}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>
                {transaction.date}
              </Box>
              <Box backgroundColor={colors.greenAccent[500]} p={"5px 10px"} borderRadius={"4px"}>
                ${transaction.cost}
              </Box>
            </Box>
          ))}

        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={"600"}>
            Campaign
          </Typography>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"25px"}>
            <ProgressCircle size={"125"} />
            <Typography variant={"h5"} color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              R$ 740,561 revenue generated
            </Typography>
            <Typography variant={"h5"} color={colors.greenAccent[600]} sx={{ mt: "5px" }}>
              21% increase in revenue
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight={"600"} sx={{ p: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt={"-20px"}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={"600"} sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height={"200px"}>
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard