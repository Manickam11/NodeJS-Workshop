{/*Parent File*/}
import AppBar from "./components/AppBar"
import Description from "./components/Description"
import Counter from "./components/Counter"
import Post from "./components/post"

const btnstyle = {padding:10,borderRadius:10}

function App() {
  return (
    <>{/*Fragments*/}
    <AppBar cardtitle="Rajalakshmi Engineering College"/>
    <Description/>
    <Counter btnstyle={btnstyle}/>
    <Post/>
    <AppBar cardtitle="Thank You"/>
    </>
  )
}

export default App
