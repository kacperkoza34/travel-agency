export const daysToSummer = (dateNow) => {
  const dayNow = dateNow.getDate();
  const monthNow = dateNow.getMonth() + 1;
  const yearNow = dateNow.getFullYear();

  const julyCondition = monthNow >= 6;
  const septemberCondition = monthNow <= 9;

  if(julyCondition && septemberCondition){
    if(dayNow >= 21 && monthNow != 9){
      return false;
    }
    else if(monthNow == 9 && dayNow <= 23){
      return false;
    }
  }

  let summerStart = new Date(yearNow,5,21).getTime();
  const nowaday = dateNow.getTime();

  if(nowaday > summerStart) summerStart = new Date(yearNow+1,5,21).getTime();

  const result = (summerStart - nowaday)/(1000 * 3600 * 24);


  return Math.floor(result);
}
