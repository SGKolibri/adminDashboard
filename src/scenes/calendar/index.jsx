import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
// import ptLocale from '@fullcalendar/core/locales/pt';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from "../../components/Header"

export default function Calendar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("New title for the event:");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Delete event ${selected.tilte}?`)) {
            selected.event.remove();
        }
    }

    return (
        <Box m={'20px'}>
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
            <Box display={'flex'} justifyContent={'space-between'}>
                {/* Calendar Sidebar*/}
                <Box flex={'1 1 20%'} backgroundColor={colors.primary[400]} padding={'15px'} borderRadius={'4px'}>
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{ backgroundColor: colors.greenAccent[500], margin: '10px 0px', borderRadius: '2px' }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Calendar */}
                <Box flex={'1 1 100%'} ml={'15px'}>
                    <FullCalendar
                        // locale={ptLocale}
                        height={`75vh`}
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: '1', title: 'All-day event', date: '2024-09-17' },
                            { id: '2', title: 'All-day event', date: '2024-09-18' },
                        ]}
                    />
                </Box>
            </Box>
        </Box >
    )
}