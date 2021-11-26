import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ALLPost.css';

class MacaroniPost extends Component{
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
             <img src="Macaroni.jpg" alt="" width="400vw" height="400vh"/>
             <div>
 <h1>Macaroni</h1>
<h3 >First we boil the pasta, we bring a large pot and fill it with water and leave it on a medium heat until it boils
After the water boils, we put 2 tablespoons of oil and a tablespoon of salt, then add one bag of penne pasta and leave it for 10 minutes, stirring from time to time until the pasta is cooked
We filter the pasta from the boiling water through a strainer, then wash it with cold water
We prepare the pasta sauce, we cut a medium-sized onion into small cubes, bring the electric mixer, put half a kilo of tomatoes in it and beat it until it becomes tomato juice
In a bowl, put 2 teaspoons of oil, 2 minced garlic cloves and a medium-sized onion, cut into small cubes, and put it on a medium heat, stirring, until the garlic and onions turn golden
As soon as the onions and garlic turn golden</h3>
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

export default MacaroniPost ;