import Star from './Star';

type TStars = {
  count?: number;
};

const Stars: React.FC<TStars>  = ({ count = 0}) => {

  if (typeof count !== 'number' || count < 1 || count > 5) {
    return <></>;
  }

  const starsArray = Array.from({ length: count }, (v, k) => k);
  
  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray.map((key) => (
        <Star key={key} />
      ))}
    </ul>
  );
}

export default Stars;