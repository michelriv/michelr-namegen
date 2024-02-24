/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  console.log("Hello Rigo from the console!");
 
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "amazing"];
  let noun = ["jogger", "racoon", "dog", "student"];

  console.log(pronoun[0] + adj[0] + noun[0] + ".com");
  console.log(pronoun[0] + adj[0] + noun[1] + ".com");
  console.log(pronoun[0] + adj[0] + noun[2] + ".com");

  for (let i = 0; i < pronoun.length; ++i) {
    for (let j = 0; j < adj.length; ++j) {
      for (let k = 0; k < noun.length; ++k) {
        console.log(pronoun [i] + adj [j] + noun [k] + ".com")
    }
  }
}
};