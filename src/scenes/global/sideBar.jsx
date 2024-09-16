import { useState } from 'react'
import PropTypes from 'prop-types'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';
import { tokens } from '../../theme'
import { motion } from 'framer-motion'

const Item = ({ title, to, icon, setSelected }) => {
  const location = useLocation();

  console.log(`${location.pathname === to ? `location: ${location.pathname}; to: ${to}` : "not here"}`); // Debugging log

  const isActive = location.pathname === to; // Detect active route
  return (
    <MenuItem
      onClick={() => {
        console.log(`Item clicked: ${title}`); // Debugging log
        setSelected(title);
      }}
      component={<Link to={to} />}
      icon={icon}

      rootStyles={{
        color: isActive ? '#6870fa' : 'inherit', // Apply active color
        '&:hover': {
          color: '#868dfb', // Hover color
        },
      }}
    >
      <Typography>
        {title}
      </Typography>
    </MenuItem >
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  const menuItemStyles = {
    button: {
      '&:hover': {
        backgroundColor: 'inherit', // Keeps the background color the same on hover
        color: '#868dfb', // Changes the text color on hover
      },
    },
  };

  return (
    <>
      <Box>
        <ProSidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
          <Menu iconShape="square" menuItemStyles={menuItemStyles}>
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
              }}
            >
              {!isCollapsed && (
                <motion.div
                  className={`flex justify-between items-center ml-4`}
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMIN
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </motion.div>
              )}
            </MenuItem>

            {/* User */}
            {!isCollapsed && (
              <Box mb="25px" mx="10px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt='user'
                    width={100}
                    height={100}
                    src={`../../assets/bob.png`}
                    className='cursor-pointer rounded-[50%]'
                  />
                </Box>
                <Box textAlign="center">
                  <Typography variant='h2' color={colors.grey[100]} fontWeight={700}
                    sx={{ m: "10px 0 0 0" }}
                  >
                    TJ Instalações
                  </Typography>
                  <Typography variant='h5' color={colors.greenAccent[500]} >Admin</Typography>
                </Box>
              </Box>
            )}

            {/* Menu Items */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item title={'Dashboard'} to='/' icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Typography variant='h6' color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Data
              </Typography>
              <Item title={'Manage Team'} to='/team' icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Contacts'} to='/contacts' icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Invoices'} to='/invoices' icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Typography variant='h6' color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Pages
              </Typography>
              <Item title={'Profile'} to='/form' icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Calendar'} to='/calendar' icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'FAQ'} to='/faq' icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Typography variant='h6' color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Charts
              </Typography>
              <Item title={'Bar'} to='/bar' icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Pie'} to='/pie' icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Line'} to='/line' icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Geography'} to='/geography' icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Box>
          </Menu>
        </ProSidebar>

      </Box >
    </>
  )
}

export default Sidebar