import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class DownloadButton extends PureComponent {
  download(format) {
    let data = this.props.data[0];
    if (data.length === 0) {
      data = this.props.data[1];
    }
    // JSON
    if (format == 'json') {
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      const href = URL.createObjectURL(blob);
      const jsonlink = document.createElement('a');
      jsonlink.href = href;
      jsonlink.download = this.props.title || 'download.json';
      document.body.appendChild(jsonlink);
      jsonlink.click();
      document.body.removeChild(jsonlink);
      URL.revokeObjectURL(href);
    } else {
      // CSV
      let csvContent = 'data:text/csv;charset=utf-8,';
      let i = 0;
      data.forEach((rowArray) => {
        if (i == 0) {
          const keyArray = Object.keys(rowArray);
          const header = keyArray.join(',');
          csvContent += `${header}\n`;
          i++;
        }
        const valueArray = Object.values(rowArray);
        const row = valueArray.join(',');
        csvContent += `${row}\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const csvlink = document.createElement('a');
      csvlink.href = encodedUri;
      csvlink.download = this.props.title || 'download.csv';
      document.body.appendChild(csvlink);
      csvlink.click();
      document.body.removeChild(csvlink);
    }
  }

  render() {
    return (
      <DropdownButton
        title={<FontAwesomeIcon size="1x" icon="download" />}
        id={this.id}
        size="lg"
        style={{ background: 'none', border: 'none' }}
      >
        <Dropdown.Item onClick={() => this.download('csv')}> Download as CSV</Dropdown.Item>
        <Dropdown.Item onClick={() => this.download('json')}> Download as JSON</Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default DownloadButton;

DownloadButton.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
};
