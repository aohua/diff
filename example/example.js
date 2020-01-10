const from1 = document.getElementById("from1");
const to1 = document.getElementById("to1");
const from2 = document.getElementById("from2");
const to2 = document.getElementById("to2");

const f1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const f2 =
  "Lorem Ipsum is hi dummy text of error printing and typesetting industry.";

const f3 = `Lorem Ipsum is simply dummy text of the\n
  printing and typesetting industry.`;
const f4 = `Lorem Ipsum is hi dummy text of error\n
  print and typesetting industry.`;

from1.innerHTML = f1;
to1.innerHTML = compare(f1, f2, COMPARE_TYPE.WORD);

from2.innerHTML = f3;
to2.innerHTML = compare(f3, f4, COMPARE_TYPE.LINE);
