import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, ButtonGroup } from 'react-bootstrap';

const courses = [
  {
    title: 'Advanced risk management',
    level: 'Advanced',
    lessons: 3,
    description: 'New techniques for managing risk.',
    imageAlt: 'Trading data on screen'
  },
  {
    title: 'Advanced technical analysis',
    level: 'Advanced',
    lessons: 8,
    description: 'Find technical indicators for expert traders.',
    imageAlt: 'Trading figures'
  },
  {
    title: 'Advanced trading strategies',
    level: 'Advanced',
    lessons: 3,
    description: 'A few unique strategies to give you an edge.',
    imageAlt: 'Advanced strategies'
  },
  {
    title: 'Introduction to financial markets',
    level: 'Beginner',
    lessons: 8,
    description: "Start here if you're new to the markets.",
    imageAlt: 'Buildings in financial district'
  },
  {
    title: 'Strategies and risk',
    level: 'Beginner',
    lessons: 7,
    description: 'Explore how to create a risk management plan.',
    imageAlt: 'Green and red lines on trading graph'
  },
  {
    title: 'How to trade',
    level: 'Beginner',
    lessons: 8,
    description: 'Learn the key concepts behind trading.',
    imageAlt: 'Data on screen'
  },
  {
    title: 'Techniques of successful traders',
    level: 'Intermediate',
    lessons: 6,
    description: 'What separates winning traders from losing ones?',
    imageAlt: 'Day trader looking at screens'
  },
  {
    title: 'Mastering CFDs',
    level: 'Intermediate',
    lessons: 8,
    description: 'Expand your trading possibilities by trading CFDs.',
    imageAlt: 'CFD Trading'
  },
  {
    title: 'Technical analysis',
    level: 'Intermediate',
    lessons: 9,
    description: 'Learn all about technical indicators.',
    imageAlt: 'Trading screens with charts'
  },
  {
    title: 'Mastering forex',
    level: 'Intermediate',
    lessons: 6,
    description: 'Take your currency trading to the next level.',
    imageAlt: 'Mastering Forex'
  },
  {
    title: 'Mastering stocks and indices',
    level: 'Intermediate',
    lessons: 4,
    description: 'A closer look at how stocks and indices work.',
    imageAlt: 'Shares and Indices'
  },
  {
    title: 'Mastering commodities',
    level: 'Intermediate',
    lessons: 4,
    description: 'A closer look at how commodities work.',
    imageAlt: 'Mastering Commodities'
  },
  {
    title: 'Fundamental analysis',
    level: 'Intermediate',
    lessons: 8,
    description: 'Empower your decisions by knowing the fundamentals.',
    imageAlt: 'Trader using stylus on tablet'
  },
  {
    title: 'Advanced Market Psychology',
    level: 'Advanced',
    lessons: 5,
    description: 'Master your trading mindset.',
    imageAlt: 'Mind of a trader'
  },
  {
    title: 'Risk-to-reward mastery',
    level: 'Advanced',
    lessons: 6,
    description: 'Optimize your trade setups.',
    imageAlt: 'Risk and reward chart'
  },
  {
    title: 'Pattern recognition',
    level: 'Advanced',
    lessons: 4,
    description: 'Identify and use price patterns.',
    imageAlt: 'Chart patterns'
  },
  {
    title: 'Trading basics 101',
    level: 'Beginner',
    lessons: 6,
    description: 'Start your journey in trading.',
    imageAlt: 'Simple trading guide'
  },
  {
    title: 'Using stop loss',
    level: 'Beginner',
    lessons: 4,
    description: 'Protect your trades with stop loss.',
    imageAlt: 'Stop Loss technique'
  },
  {
    title: 'Reading candlestick charts',
    level: 'Beginner',
    lessons: 5,
    description: 'Master candlestick patterns.',
    imageAlt: 'Candlestick guide'
  },
  {
    title: 'What is leverage?',
    level: 'Beginner',
    lessons: 3,
    description: 'Understand leverage and margin.',
    imageAlt: 'Leverage concept'
  },
  {
    title: 'Market trends',
    level: 'Beginner',
    lessons: 4,
    description: 'How to identify and follow trends.',
    imageAlt: 'Trendlines'
  },
  {
    title: 'Support and resistance',
    level: 'Beginner',
    lessons: 5,
    description: 'Trading with key price levels.',
    imageAlt: 'S/R zones'
  },
  {
    title: 'Fibonacci retracement',
    level: 'Intermediate',
    lessons: 6,
    description: 'Use Fibonacci levels in trading.',
    imageAlt: 'Fibonacci levels'
  },
  {
    title: 'Scalping techniques',
    level: 'Intermediate',
    lessons: 7,
    description: 'Quick trades with small profits.',
    imageAlt: 'Scalping trades'
  },
  {
    title: 'Swing trading fundamentals',
    level: 'Intermediate',
    lessons: 6,
    description: 'Mid-term trading strategies.',
    imageAlt: 'Swing charts'
  },
  {
    title: 'Day trading mastery',
    level: 'Intermediate',
    lessons: 5,
    description: 'Master the art of daily trades.',
    imageAlt: 'Intraday trader setup'
  },
  {
    title: 'Bollinger Bands explained',
    level: 'Intermediate',
    lessons: 4,
    description: 'Trade using Bollinger Bands.',
    imageAlt: 'Bollinger Band chart'
  },
  {
    title: 'MACD Indicator usage',
    level: 'Intermediate',
    lessons: 5,
    description: 'Use MACD to spot signals.',
    imageAlt: 'MACD signal chart'
  },
  {
    title: 'Moving averages',
    level: 'Intermediate',
    lessons: 6,
    description: 'Simple and exponential moving averages.',
    imageAlt: 'Moving average lines'
  },
  {
    title: 'Stochastic oscillator',
    level: 'Intermediate',
    lessons: 5,
    description: 'Use stochastics for entries and exits.',
    imageAlt: 'Stochastic chart'
  },
  {
    title: 'RSI deep dive',
    level: 'Intermediate',
    lessons: 6,
    description: 'Everything about the RSI indicator.',
    imageAlt: 'RSI chart'
  }
];

const TradingCourses = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredCourses =
    selectedLevel === 'All'
      ? courses
      : courses.filter(course => course.level === selectedLevel);

  return (
    <section className="py-5 bg-light text-dark">
      <Container>
        <h2 style={{ color: '#f24521' }} className="mb-4">Online Trading Courses</h2>
        <p>
          Build your trading knowledge with our interactive courses, covering everything from how the markets work to complex technical strategies.
        </p>

        {/* Filter Buttons */}
        <ButtonGroup className="mb-4">
          {['All', 'Advanced', 'Beginner', 'Intermediate'].map(level => (
            <Button
              key={level}
              variant={selectedLevel === level ? 'danger' : 'outline-danger'}
              onClick={() => setSelectedLevel(level)}
            >
              {level === 'All' ? 'Show All Lessons' : level}
            </Button>
          ))}
        </ButtonGroup>

        {/* Courses */}
        <Row>
          {filteredCourses.map((course, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={`https://via.placeholder.com/400x200?text=${encodeURIComponent(course.imageAlt)}`}
                  alt={course.imageAlt}
                />
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">{course.level}</Badge>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <p>{course.lessons} Lessons</p>
                  <Button variant="danger" className="me-2">Start Course</Button>
                  <Button variant="outline-secondary">Show Lessons</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TradingCourses;
