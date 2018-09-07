import React, { Component } from 'react';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons();

class NavBar extends Component {
  render() {
    return (
      <div className="ms-NavExample-LeftPane">
        <Nav
          groups={[
            {
              links: [
                { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
                {
                  name: 'AddFavorite',
                  url: 'http://cnn.com',
                  onClick: this._onClickHandler2,
                  icon: 'AddFavorite',
                  key: 'key8'
                },
                {
                  name: 'BIDashboard',
                  url: 'http://cnn.com',
                  onClick: this._onClickHandler2,
                  icon: 'BIDashboard',
                  key: 'key9'
                }
              ]
            }
          ]}
          expandedStateText={'expanded'}
          collapsedStateText={'collapsed'}
          selectedKey={'key3'}
        />
      </div>
    );
  };

  _onClickHandler(e: React.MouseEvent<HTMLElement>): false {
    alert('test');
    return false;
  }

  _onClickHandler2(e: React.MouseEvent<HTMLElement>): false {
    return false;
  }
}
export default NavBar;
