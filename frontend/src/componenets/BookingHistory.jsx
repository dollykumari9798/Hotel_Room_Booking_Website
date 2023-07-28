import "../assets/style/BookingHistory.css";

export default function BookingHistory() {
    return (
        <div className="BookingHistory">
            <h1 className="heading">Booking Page</h1>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Booking Date</th>
                            <th>Arrival Date</th>
                            <th>Departure Date</th>
                            <th>Duration</th>
                            <th>Hotel Name</th>
                            <th>City Name</th>
                            <th>Room Type</th>
                            <th>No. Of Persons</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span>Afghanistan</span>
                            </td>
                            <td>8,151</td>
                            <td>8,892</td>
                            <td>1.76</td>
                            <td>9,830</td>
                            <td>2.03</td>
                            <td>10,998</td>
                            <td>2.27</td>
                        </tr>
                        <tr>
                            <td>
                                <span>Albania</span>
                            </td>
                            <td>1,228</td>
                            <td>1,393</td>
                            <td>2.56</td>
                            <td>1,624</td>
                            <td>3.12</td>
                            <td>1,884</td>
                            <td>3.02</td>
                        </tr>
                        <tr>
                            <td>
                                <span>Algeria</span>
                            </td>
                            <td>8,893</td>
                            <td>9,842</td>
                            <td>2.05</td>
                            <td>10,910</td>
                            <td>2.08</td>
                            <td>11,964</td>
                            <td>1.86</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button>Print</button>
        </div>
    );
}
