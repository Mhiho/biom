import './App.css';
import { Table } from 'antd';
import json from '../data/biom.json';
import { Item } from './types/Item';

const fetchHelper = (index: number) =>
  json.data.filter((element: number[]) => {
    return element[1] === index;
  });

const relativeAbundances = fetchHelper(0).map((el: number[]) =>
  Math.abs(el[2]) >= 0.01 ? `${el[2]}%` : '<0.01%'
);
const abundanceScores = fetchHelper(1).map((el: number[]) => el[2]);
const uniqueMatchesFrequency = fetchHelper(2).map((el: number[]) => el[2]);
const names = json.rows.map((item) => item.metadata.title);
const taxIds = json.rows.map((item) => item.metadata.tax_id);

const dataSource: Item[] = names.map((el, index) => {
  return {
    name: el,
    taxId: taxIds[index],
    abundanceScore: abundanceScores[index],
    relativeAbundance: relativeAbundances[index],
    uniqueMatchesFrequency: uniqueMatchesFrequency[index],
  };
});

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tax ID',
    dataIndex: 'taxId',
    key: 'taxId',
  },
  {
    title: 'Abundance score',
    dataIndex: 'abundanceScore',
    key: 'abundanceScore',
  },
  {
    title: 'Relative abundance',
    dataIndex: 'relativeAbundance',
    key: 'relativeAbundace',
  },
  {
    title: 'Unique matches frequency',
    dataIndex: 'uniqueMatchesFrequency',
    key: 'uniqueMatchesFrequency',
  },
];
function App() {
  return (
    <>
      <h1>BIOM</h1>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
}

export default App;
