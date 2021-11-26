import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ALLPost.css';

class BurgerPost extends Component{
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
             <img src="burger.jpg" alt="" width="400vw" height="400vh"/>
             <div>
 <h1>burger</h1>
<h3 >The meat is finely chopped, as well as the onions, then put together in the kibbeh, and they are mixed well.
Add flour, rusk, salt and black pepper to the mixture, and mix well.
Put a beaten egg on the mixture, and mix them well.
The ingredients are placed in a plastic bag, kept in the refrigerator, and left for at least 3 hours.
We take out the dough, and it is straightened and cut to the appropriate size, then the burger is formed into medium-sized circles.
The hamburger discs are placed in the refrigerator, and each disc is separated from the other with a plastic bag.
The burger is taken out of the refrigerator before use and then fried in oil or on the grill.
Place on a serving plate, or place in bread greased with ketchup and mayonnaise, with the addition of lettuce, tomato slices and cucumber.
Provides bliss and healing.</h3>
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
 <div>{this.state.Addcomment?<h1>{this.state.ArrComment}</h1>:""}</div><br/>



</div>
</div>
        
 


        )
    }
}

export default BurgerPost ;