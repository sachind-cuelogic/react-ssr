import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from "../../action/countries";
import { Loading } from '../../common';
import CountriesItem from './CountriesItem';
import { Link, Redirect } from "react-router-dom"

const m = ({ countries }) => ({ countries });


@connect(m, { fetchCountries })
export default class Countries extends Component {

  static fetching({ dispatch }) {
    return [dispatch(fetchCountries())];
  }

  componentDidMount() {
    this.props.fetchCountries();
  }


  render() {
    const { countries: { isFetching, data } } = this.props;

    if (isFetching) {
      return <Loading />
    }

    return (
      <div className="container">
        <div className="countries-container">
          <h1>Check dynamic page number</h1>
          <ol>
            <li><Link to={"/9635"}>Crossing Plaza</Link></li>
            <li><Link to={"/12681"}>Walgreens</Link></li>
            <li><Link to={"/12764"}>7-Eleven</Link></li>
            <li><Link to={"/11169"}>United Bank & Walnut Street Finance</Link></li>
            <li><Link to={"/12713"}>BMO Harris Bank</Link></li>
            <li><Link to={"/6988"}>10,286 SF Free Standing Office Bldg For Sale</Link></li>
          </ol>
          {/* {data.map((item, i) => <CountriesItem key={i} {...item} />)} */}
        </div>
      </div>
    );
  }
};