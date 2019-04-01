import Countries from "../components/Countries";
import Country from "../components/Country";


export default [
  {
    component: Countries,
    path: '/',
    exact: true,
    prop_id: "123456"
  },
  {
    component: Country,
    path: '/:name',
    prop_id: "123456"
  }
];