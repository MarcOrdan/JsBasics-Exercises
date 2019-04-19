//speed limit  = 70
//for every 5kms above the speed limit, you will get 1 pt.
//if points > 12 => return Licensed suspended

//use math.floor
checkSpeed(20);

function checkSpeed(speed){
   const speedLimit = 70;
   const kmPerPoint= 5;

  if (speed < speedLimit + kmPerPoint)  {
    console.log('Ok');
    return; 
  }
  const testForPoints = Math.floor((speed-speedLimit)/kmPerPoint)
    if (testForPoints >= 12)
      console.log('LICENSED SUSPENDED');
    else 
       console.log('Point(s):', testForPoints) ;
            

  }


