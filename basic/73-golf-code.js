const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  let decision = '';

  if(strokes === 1)
    decision = names[0]
  else if (strokes <= par - 2)
    decision = names[1]
  else if (strokes === par - 1)
    decision = names[2]
  else if (strokes === par)
    decision = names[3]
  else if (strokes === par + 1)
    decision = names[4]
  else if (strokes === par + 2)
    decision = names[5]
  else
    decision = names[6]

  return decision;
}

golfScore(5, 4);
