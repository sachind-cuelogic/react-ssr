import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, fetchCountry, resetCountry } from "../../action/countries";
import { Loading } from "../../common";

const m = ({ country }) => ({ country });

@connect(m, { fetchCountry, resetCountry })
export default class Country extends Component {

  static fetching({ dispatch, path }) {
    return [dispatch(fetchCountry(path.substr(1)))];
  }

  componentDidMount() {
    console.log("this.props==>>>", this.props)
    this.props.fetchCountry(this.props.match.params.name);
  }
  componentWillUnmount() {
    this.props.resetCountry()
  }

  render() {
    const { country: { isFetching } } = this.props;
    console.log("country porps===>>>", this.props)
    // if (isFetching) {
    //   return <Loading />;
    // }
    if (this.props.country.propertyData.length) {
      return (

        <div className="container">
          <div className="country-container">

            <div className="container">

              <h1>Dynamic Container</h1>
              <section class="about-section">

                {
                  this.props.country.propertyData.length ?
                    <div role="tabpanel" class="tab-pane active" id="propertyDetails">
                      <div class="title text-left">
                        <h3>{this.props.country.propertyData[0].title}</h3>
                      </div>
                      <table class="table table-border-none">
                        <tbody>
                          <tr>
                            <td>Listing Price</td>
                            <td class="font-lg">
                              <span>{this.props.country.propertyData[0].price}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="title-border">
                        <h4>PROPERTY INFORMATION</h4>
                      </div>
                      <table class="table table-border-none">
                        <tbody>
                          <tr>
                            <td>Property Type</td>
                            <td>{this.props.country.propertyData[0].listing_group}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="title-border">
                        <h4>DETAILS</h4>
                      </div>
                      <table class="table table-border-none">
                        <tbody>
                          <tr>
                            <td>Building Square Feet</td>
                            <td>
                              <span>{this.props.country.propertyData[0].square_feet}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Cap Rate</td>
                            <td>
                              <span>{this.props.country.propertyData[0].cap_rate}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <div class="title-border">
                          <h4>DESCRIPTION</h4>
                        </div>
                        <div class="mr-bottom-20">
                          <p>
                            {this.props.country.propertyData[0].description}
                          </p>
                        </div>
                      </div>
                    </div>
                    :
                    null
                }
              </section>

            </div>

          </div>
        </div>
      );
    } else {
      return null
    }

  }
}