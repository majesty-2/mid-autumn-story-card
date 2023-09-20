import './Stars.sass'

const Stars = () => {
  const generateStarsData = (count) => {
    const starsData = [];
    for (let i = 1; i <= count; i++) {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      starsData.push({ id: i, left, top });
    }
    return starsData;
  };

  const chengeMoon = () => {
    const starCount = 300;
    const starsData = generateStarsData(starCount);

    return (
      <div className="stars">
          {starsData.map((star) => (
            <div
              className="star"
              key={star.id}
              style={{ left: star.left, top: star.top }}
            ></div>
          ))}
        </div>
    );
  };

  return chengeMoon();
};

export default Stars;
