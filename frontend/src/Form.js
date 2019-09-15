import React from 'react';


export default props=> {
    // const [comment, setComment] = useState({}); 

    const submitForm = (e) => {
        e.preventDefault();
        console.log("virkar að senda"); 
    }
    return(

    <div>
        <form method="post" onSubmit={submitForm}>
            <lable htmlFor="title">Titill</lable><br/>
            <input id="title"></input><br/>
            <lable htmlFor="ath">Athugasemd</lable><br/>
            <input id="id"></input><br/>
            <input type="submit"/><br/><br/>
        </form>
    </div>
    
)}