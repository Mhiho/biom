export const fetchHelper = (index: number, data: number[][]) =>
  data.filter((element: number[]) => {
    return element[1] === index;
  });
