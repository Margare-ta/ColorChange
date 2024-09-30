export function ColorChange() {
    
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div style={{ padding: '20px', minHeight: '200px' }}>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
};

