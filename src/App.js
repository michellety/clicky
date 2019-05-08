//import dependencies 
import React from "react";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import animals from "./animals.json";
import "./App.css";


class App extends React.Component {
  //state in reference to the animals.json 
  state = {
    //naming  the object property the same as the variable 
    animals,
    score: 0,
    highScore: 0,
    clicked: []
  };

  //function to shuffle images and increment score

  handleShuffle = (id) => {
    if (!this.state.clicked.includes(id)) {
      // still playing
      this.setState({
        score: this.state.score + 1,
        //adds the id to the array of clicked images
        clicked: [...this.state.clicked, id],
        highScore: this.state.score + 1 > this.state.highScore ? this.state.score + 1 : this.state.highScore
      });
    } else {
      this.setState({
        score: 0,
        clicked: [],
      });
    }
    this.setState({
      animals: animals.sort(() => Math.random() - 0.5),
    });
  }


  renderCard = () => {

    return this.state.animals.map(({ id, image }) => {

      // const { id, image } = animal;
      //object destructuring 
      return (
        <Card
          //id is animal.id
          handleShuffle={() => this.handleShuffle(id)}
          image={image}
          key={id}
        />
      )
    })

  }

  render() {
    return (

      <div>
        <Header />
        <About />
        <div className="scores">
          Score: {this.state.score}  |
          Top Score: {this.state.highScore}
        </div>
        <Wrapper>
          {this.renderCard()}
        </Wrapper>

      </div>

    );
  }
};

export default App;
