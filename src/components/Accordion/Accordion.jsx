import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  boxShadow: 'none', 
  '&::before': {
    display: 'none', 
  },
  '&:not(:last-child)': {
    marginBottom: theme.spacing(3), 
  },
  border: '1px solid rgba(0, 0, 0, 0.12)', 
  borderRadius: theme.shape.borderRadius, 
  overflow: 'hidden', 
}));

const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor: 'transparent', 
  padding: theme.spacing(2), 
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)', 
    color: theme.palette.primary.main, 
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: 0, 
    color: theme.palette.primary.secondary, 
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '1.125rem', // 18px
    lineHeight: 1.2,
  },
  minHeight: 'auto !important', 
}));

const StyledAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2), 
  borderTop: '1px solid rgba(0, 0, 0, 0.08)', 
  fontSize: '0.875rem', 
  color: theme.palette.text.secondary,
}));

export default function CustomizedAccordions({ data }) {
  const [expanded, setExpanded] = React.useState(''); 

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false); 
  };

  return (
    <div>
      {data.map((item, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <StyledAccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
            expandIcon={<AddIcon />}
          >
            <Typography>{item.question}</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>{item.answer}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
}