import React  from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const propTypes = {
    headingRow: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
    index: PropTypes.bool
};

const defaultProps = {
    index: false
};

class ITable extends React.Component {

  render() {
    let {
      headingRow,
      rows,
      index,
      ...attributes
    } = this.props;

    const heading = headingRow.map(columnHeading => {
                                return <th>{columnHeading}</th>
                            });

    const body = rows.map((row, index) => {
        let cells = row.map(cell => {
            return (<td>{cell}</td>);
        });
        if (this.props.index) {
            const indexCell = [(<th> {index + 1} </th>)];
            cells = indexCell.concat(cells);
        }
        return (<tr>{cells}</tr>);
    });

    const table = (
      <Table {...attributes}>
         <thead>
            <tr>
               {index ? <th> # </th> : null}
               {heading}
            </tr>
         </thead>
         <tbody>
            {body}
         </tbody>
      </Table>
    );

    return table;
  }
}

ITable.propTypes = propTypes;
ITable.defaultProps = defaultProps;
ITable.displayName = 'ITable';

export default ITable;