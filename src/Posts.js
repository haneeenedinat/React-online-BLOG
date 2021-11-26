import React, { Component } from "react";
import './Posts.css'
import Post from "./Post";
import { Link } from "react-router-dom";


class Posts extends Component{
     constructor(){
         super();
         
         this.state={
             arrAdd:[
                {
                    src:'Manskhin.png',
                    name:' Manskhin',
                    recipe:'Put the chicken in a deep saucepan and cover it completely with water, put the pot on a medium heat, and leave it until it boils and foam forms on the surface of the water. Remove the foam using a spoon with holes, then add onions, cinnamon, cardamom, bay leaf, salt and black pepper, and leave the chicken on the fire for thirty minutes or until it is completely cooked. Put the onions in a medium-sized saucepan, and stir over a medium heat for two minutes, then add the olive oil, and stir well. Cover the pot, and cook the onions for twenty minutesزThen add salt, pepper and sumac. Remove the chicken from the boiling water, put it in an oven tray, and wipe it with a large amount of onion oil using a wide brush. Place the tray in the oven under the grill until the chicken is browned. Prepare a wide baking tray and cover it with aluminum foil. He took a loaf of bread, folded it into a triangle shape, and dipped its tip in onion oil, then put it in the tray, and spread it completely. Distribute an amount of onions over the loaf, spread sumac and pine nuts over it, put the tray into the oven and under the grill, and grill the loaf for only three to four minutes. Repeat the same steps with the rest of the loaves. Arrange the loaves of bread on top of each other in a large serving dish, and place the chicken on top'
        
                },
                {
                    src:'CrispyChicken.jpeg',
                    name:'Crispy Chicken',
                    recipe:'We season the breasts with lemon juice and all the spices and leave them for at least 3 hours in the marinade.  In a dish, put the flour, in another dish, beat the egg with salt and pepper, and in a third dish, we break the cornflakes with our hands.    We take out the chicken and season it with flour, then with eggs and corn flakes, until the quantity runs out, and put it in the refrigerator for an hour before browning.   In a frying pan, put a lot of oil and heat it, put the chicken in, reduce the heat and leave it until it becomes brown and brown, and serve.'
        
                },
                {
                    src:'Shawarma.jpg',
                    name:'Shawarma',
                    recipe:'Mix the yogurt, orange juice, lemon juice, and oil in a bowl.Add ketchup, spices, black pepper, salt, ground ginger and garlic and mix. Add the chicken and stir until covered with the seasoning.  Cover the bowl with cling film and leave it in the fridge for at least 3 hours. Heat a spoonful of vegetable oil in a wide frying pan, put the marinated chicken, and stir over medium heat until the shawarma is done. Serve with garlic sauce, pickles and Arabic bread as desired.'
        
                }
            ]
            ,
           Post:[],
             numberClickAdd:0
         }
        
       
           
       
     }

   

     addPost=()=>{
        
      

       
  
        if(this.state.numberClickAdd< this.state.arrAdd.length){
           
            this.state.Post.push(this.state.arrAdd[this.state.numberClickAdd])
            console.log(this.state.Post)
    
           
            this.setState({
                numberClickAdd:this.state.numberClickAdd+1
    
            });

       this.ElementAdd=this.state.Post.map((element)=>{
          return <Post  src={element.src}
                  name={element.name}
                  recipe={element.recipe}/>
       })
    
        }

     }

    render(){
        return(
            <>
          
            <div className="RecipesPosts">
            <h1>Recipes</h1>
            </div>
            <div className="Posts">
        
 <Link to={"/BurgerPost"}  style={{textDecoration:'none', color:'black'}}>      
 <Post src="burger.jpg" name="burger" recipe="The meat is finely chopped, as well as the onions, then put together in the kibbeh, and they are mixed well.
Add flour, rusk, salt and black pepper to the mixture, and mix well.
Put a beaten egg on the mixture, and mix them well.
The ingredients are placed in a plastic bag, kept in the refrigerator, and left for at least 3 hours.
We take out the dough, and it is straightened and cut to the appropriate size, then the burger is formed into medium-sized circles.
The hamburger discs are placed in the refrigerator, and each disc is separated from the other with a plastic bag.
The burger is taken out of the refrigerator before use and then fried in oil or on the grill.
Place on a serving plate, or place in bread greased with ketchup and mayonnaise, with the addition of lettuce, tomato slices and cucumber.
Provides bliss and healing."  /></Link>


<Link to={"/MansafPost"}  style={{textDecoration:'none', color:'black'}}>
   <Post src="Mansaf.jpg" name="Mansaf" recipe="We wash the meat well and put it in the pressure cooker, add the spices to it and leave it until it is fully cooked.
Soak the rice in water with turmeric added.
Put the rice in a saucepan, add half a cup of oil to it and add 3 cups of water to it.
Add salt to it and leave it on the fire until it boils, and reduce the fire until it is fully cooked.
Put the meat in a pot, add the frozen milk to it, and leave it on the fire a little.
Put the rice in a large plate, add the meat, decorate with parsley and almonds, 
and serve with bliss and healing."/></Link>

<Link to={"/MacaroniPost"}  style={{textDecoration:'none', color:'black'}}>
 <Post  src="Macaroni.jpg" name="Macaroni" recipe="First we boil the pasta, we bring a large pot and fill it with water and leave it on a medium heat until it boils
After the water boils, we put 2 tablespoons of oil and a tablespoon of salt, then add one bag of penne pasta and leave it for 10 minutes, stirring from time to time until the pasta is cooked
We filter the pasta from the boiling water through a strainer, then wash it with cold water
We prepare the pasta sauce, we cut a medium-sized onion into small cubes, bring the electric mixer, put half a kilo of tomatoes in it and beat it until it becomes tomato juice
In a bowl, put 2 teaspoons of oil, 2 minced garlic cloves and a medium-sized onion, cut into small cubes, and put it on a medium heat, stirring, until the garlic and onions turn golden
As soon as the onions and garlic turn golden"/></Link>



           {this.ElementAdd}

           {/* <Post/>
           <Post/>
           <Post/> */}
            </div>
            <button className="Add" onClick={this.addPost}>Add Post</button>
            </>
        )
    }
}

export default Posts;