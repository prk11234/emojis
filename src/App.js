import * as React from "react";
import { connect } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress';
import CardComponent from "./CardComponent";
import TreeView from "./TreeComponent"
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const App = (props) => {
  const [PageInitial, setPageInitial]=React.useState(0)
  const [PageFinal, setPageFinal]=React.useState(10)
  const [inputText, setTextValue]= React.useState("")
  let toHTML = (props) => ({
    __html: props
  });
  return (
      <SplitterLayout split="vertical" percentage={true} secondaryInitialSize={80}>
        <TreeView/>
      {props.data ? 
      <div style={{display: "flex", flexDirection:"column"}}>
        <TextField id="outlined-basic" label="Search Bar" variant="outlined" style={{top:'10px', width: '400px'}} size="small"  value={inputText} onChange={(e)=> { setTextValue(e.target.value)}}/>
      <div style={{display: "flex", flexFlow: "row wrap", top: '5px'}}>
      { inputText.length == 0 ? 
      props.currentTreeLabel === "Default" ? 
      props.data.slice(PageInitial,PageFinal).map((v,e)=>
      <CardComponent v={v}/>
      ):props.data.map((key,value) => 
      (key.category.toLowerCase()).includes(props.currentTreeLabel.toLowerCase()) && <CardComponent v={key}/>
    ):
      props.data.map((key,value) => 
        (key.category.toLowerCase()).includes(inputText.toLowerCase()) && <CardComponent v={key}/>
      )
      }
      </div>
      {<div style={{position: "fixed", zIndex:"3", right: "0px", bottom: "0px"}}><Pagination count={Math.ceil(props.data.length/10)} variant="outlined" color="primary" disabled = {!(inputText.length===0 && props.currentTreeLabel==="Default" )} onChange={(event, value) => { setPageInitial ((Number(value)-1)*10);setPageFinal((Number(value))*10)}}/></div>}
      <div>
      </div>
      </div>: <div style={{margin: '250px 600px'}}><CircularProgress size={120}/></div>}
      </SplitterLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state && state.rowData,
    currentTreeLabel: state && state.TreeStructure && state.TreeStructure.currentTreeLabel
  }
}

export default connect(mapStateToProps, null)(App);