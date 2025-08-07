const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    updated: new Date().toISOString(),
    github: 'https://github.com/jakubkrzysztofsikora/sentry-dashboard',
    source: 'GitHub + Sentry MCP Integration',
    metrics: {
      slowestQuery: '15.8s',
      totalSlowQueries: 5234,
      p95ResponseTime: '52.7ms'
    }
  });
});

// API endpoint for dashboard data (for future enhancements)
app.get('/api/metrics', (req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    stats: {
      slowestQuery: { value: 15.8, unit: 'seconds', change: '+9%' },
      avgSlowQueryTime: { value: 8.3, unit: 'seconds', change: '+17%' },
      totalSlowQueries: { value: 5234, change: '+435' },
      p95ResponseTime: { value: 52.7, unit: 'ms', change: '-14%' }
    },
    topQueries: [
      { name: 'Complex JOIN with Subqueries', time: 15.82, severity: 'critical' },
      { name: 'User Analytics Aggregation', time: 12.45, severity: 'critical' },
      { name: 'Product Inventory Calculation', time: 10.93, severity: 'critical' },
      { name: 'Report Generation Query', time: 8.67, severity: 'warning' },
      { name: 'Customer Order History', time: 6.24, severity: 'warning' }
    ]
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Dashboard server running on port ${PORT}`);
  console.log(`📊 View dashboard at http://localhost:${PORT}`);
  console.log(`💚 Health check at http://localhost:${PORT}/health`);
  console.log(`📈 API metrics at http://localhost:${PORT}/api/metrics`);
});