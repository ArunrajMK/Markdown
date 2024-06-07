import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { convertData } from '../redux/data/action';
import { Box, FormControlLabel, FormGroup, Switch, Typography, styled } from '@mui/material';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; 


const Wrapper = styled(Box)(({ theme }) => ({
     display:'flex',
     backgroundColor:'white',
     justifyContent:'center',
     alignItems:'center',
     height: '100%',
     width: '100%',

     gap:'10px',
    [theme.breakpoints.down("xl")]: {
    
    },
    [theme.breakpoints.down("lg")]: {
     
    },
    [theme.breakpoints.down("md")]: {
    flexDirection:'column'
    },
    [theme.breakpoints.down("sm")]: {
    
    },
  }));


  const MainBox = styled(Box)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height: '100%',
    width: '100%',

    paddingTop:'10px',
    paddingBottom:'10px',
    gap:'10px',
   [theme.breakpoints.down("xl")]: {
   
   },
   [theme.breakpoints.down("lg")]: {
    
   },
   [theme.breakpoints.down("md")]: {

   },
   [theme.breakpoints.down("sm")]: {
   
   },
 }));



 const ScreenBox = styled(Box)(({ theme }) => ({
    paddingTop:'10px',
    paddingBottom:'10px',
    height: '70vh',
    width: '60%',
    border: '1px solid grey',

    overflowY: 'scroll',  
    scrollbarWidth: 'thin', 
    scrollbarColor: 'grey lightgrey', 
    '&::-webkit-scrollbar': {
        width: '3px', 
        height:'400px',
        borderRadius: '20px'
    },
    '&::-webkit-scrollbar-track': {
        background: 'lightgrey', 
        borderRadius: '20px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'grey', 
        borderRadius: '20px', 
    },
    [theme.breakpoints.down("xl")]: {
       
    },
    [theme.breakpoints.down("lg")]: {
       
    },
    [theme.breakpoints.down("md")]: {
        width: '90%', 
    },
    [theme.breakpoints.down("sm")]: {
        
    },
}));

 const TextBox = styled(Box)(({ theme }) => ({
    height: '400px',
    width: '35%',
    border:'1px solid grey',
    borderRadius:'10px',
   [theme.breakpoints.down("xl")]: {
   
   },
   [theme.breakpoints.down("lg")]: {
    
   },
   [theme.breakpoints.down("md")]: {
    width: '90%',
   },
   [theme.breakpoints.down("sm")]: {
   
   },
 }));




function Convert() {
  const [markdown, setMarkdown] = useState('');
  const dispatch = useDispatch()
  const data = useSelector((store)=>store.data.convert) || ""
  
  useEffect(() => {
    let data = {
        html:markdown
    }
     dispatch(convertData(data))
  }, [markdown]);


  return (
    <MainBox>
       
    <Wrapper >
<TextBox as="textarea"  placeholder="Mark down here..." value={data?.response}
          onChange={(e) => setMarkdown(e.target.value)}   >

</TextBox>
   
      <ScreenBox>
      
        <article >
      
<ReactMarkdown 
                children={data?.response} 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeRaw]} 
                components={{ a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer"/> }}
            />
        </article>
      </ScreenBox>
   
    </Wrapper>
    </MainBox>
  );
}

export default Convert;