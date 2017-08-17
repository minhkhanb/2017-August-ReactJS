import React, {Component} from 'react';

class DataList extends Component {
    render() {
        return(
          <tr>
              <td>{this.props.data.id}</td>
              <td>{this.props.data.name}</td>
              <td>{this.props.data.num}</td>
          </tr>
        );
    }
}

export default DataList;