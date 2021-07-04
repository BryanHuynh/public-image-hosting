import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    contentAlign: 'center',
    position:'relative',
    margin: "10px 0",
    width: '97%',
    backgroundColor: 'gray',
    height: '100px',
    outline: '2px dashed white',
    outlineOffset: '-10px',
    '& input': {
      position: 'absolute',
      opacity: 0,
      height: '100%',
      width: '100%',
      zIndex: 1,
    },
  },

   buttonSubmit: {
    marginBottom: 10,
  },
  
  fileUploadIcon: {
    cursor: 'pointer',
    padding: '5px 10px',
    border: '1px solid black',
    color: 'black',
    background: 'white',
    /* And other properties according to your preference */
  },
}));