import * as React from 'react';
import TreeView from '@mui/lab/TreeView/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem/TreeItem';
import { connect } from 'react-redux'


const TreeComponent= (props) => {

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: '100%', flexGrow: 1 }}
      defaultExpanded={['1']}
      defaultSelected={['2']}
    >
      <TreeItem nodeId="1" label="Category">
        {
          props.category && props.category.map((key)=>
          {
          return(
        <TreeItem nodeId={key} label={key} onClick={(e)=>{props.labelChange( e.target.textContent)}} onLabelClick={(e)=>{console.log('Label click called', e.target.value)}} onIconClick={(e)=>{console.log('Label click called', e.target.value)}}/>  
          )})
        }
      </TreeItem>
      <TreeItem nodeId="2" label="Default"  onClick={(e)=>{props.labelChange( e.target.textContent)}}>
      </TreeItem>
    </TreeView>
  );
}
const mapStateToProps = (state)  => {
    return {
      category: state && state.TreeStructure && state.TreeStructure.category,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      labelChange: (e) => dispatch({ type: "LABEL_CHANGE", payload:e }),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(TreeComponent)