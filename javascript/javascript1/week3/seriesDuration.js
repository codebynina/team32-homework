const seriesDurations = [
    {
      title: "Modern Family",
      days: 4,
      hours: 8,
      minutes: 10,
    },
    {
      title: "Squid Game",
      days: 0,
      hours: 20,
      minutes: 10,
    },
    {
      title: "Attack on Titan",
      days: 1,
      hours: 10,
      minutes: 48,
    },
    {
      title: "Demon Slayer", 
      days: 1,
      hours: 0,
      minutes: 9,
    },
  ];
  
  function logSeriesTime(seriesArray) {
    const lifespanInMinutes = 80 * 365 * 24 * 60; // 80 years in minutes
    let totalPercentage = 0;
  
    seriesArray.forEach((series) => {
      const seriesMinutes =
        series.days * 24 * 60 + series.hours * 60 + series.minutes;
      const percentage = (seriesMinutes / lifespanInMinutes) * 100;
      totalPercentage += percentage;
  
      console.log(`${series.title} took ${percentage.toFixed(6)}% of your life.`);
    });
  
    console.log(
      `In total, you have spent ${totalPercentage.toFixed(6)}% of your life watching series.`
    );
  }
  
  logSeriesTime(seriesDurations);