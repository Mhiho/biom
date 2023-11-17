import { Table } from 'antd';
import json from '../../data/biom.json';
import { Item } from '../types/Item';
import { fetchHelper } from '../helpers/fetchHelper';

const relativeAbundances = fetchHelper(0, json.data).map((el: number[]) =>
  Math.abs(el[2]) >= 0.01 ? `${el[2]}%` : '<0.01%'
);
const abundanceScores = fetchHelper(1, json.data).map((el: number[]) => el[2]);
const uniqueMatchesFrequency = fetchHelper(2, json.data).map(
  (el: number[]) => el[2]
);
const names = json.rows.map((item) => item.metadata.title);
const taxIds = json.rows.map((item) => item.metadata.tax_id);
console.log(json);
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

export const Biom = () => {
  return (
    <>
      <h1>BIOM</h1>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
