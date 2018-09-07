import data from './data.json';
import { Indicator } from '../components/Indicator';
import React from 'react';

/**
 * Источник данных. Тут берем исходные данные из JSON и приводим к нужному виду для отображения в таблице
 */

// Получаем максимальный модуль
const getMaxAbs = function(arr) {
   const sortedArr = Array.from(rawTableData).sort((a,b) => {
      return Math.abs(b.fDeltaPlan) - Math.abs(a.fDeltaPlan)
   });
   return sortedArr[0].fDeltaPlan;
};

const rawtableHeaders = data.fa.fa_data.axis.r;
const rawTableData = data.fa.fa_data.r;

//Формируем массив с заголовками таблицы
const tableHeaders = [
   ...rawtableHeaders.map(elem => elem.sAxisName), 
   'Валюта', 
   'Отклонение от плана, П.П.' 
]; 

const maxAbs = getMaxAbs(rawTableData);

// Формируем массив с данными таблицы
const tableData = rawTableData.map(elem => {
   return [ 
      ...elem.axis.r.map(elem => elem.sName_RU), 
      elem.sMeasDelta_RU, 
      <Indicator maxAbs={maxAbs} value={Number(elem.fDeltaPlan)} />
   ];
});

export { tableHeaders, tableData };
