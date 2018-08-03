 <style>
#chart {
  height: 30em;
  width: 30em;
}
</style>

<script>
// import Chart, { labels } from './Chart';

// // eslint-disable-next-line
// const formatDate = date => {
//   const d = new Date(date);
//   let month = (d.getMonth() + 1).toString();
//   let day = d.getDate().toString();
//   const year = d.getFullYear().toString();

//   if (month.length < 2) {
//     month = `0${month}`;
//   }
//   if (day.length < 2) {
//     day = `0${day}`;
//   }

//   return [year, month, day].join('-');
// };

// const monthLabels = months => {
//   const periods = months.reduce((acc, month, i) => {
//     const startDate = new Date();
//     /* eslint no-mixed-operators: "error" */
//     startDate.setMonth(startDate.getMonth() - 12 + i);
//     const start = formatDate(startDate);

//     const endDate = new Date();
//     /* eslint no-mixed-operators: "error" */
//     endDate.setMonth(endDate.getMonth() - 12 + i + 1);
//     const end = formatDate(endDate);
//     return [...acc, `${start}:${end}`];
//   }, []);
//   return periods;
// };

// const periods = monthLabels(labels);

// async function getStats(period, packageName = '') {
//   const response = await fetch(
//     `https://api.npmjs.org/downloads/point/${period}/${packageName}`,
//   );
//   const result = await response.json();
//   return result.downloads;
// }

// async function getYearlyStats(packageName) {
//   const results = await Promise.all(
//     periods.map(period => getStats(period, packageName)),
//   );
//   return results;
// }

// export default {
//   components: {
//     Chart,
//   },

//   asyncComputed: {
//     async getReactStats() {
//       return getYearlyStats('react');
//     },
//     async getVueStats() {
//       return getYearlyStats('vue');
//     },
//     async getAngularStats() {
//       return getYearlyStats('angular');
//     },
//   },
// };
</script>
