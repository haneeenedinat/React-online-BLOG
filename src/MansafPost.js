import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ALLPost.css';

class MansafPost extends Component{
    constructor(){
        super();

        this.state={
             number:0,
             comment:'',
             Addcomment:false,
             ArrComment:[]
        }
    }
    addLike=()=>{
        this.setState({
            number:this.state.number+1,
        })
        console.log(this.state.number)
    }

   
    handelComment=(e)=>{
        this.setState({
            comment:e.target.value,
        })

       
       
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        // let newArr=this.state.ArrComment;
        // newArr.push(this.state.comment);

       this.state.ArrComment.push(this.state.comment);

       this.setState({
        Addcomment:true,
       })
    
    //    console.log(newArr)


       e.target.reset();
       
    }

    render(){
        return(       
             <div className="SinglePostDiv">
             <img src="Mansaf.jpg" alt="" width="400vw" height="400vh"/>
             <div>
 <h1>Mansaf</h1>
<h3 >We wash the meat well and put it in the pressure cooker, add the spices to it and leave it until it is fully cooked.
Soak the rice in water with turmeric added.
Put the rice in a saucepan, add half a cup of oil to it and add 3 cups of water to it.
Add salt to it and leave it on the fire until it boils, and reduce the fire until it is fully cooked.
Put the meat in a pot, add the frozen milk to it, and leave it on the fire a little.
Put the rice in a large plate, add the meat, decorate with parsley and almonds, and serve with bliss and healing.</h3>
<div class="AddLike">
<span>{this.state.number}</span><i className="far fa-thumbs-up" onClick={this.addLike}></i>
</div>
<div className="AddComments">
<h3>Comments :</h3>
<form onSubmit={this.handleSubmit}>
 <input type="text" name="text" onChange={(e)=>{this.handelComment(e)}} />
 <button type="submit" >Add Comments</button><br/>
 </form>
 </div>
 <div>{this.state.Addcomment?<h1>{this.state.ArrComment}</h1>:""}</div>



</div>
</div>
        
 


        )
    }
}

export default MansafPost ;