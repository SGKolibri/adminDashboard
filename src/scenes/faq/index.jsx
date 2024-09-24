import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from "../../components/Header"

const faqs = [
    {
        question: "How do I change my password?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        question: "How do I change my password?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        question: "How do I change my password?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        question: "How do I change my password?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        question: "How do I change my password?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
]

export default function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m={'20px'}>
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            {faqs.map((faq, index) => (
                <Accordion key={index} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography variant="h6" color={colors.greenAccent[400]}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}