const PerformanceCalculator = (runs, balls) => {
      if (runs > 30 && balls < 15) {
          return (runs / balls) * 1.01;
      } else if (runs > 50 && balls < 20) {
          return (runs / balls) * 1.1;
      } else if (runs > 100 && balls < 50) {
          return (runs / balls) * 1.2;
      } else if (runs < 30) {
          return 2;
      } else {
          return 1;
      }
  };
module.exports={PerformanceCalculator}
