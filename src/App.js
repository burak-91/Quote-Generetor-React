import Ui from "./Ui";
import React, { useState,useEffect, Fragment } from 'react';
import Loading from "./Loading";


function App() {
  const [quotes, setquotes] = useState([]);
  const [author,setAuthor] = useState("");
  const [text, setText] = useState("");
  const [loading,changeLoading]= useState(false)
  const url ="https://type.fit/api/quotes";
  

  useEffect(() => {
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let genereteNumber = Math.floor(Math.random()*1643)+1
      setquotes(data)
      setAuthor(data[genereteNumber].author)
      setText(data[genereteNumber].text)
    })
    
  },[]);

  const getNewQuotes=()=>{
    changeLoading(true)
    setTimeout(() => {
      changeLoading(false)
    },750);
      let randomNumber =Math.floor(Math.random()*1643)+1
      setAuthor(quotes[randomNumber].author)
      setText(quotes[randomNumber].text)
      
     
  }
  const goToTweeter=()=>{
    const twitterUrl=`https://twitter.com/intent/tweet?text=${text}-${author}`
    window.open(twitterUrl,"_blank")
  }


  return (
    <Fragment>
     <div>
       {loading?(<Loading/>):(<Ui goToTweeter={goToTweeter} author={author} text={text} getNewQuotes={getNewQuotes}/>)}
       
     </div>
     
     </Fragment>
     
 
  );
}

export default App;
