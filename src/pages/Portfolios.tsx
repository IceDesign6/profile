import ScratchCard from '@components/Portfolios/ScratchCard';

const Portfolios = () => {
  const portfoliosList = [
    { label: 'Scratch Card', componentName: ScratchCard }
  ];

  return (
    <div>
      {portfoliosList.map(({ label, componentName }) => {
        const Component = componentName;
        return(
          <div className='flex flex-col gap-y-2' key={label}>
            <div>{label}</div>
            <Component label={label} />
          </div>
        )
      })}
    </div>
  );
};

export default Portfolios;
