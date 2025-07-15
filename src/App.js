body {
  font-family: 'Segoe UI', sans-serif;
  background: #f8f8f8;
  margin: 0;
  padding: 0;
}

.container {
  padding: 40px;
}

h2 {
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}

.status, .price {
  background: #f3f3f3;
  padding: 2px 6px;
  border-radius: 6px;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: #f3e8ff;
  color: #6b21a8;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  white-space: nowrap;
}

.points {
  background: #e2e8f0;
  color: #2d3748;
}
