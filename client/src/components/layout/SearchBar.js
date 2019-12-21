import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="col-3 float-right">
                <div className="col-xs-8 col-xs-offset-2 input-group">
                        <div className="search-panel">
                            <select name="search_param" id="search_param" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <option value="all">All</option>
                                <option value="username">Username</option>
                                <option value="email">Email</option>
                                <option value="studentcode">Student Code</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" name="x" placeholder="Search term..." />
                </div>
            </div>
             
        )
    }
}
