import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="row">

                <div className="col-md-6 mt-0"><br />
                    <label>
                        <h5><b> Order by Price</b></h5>
                    </label>
                    <select className="form-control" va>
                        <option value="">Select</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </select>

                </div>
            </div>
        )
    }
}
export default Filter;