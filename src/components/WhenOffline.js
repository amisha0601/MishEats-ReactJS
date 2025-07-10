import React, { useState, useEffect } from 'react';

const foodEmojis = [
  '🍕', '🍔', '🍩', '🍜', '🍎', '🍇', '🍉', '🍓', '🍟', '🥗'
];

const levels = {
  easy: 90,
  medium: 60,
  hard: 45,
};

const generateShuffledCards = () => {
  const pairs = [...foodEmojis, ...foodEmojis];
  return pairs
    .map((emoji, index) => ({ id: index, emoji, matched: false }))
    .sort(() => Math.random() - 0.5);
};

const Card = ({ card, onClick, isFlipped }) => {
  const styles = {
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '28px',
    backgroundColor: isFlipped || card.matched ? '#fff' : 'rgb(129, 75, 133)',
    color: isFlipped || card.matched ? '#000' : '#fff',
    border: '2px solid rgb(65, 16, 100)',
    borderRadius: '8px',
    cursor: 'pointer',
    userSelect: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    transition: '0.3s',
  };

  return (
    <div onClick={onClick} style={styles}>
      {isFlipped || card.matched ? card.emoji : ''}
    </div>
  );
};

const WhenOffline = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [level, setLevel] = useState('medium');
  const [timeLeft, setTimeLeft] = useState(levels['medium']);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    resetGame();
  }, [level]);

  useEffect(() => {
    if (timeLeft <= 0 && !completed) {
      setDisabled(true);
    }
    if (timeLeft > 0 && !completed) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, completed]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setCompleted(true);
      setDisabled(true);
    }
  }, [cards]);

  const handleCardClick = (index) => {
    if (disabled || timeLeft <= 0 || flipped.includes(index) || cards[index].matched) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      const [i, j] = newFlipped;
      if (cards[i].emoji === cards[j].emoji) {
        const updatedCards = [...cards];
        updatedCards[i].matched = true;
        updatedCards[j].matched = true;
        setCards(updatedCards);
        setScore(score + 2);
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 800);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 800);
      }
    }
  };

  const resetGame = () => {
    setCards(generateShuffledCards());
    setFlipped([]);
    setDisabled(false);
    setTimeLeft(levels[level]);
    setScore(0);
    setCompleted(false);
  };

  const outerWrapper = {
    minHeight: '100vh',
    backgroundColor: '#fff2fb',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: 'center',
  };

  const headingStyles = {
    fontSize: '32px',
    color: '#2C2C2C',
    marginBottom: '12px',
  };

  const subTextStyles = {
    fontSize: '16px',
    color: '#7a3e87',
    marginBottom: '20px',
  };

  const gameStyles = {
    width: '100%',
    maxWidth: '463px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '6px',
    backgroundColor: '#F5F5F5',
    borderRadius: '16px',
    border: '12px solid rgb(63, 8, 56)',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '8px',
    marginTop: '10px',
    position: 'relative' 
  };

  const buttonStyles = {
    marginTop: '20px',
    backgroundColor: '#03a540',
    color: '',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '16px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const selectStyles = {
    marginTop: '6px',
    padding: '6px 12px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '2px solid #ccc'
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#6b3a80',
    zIndex: 2,
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <div style={outerWrapper}>
      <h2 style={headingStyles}>You're Offline!</h2>
      <p style={subTextStyles}>Play this memory game until you're back online!</p>

      <div style={gameStyles}>
        <h1 style={{ color: '#3b0067' }}>MIND MUNCH</h1>
        <p><strong>Time Left:</strong> {timeLeft}s | <strong>Score:</strong> {score}</p>

        <div>
          <label><strong>Select Level:</strong> </label>
          <select style={selectStyles} value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div style={gridStyles}>
        
          {(timeLeft <= 0 && !completed) && (
            <div style={overlayStyles}>⏰ Time's Up!</div>
          )}
          {(completed && timeLeft > 0) && (
            <div style={overlayStyles}>🎉 You Matched All!</div>
          )}
          {cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              onClick={() => handleCardClick(index)}
              isFlipped={flipped.includes(index)}
            />
          ))}
        </div>

        <button style={buttonStyles} onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );
};

export default WhenOffline;