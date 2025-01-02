import india from './country/india.png';
import china from './country/china.png';
import usa from './country/usa.png';
import russia from './country/russia.png';
import germany from './country/german.png';
import profile from './profile.jpg'
import logo from './logo.png'
import form from './form_bg.png'

const countries = {
  india: {
    name: 'India',
    code: 'IN',
    flag: india,
  },
  china: {
    name: 'China',
    code: 'CN',
    flag: china,
  },
  usa: {
    name: 'USA',
    code: 'US',
    flag: usa,
  },
  russia: {
    name: 'Russia',
    code: 'RU',
    flag: russia,
  },
  germany: {
    name: 'Germany',
    code: 'DE',
    flag: germany,
  },
  profile:{
    src:profile
  },
  logo,
  form
};

export default countries;
