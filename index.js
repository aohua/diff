const COMPARE_TYPE = {
  WORD: "word",
  LINE: "line",
  JSON: "json",
};

function getSeperater(type) {
  switch (type) {
    case COMPARE_TYPE.LINE:
      return /(\n|\r\n)/;
    default:
      return " ";
  }
}

function compare(from, to, type) {
  if (from === to) {
    return from;
  }
  let seperater = getSeperater(type);

  const fromList = from.split(seperater);
  const toList = to.split(seperater);
  return diff(fromList, toList);
}

function diff(from, to) {
  const fLengh = from.length;
  const tLength = to.length;

  const q = [[0, 0, ""]];
  while (q.length) {
    const [f, t, cur] = q.shift();
    if (f === fLengh && t === tLength) {
      return cur;
    }
    if (f < fLengh && t < tLength && from[f] === to[t]) {
      q.push([f + 1, t + 1, cur + ` ${from[f]} `]);
    }
    if (f < fLengh) {
      const del = !!from[f] ? ` <del>${from[f]}</del> ` : "";
      q.push([f + 1, t, cur + del]);
    }
    if (t < tLength) {
      const insert = !!to[t] ? ` <ins>${to[t]}</ins> ` : "";
      q.push([f, t + 1, cur + insert]);
    }
  }
}
