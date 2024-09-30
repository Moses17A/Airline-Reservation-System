// src/BookingForm.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [cities, setCities] = useState([]);
    const [departureCity, setDepartureCity] = useState('');
    const [arrivalCity, setArrivalCity] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [duration, setDuration] = useState('');
    const [totalSeats, setTotalSeats] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        // Fetch cities from the API
        axios.get('http://localhost:8000/api/flights/')
            .then(response => {
                setCities(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the cities!", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingData = {
            departure_city: departureCity,
            arrival_city: arrivalCity,
            flight_number: flightNumber,
            departure_time: departureTime,
            arrival_time: arrivalTime,
            duration: duration,
            total_seats: Number(totalSeats),  // Ensure these are numbers
            available_seats: Number(availableSeats),
        };

        // Send the booking data to the API
        axios.post('http://localhost:8000/api/flights/', bookingData)
            .then(response => {
                setResponseMessage("Flight booked successfully!");
            })
            .catch(error => {
                setResponseMessage("Error booking flight. Please try again.");
                console.error("There was an error!", error);
            });
    };

    return (
        <div>
            <h1>Flight Booking</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="departureCity">Departure City:</label>
                <select id="departureCity" onChange={(e) => setDepartureCity(e.target.value)} required>
                    <option value="">Select a city</option>
                    {cities.map(city => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                    ))}
                </select>

                <label htmlFor="arrivalCity">Arrival City:</label>
                <select id="arrivalCity" onChange={(e) => setArrivalCity(e.target.value)} required>
                    <option value="">Select a city</option>
                    {cities.map(city => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                    ))}
                </select>

                <label htmlFor="flightNumber">Flight Number:</label>
                <input type="text" id="flightNumber" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} required />

                <label htmlFor="departureTime">Departure Time:</label>
                <input type="datetime-local" id="departureTime" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} required />

                <label htmlFor="arrivalTime">Arrival Time:</label>
                <input type="datetime-local" id="arrivalTime" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} required />

                <label htmlFor="duration">Duration (HH:MM:SS):</label>
                <input type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />

                <label htmlFor="totalSeats">Total Seats:</label>
                <input type="number" id="totalSeats" value={totalSeats} onChange={(e) => setTotalSeats(e.target.value)} required />

                <label htmlFor="availableSeats">Available Seats:</label>
                <input type="number" id="availableSeats" value={availableSeats} onChange={(e) => setAvailableSeats(e.target.value)} required />

                <button type="submit">Book Flight</button>
            </form>

            {responseMessage && <div>{responseMessage}</div>}
        </div>
    );
};

export default BookingForm;
