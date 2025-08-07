# 📊 Sentry SQL Performance Dashboard

Auto-generated dashboard tracking database performance metrics from Sentry.

## 📈 Current Metrics
- Last Updated: 2025-08-07T12:00:00Z
- Slowest Query: 15.8s
- Total Slow Queries: 5,234
- P95 Response Time: 52.7ms

## 🔗 Links
- [Live Dashboard](https://sentry-db-perf-dashboard.herokuapp.com)
- [GitHub Repository](https://github.com/jakubkrzysztofsikora/sentry-dashboard)
- [GitHub Pages](https://jakubkrzysztofsikora.github.io/sentry-dashboard/)

## 🚀 Features
- Real-time SQL query performance monitoring
- 30-day trend analysis for top 5 slowest queries
- Interactive charts with Chart.js
- Responsive design with glass-morphism effects
- Direct Sentry integration links for each query
- Automatic performance categorization (Critical/Warning/Slow)

## 📝 Query Categories
- **Critical** (>10s): 3 queries - Immediate attention required
- **Warning** (5-10s): 4 queries - Performance optimization needed
- **Slow** (3-5s): 3 queries - Consider optimization
- **Normal** (<3s): Within acceptable range

## 🔄 Auto-Updates
This dashboard is automatically updated every hour with fresh data from Sentry.

## 🛠 Technical Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript
- **Charts**: Chart.js 3.9.1
- **Hosting**: Heroku (Node.js/Express server)
- **Source Control**: GitHub
- **Data Source**: Sentry Performance Monitoring

## 📦 Deployment

### GitHub Pages
The dashboard is automatically available at:
```
https://jakubkrzysztofsikora.github.io/sentry-dashboard/
```

### Heroku Deployment
1. The app is configured to auto-deploy from the `main` branch
2. Server runs on Node.js with Express
3. Accessible at: `https://sentry-db-perf-dashboard.herokuapp.com`

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/jakubkrzysztofsikora/sentry-dashboard
cd sentry-dashboard

# Install dependencies (for local server)
npm install

# Run locally
node server.js

# Open browser to http://localhost:3000
```

## 📊 Dashboard Components

1. **Performance Stats Grid**
   - Slowest Query Time
   - Average Slow Query Time
   - Total Slow Queries Count
   - P95 Response Time

2. **Alert Banner**
   - Critical performance warnings
   - Real-time issue notifications

3. **Top 10 Slowest Queries Bar Chart**
   - Visual representation of query performance
   - Color-coded by severity

4. **30-Day Trend Line Chart**
   - Historical performance data
   - Weekend pattern recognition
   - Recent spike detection

5. **Query Details with Sentry Links**
   - Direct links to Traces Explorer
   - Database Insights integration
   - 30-day trend analysis

## 🔗 Sentry Integration

Each query includes three direct Sentry links:
- **Traces Explorer**: View detailed trace information
- **Database Insights**: Analyze database performance
- **30-Day Trend**: Historical performance analysis

## 📱 Mobile Responsive

The dashboard is fully responsive and optimized for:
- Desktop (1400px+)
- Tablet (768px - 1399px)
- Mobile (<768px)

## 🎨 Design Features

- **Glass-morphism Effects**: Modern frosted glass appearance
- **Animated Gradients**: Dynamic background animations
- **Hover Interactions**: Smooth transitions and effects
- **Color-Coded Severity**: Visual performance indicators
- **Shimmer Effects**: Premium feel with subtle animations

## 📝 License

This dashboard is auto-generated from Sentry data and is proprietary to the organization.

## 🤝 Contributing

This is an auto-generated dashboard. Manual changes will be overwritten during the next update cycle.

## 📞 Support

For issues or questions, please contact your DevOps team or check the Sentry documentation.

---

*This dashboard is automatically generated and updated. Do not modify manually.*