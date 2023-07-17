import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';


const CardComponent = (props) => {
  const [expanded, setExpanded]=React.useState("")
  const [expandedSelect, setExpandedSelect]=React.useState(false)
  const [PageInitial, setPageInitial]=React.useState(0)
  const [PageFinal, setPageFinal]=React.useState(10)
  const [inputText, setTextValue]= React.useState("")
  let toHTML = (props) => ({
    __html: props
  });
  return (
    <div id= {props.v.htmlCode[0]} style={{margin: "7px 7px"}}>
        {console.log('V value recieved',props.v)}
    <Card key ={props.v.htmlCode[0]} sx={{ width: 300 }}><CardContent>
    <span className="tw-text" dangerouslySetInnerHTML={toHTML(props.v.htmlCode[0])} />
    <div style={{display: "flex", flexFlow: "row wrap"}}>
    <Typography gutterBottom variant="h10" color="purple">
    Category : 
  </Typography>
    <Typography key ={props.v.htmlCode[0]} sx={{ mb: 1.5 }} color="black">
    {props.v.category}
  </Typography>
  </div>
    </CardContent>
    <IconButton key ={props.v.htmlCode[0]} aria-label="delete" onClick={() => {setExpanded(props.v.htmlCode[0]);setExpandedSelect(!expandedSelect)}}>
    {!(props.v.htmlCode[0]===expanded && expandedSelect)?<ExpandMoreIcon />:<ExpandLessIcon />}
    </IconButton>
<Collapse in={props.v.htmlCode[0]===expanded && expandedSelect} key ={props.v.htmlCode[0]} timeout="auto" unmountOnExit>
<div style={{display: "flex", flexDirection:"column"}}>
<div style={{display: "flex", flexFlow: "row wrap"}}>
    <Typography gutterBottom variant="h8" color="purple">
    Group : 
  </Typography>
    <Typography key ={props.v.htmlCode[0]} sx={{ mb: 1.5 }} color="black">
    {props.v.group}
  </Typography>
  </div>
  <div style={{display: "flex", flexFlow: "row wrap"}}>
    <Typography gutterBottom variant="h10" color="purple">
    Name : 
  </Typography>
    <Typography key ={props.v.htmlCode[0]} sx={{ mb: 1.5 }} color="black">
    {props.v.name}
  </Typography>
  </div>
  <div style={{display: "flex", flexFlow: "row wrap"}}>
    <Typography gutterBottom variant="h10" color="purple">
    Html Code : 
  </Typography>
    <Typography key ={props.v.htmlCode[0]} sx={{ mb: 1.5 }} color="black">
    {props.v.htmlCode[0]}
  </Typography>
  </div>
  </div>

</Collapse>
</Card>
  </div>
  )
}

export default CardComponent