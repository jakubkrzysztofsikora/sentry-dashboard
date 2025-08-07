# 📊 Sentry SQL Performance Dashboard

Auto-generated dashboard tracking database performance metrics from Sentry.

## 📈 Current Metrics
- **Last Updated**: January 9, 2025
- **Slowest Query**: 14.49s
- **Total Slow Queries**: 4,799
- **P95 Response Time**: 45.2ms
- **Average Slow Query Time**: 7.1s

## 🔗 Quick Links
- [Live Dashboard](https://sentry-db-perf-dashboard.herokuapp.com)
- [GitHub Repository](https://github.com/jakubkrzysztofsikora/sentry-dashboard)
- [Sentry Organization](https://circit-ltd.sentry.io)
- [Heroku App Management](https://dashboard.heroku.com/apps/sentry-db-perf-dashboard)

## 🚨 Critical Issues Detected
⚠️ **Multiple queries exceeding 10 seconds execution time**

### Top 5 Slowest Queries:
1. **SELECT with Multiple Subqueries** - 14.49s (CRITICAL)
   - Complex joins across multiple tables
   - Multiple nested subqueries impacting performance
   
2. **Complex Request Collection Query** - 11.52s (CRITICAL)
   - RequestCollection.cs:35
   - Heavy aggregation operations
   
3. **Database Constraint Operations** - 7.80s (WARNING)
   - Foreign key constraint operations
   - Table truncation and recreation
   
4. **PBC Message Counter Query** - 5.37s (WARNING)
   - PbcMessageCounterProvider.cs:16
   - Large IN clause with multiple IDs
   
5. **Audit Item Exception Query** - 4.80s (SLOW)
   - Multiple JOIN operations
   - Complex WHERE conditions

## 📊 Dashboard Features
- ✅ Real-time performance metrics from Sentry
- ✅ Interactive charts showing query performance trends
- ✅ Direct links to Sentry traces for each slow query
- ✅ Color-coded severity indicators
- ✅ 30-day trend analysis for top queries
- ✅ Responsive design for all devices
- ✅ Auto-refresh capabilities

## 🛠️ Technology Stack
- **Frontend**: HTML5, Chart.js, CSS3 with glassmorphism effects
- **Backend**: Express.js server
- **Deployment**: Heroku (Node.js)
- **Data Source**: Sentry API via MCP tools
- **Version Control**: GitHub

## 📦 Installation & Local Development

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Git

### Local Setup
```bash
# Clone the repository
git clone https://github.com/jakubkrzysztofsikora/sentry-dashboard.git
cd sentry-dashboard

# Install dependencies
npm install

# Run locally
npm start

# Open in browser
# http://localhost:3000
```

## 🚀 Deployment

### Heroku Deployment (Existing App)
```bash
# Add Heroku remote
heroku git:remote -a sentry-db-perf-dashboard

# Deploy
git push heroku main

# Ensure web dyno is running
heroku ps:scale web=1

# View logs
heroku logs --tail
```

### GitHub Pages (Alternative)
The dashboard can also be viewed via GitHub Pages:
1. Go to Settings → Pages
2. Select source: Deploy from branch
3. Choose: main branch / root
4. Access at: https://jakubkrzysztofsikora.github.io/sentry-dashboard

## 📊 API Endpoints

The Express server provides the following endpoints:

- **`GET /`** - Main dashboard HTML
- **`GET /health`** - Health check and basic metrics
- **`GET /metrics`** - Detailed performance metrics in JSON

### Example Health Response:
```json
{
  "status": "healthy",
  "updated": "2025-01-09T12:00:00.000Z",
  "metrics": {
    "slowestQuery": "14.49s",
    "totalSlowQueries": 4799,
    "p95ResponseTime": "45.2ms"
  }
}
```

## 🔄 Updates & Maintenance

### Manual Update Process
1. Run Sentry data collection script
2. Update `index.html` with new metrics
3. Commit and push to GitHub
4. Heroku auto-deploys from GitHub

### Automated Updates (Future Enhancement)
Consider implementing:
- GitHub Actions for scheduled updates
- Sentry webhooks for real-time alerts
- Database for historical data storage

## 📈 Performance Optimization Recommendations

Based on the dashboard data:

1. **Immediate Action Required**:
   - Optimize SELECT queries with multiple subqueries
   - Review and optimize RequestCollection.cs implementation
   
2. **High Priority**:
   - Analyze database constraint operations
   - Consider query result caching
   
3. **Medium Priority**:
   - Optimize PBC Message Counter queries
   - Review Audit Item Exception query logic

## 🐛 Troubleshooting

### Common Issues:

**Dashboard not loading:**
```bash
# Check Heroku status
heroku ps

# Restart dyno
heroku restart

# Check logs
heroku logs --tail
```

**Data not updating:**
- Verify Sentry API access
- Check dashboard-config.json
- Review browser console for errors

## 📝 License
MIT

## 👤 Author
**Jakub Sikora**
- GitHub: [@jakubkrzysztofsikora](https://github.com/jakubkrzysztofsikora)
- Company: [@enrouteQ](https://github.com/enrouteQ)

## 🙏 Acknowledgments
- Sentry for performance monitoring
- Chart.js for data visualization
- Heroku for hosting
- Claude AI for dashboard generation

---
*Dashboard generated with Sentry MCP Integration*