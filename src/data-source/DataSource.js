import data from './data.json';

const rawtableHeaders = data.fa.fa_data.axis.r;
const rawTableData = data.fa.fa_data.r;

const tableHeaders = [
   ...rawtableHeaders.map(elem => elem.sAxisName), 
   'Валюта', 
   'Отклонение от плана, П.П.' 
]; 

const tableData = rawTableData.map(elem => {
   return [ 
      ...elem.axis.r.map(elem => elem.sName_RU), 
      elem.sMeasDelta_RU, 
      elem.fDeltaPlan 
   ];
});

export { tableHeaders, tableData };
