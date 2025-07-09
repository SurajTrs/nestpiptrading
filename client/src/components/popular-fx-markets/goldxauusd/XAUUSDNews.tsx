import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const XAUUSDNews = () => {
  const news = [
    {
      title: 'Gold outlook: XAU/USD eases as dollar rebounds but tariff deadline looms',
      author: 'By Fawad Razaqzada',
      time: 'Yesterday 7:25 PM',
      tags: ['GOLD', 'TRADE IDEAS', 'TRADE WAR', 'PRECIOUS METALS'],
    },
    {
      title: 'Gold forecast: All about tariffs again in week ahead',
      time: 'Sunday 12:30 AM',
    },
    {
      title: 'Gold Price Forecast: XAU/USD Poised for July Breakout',
      time: 'Thursday 12:43 AM',
    },
    {
      title: 'Gold forecast: XAU/USD extends rebound post ADP',
      time: 'Wednesday 10:46 PM',
    },
    {
      title: 'Gold forecast H2 2025: Don\'t expect repeat of first half',
      time: 'July 01, 2025 04:52 PM',
    },
  ];

  const economicEvents = [
    {
      date: 'Saturday, Jul 05',
      importance: 0,
      country: 'CZ',
      event: 'Jan Hus Day',
    },
    {
      date: 'Sunday, Jul 06',
      importance: 2,
      country: 'CN',
      event: 'BRICS Summit',
    },
    {
      date: 'Sunday, Jul 06',
      importance: 0,
      country: 'MY',
      event: 'George Town Heritage Day',
    },
    {
      date: 'Monday, Jul 07',
      importance: 2,
      country: 'EMU',
      event: 'Eurogroup Meeting',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFFAF2' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#FF7A00' }}>
          XAU/USD News & Economic Calendar
        </h2>

        <div className="row">
          {/* News Section */}
          <div className="col-md-7">
            <h5 className="fw-semibold mb-4">Latest Gold News & Market Analysis</h5>
            {news.map((item, index) => (
              <div key={index} className="mb-4 pb-3 border-bottom">
                <h6 className="fw-semibold text-dark">{item.title}</h6>
                {item.author && <div className="text-muted small">{item.author}</div>}
                <div className="text-muted small mb-2">{item.time}</div>
                {item.tags && (
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="badge bg-light border border-warning text-dark px-2"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="fw-semibold text-decoration-none" style={{ color: '#FF7A00' }}>
              View more Gold news →
            </a>
          </div>

          {/* Economic Calendar Section */}
          <div className="col-md-5 mt-5 mt-md-0">
            <h5 className="fw-semibold mb-4">Economic Calendar</h5>
            {economicEvents.map((event, index) => (
              <div
                key={index}
                className="mb-3 p-3 rounded shadow-sm bg-white border-start border-4 border-warning"
              >
                <div className="d-flex justify-content-between mb-1">
                  <span className="small text-muted">{event.date}</span>
                  <span className="badge bg-secondary">{event.country}</span>
                </div>
                <div className="fw-semibold">{event.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default XAUUSDNews;
