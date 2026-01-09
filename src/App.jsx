
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { data } from "./data/data";
import img from "./assets/imgbg02.jpg"


function App(){

  return(
    <div className="bg-white text-white min-h-screen">
        <div className="relative">
          <Navbar/>
          <img src={img} alt="" className="absolute" />
        </div>
        <div className="relative">
          <h1 className="font-work text-center py-10 text-4xl text-amber-600">Travel Blog</h1>
        </div>
        <div className="flex justify-center my-6 relative">
          <button className="bg-amber-600 px-4 py-2 text-xl font-work2 text-white rounded-md hover:bg-amber-700 transition cursor-pointer">Add Blog</button>
        </div>

       <div className="relative px-6 md:px-20 lg:px-40 py-10 lg:mt-20" >
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center ">
            {
          data.map((item) => {
            return(
              <div key={item.placecard}>
                <Card item={item}/>
              </div>
            )
          })
        }
        </div>
       </div>
        
    </div>
  )
}

export default App;