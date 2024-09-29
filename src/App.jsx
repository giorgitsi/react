// import './App.css'
import './styles/main.css'
import './styles/navbar.css'
import Img from './assets/image.png'
import Img2 from './assets/img2.webp'

function App() {
  const num1 = 22
  let num2 = 31
  console.log(num2)
  let arr = [1, 43, 4, 67]
  console.log("lenfth: ", arr.length)
  arr.push(87)
  console.log(arr)
  console.log(num1)
  console.log("Hello123")

  let obj1 = {
    name: "maik",
    age: 25
  }

  console.log(obj1.age)

  return (
    <>
      <h2>random num:let =  {Math.floor(Math.random() * 10)}</h2>
      <button>{num1}</button>
      <h1>hello {num2}</h1>
      <button className='btn'>click me!</button>
      <p>hi  {arr[1]}</p>
      <p>age is: {obj1.age}</p>
      <img className='img' src={Img} alt="" />
      <img className='img' src={Img2} alt="" />
      <img className='img' src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="" />
    </>
  )
}

export default App


