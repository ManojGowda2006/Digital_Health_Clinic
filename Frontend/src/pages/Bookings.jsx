import { useEffect, useState } from "react";
import axios from "axios";
const API_URL= import.meta.env.VITE_API_URL
function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/bookings`, {
          withCredentials: true,
        });
        console.log(res.data)
        setBookings(res.data); 
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  const handleDownload = async() => {
      const res = await axios.get(
        `${API_URL}/api/bookings/download`,{
          responseType: 'blob',
          withCredentials: true
        }
      )
    const blob = new Blob([res.data], { type: 'application/pdf' });
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `Report-${"dummy"}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="bookings-container">
      <h1> Bookings Report</h1>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Booking Id</th>
              <th>Test</th>
              <th>Date</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{booking._id}</td>
                  <td>{booking.testId.name}</td>
                  <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                  <td><button className="download" onClick={handleDownload}>Download</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Bookings;
