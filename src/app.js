import "bootstrap";
import "./style.css";

window.onload = function () {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse()
    })
  const generateExcuse = () => {
    let who = ['The dog', 'My grandma', 'The mailman', 'My wife\'s boyfriend'];
    let action = ['ate', 'granted a new, eldritch form of evolution to', 'disintigrated', 'killed'];
    let what = ['my father', 'my cellular device', 'the cybertruck'];
    let when = ['before the ritual', 'when I was big snoozin', 'while I was taking my daily scream', 'during my ascension', 'while I was jorkin'];

    let whoIndex = Math.floor(Math.random() * who.length)
    let actionIndex = Math.floor(Math.random() * action.length)
    let whatIndex = Math.floor(Math.random() * what.length)
    let whenIndex = Math.floor(Math.random() * when.length)

    return (who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex]
    )
  }
}