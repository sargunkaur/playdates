import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      const { data, error } = await supabase.from('activities').select('*');
      if (!error) {
        setActivities(data);
      } else {
        console.error('Error fetching activities:', error);
      }
    }
    fetchActivities();
  }, []);

  return (
    <div className="container">
      <h2>🎉 My Activities</h2>
      <div className="grid">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

function ActivityCard({ activity }) {
  const tags = Array.isArray(activity.tags)
    ? activity.tags
    : typeof activity.tags === 'string'
      ? activity.tags.split(',').map(tag => tag.trim())
      : [];

  return (
    <div className="card">
      <div className="header">
        <span role="img" aria-label="party">🎉</span>
        <span className="status">Unknown</span>
        <span className="price">$</span>
      </div>
      <h3>{activity.title}</h3>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
        {activity.points && <span className="tag points">+{activity.points}</span>}
      </div>
    </div>
  );
}

export default App;
