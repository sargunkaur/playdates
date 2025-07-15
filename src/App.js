import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    async function fetchActivities() {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .order('date', { ascending: true });

      if (!error) setActivities(data);
    }

    fetchActivities();
  }, []);

  async function book(activity_id, name, email) {
    const { error } = await supabase.from('bookings').insert([
      { activity_id, name, email },
    ]);

    if (!error) setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 2000);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Available Activities</h2>
      {activities.map((activity) => (
        <div key={activity.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <p><strong>Date:</strong> {new Date(activity.date).toLocaleString()}</p>
          <BookingForm onBook={(name, email) => book(activity.id, name, email)} />
        </div>
      ))}
      {bookingSuccess && <p style={{ color: 'green' }}>Booking successful!</p>}
    </div>
  );
}

function BookingForm({ onBook }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onBook(name, email);
        setName('');
        setEmail('');
      }}
    >
      <input
        required
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{' '}
      <input
        required
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{' '}
      <button type="submit">Book</button>
    </form>
  );
}

export default App;
