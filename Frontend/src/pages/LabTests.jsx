import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
function LabTests(){
    const [tests, setTests] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const fetch = async() => {
            try{
                const res = await axios.get(
                    `${API_URL}/api/`,{
                        withCredentials: true
                    }
                )
                console.log(res)
                setTests(res.data)
            }catch(err){
                alert(err.message)
            }
        }
        fetch();
    },[])

  const handleBooking = async(testId)=>{
    const res = await axios.post(
      `${API_URL}/api/book`,{testId},{
        withCredentials: true
      }
    )
    alert(res.data.message);
  }

    return(
        <div className="test">
          <h1>Available Tests</h1>
          <div className="cards">
            {tests.length > 0 &&
              tests.map((test, i) => (
                <div className="card" key={i}>
                  <h3>{test.name}</h3>
                  <p className="description">{test.description}</p>
                  <div className="price-book">
                    <span>₹{test.price}</span>
                    <button className="book-btn" onClick={() => handleBooking(test._id)}>Book</button>
                  </div>
                </div>
              ))}
          </div>
          <div className="booking-container">
            <button className="booking" onClick={() => navigate(`/bookings`)}>
              View All Bookings
            </button>
          </div>
        </div>
    )
}

export default LabTests