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
      slowestQuery: '14.49s',
      totalSlowQueries: 4799,
      p95ResponseTime: '45.2ms',
      criticalQueries: 2,
      warningQueries: 2
    }
  });
});

// Metrics endpoint
app.get('/metrics', (req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    organization: 'circit-ltd',
    metrics: {
      slowest_query_ms: 14490,
      average_slow_query_ms: 7100,
      total_slow_queries_24h: 4799,
      p95_response_time_ms: 45.2,
      queries: [
        { name: 'SELECT Multiple Subqueries', avg_time_ms: 14490, severity: 'critical' },
        { name: 'Complex Request Collection', avg_time_ms: 11520, severity: 'critical' },
        { name: 'Database Constraint Operations', avg_time_ms: 7800, severity: 'warning' },
        { name: 'PBC Message Counter', avg_time_ms: 5370, severity: 'warning' },
        { name: 'Audit Item Exception', avg_time_ms: 4800, severity: 'slow' }
      ]
    }
  });
});

app.listen(PORT, () => {
  console.log(`Dashboard server running on port ${PORT}`);
  console.log(`View dashboard at http://localhost:${PORT}`);
});