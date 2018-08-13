import * as React from 'react';

import { Carousel } from './components/Carousel';
import { FAB } from './components/FAB';
import { Pushpin } from './components/Pushpin';

const styles = require('./homePage.scss');

export class HomePage extends React.Component {
  public componentDidMount() {
    document.querySelectorAll('.pushpin-nav').forEach((elem, _) => {
      const target = document.querySelector('.' + elem.getAttribute('data-target')!);
      const rect = target!.getBoundingClientRect();
      let top = rect.top;
      // Make sure element is not hidden (display: none) or disconnected
      if (rect.width || rect.height || target!.getClientRects().length) {
        top += window.pageYOffset - target!.ownerDocument.documentElement.clientTop;
      }
      const bottom = top + elem.parentElement!.getBoundingClientRect().height - rect.height;
      M.Pushpin.init(elem, {
        top,
        bottom,
      });
    });
  }

  public render() {
    return (
      <div>
        <div className={styles['home-page-block']}>
          <h1 className='page-title'>Home</h1>
          <div className='container'>
            <Carousel />
          </div>
        </div>
        <Pushpin color='blue' depth='lighten-1' />
        <Pushpin color='green' depth='lighten-1' />
        <Pushpin color='orange' depth='lighten-1' />
        <Pushpin color='red' depth='lighten-1' />
        <Pushpin color='purple' depth='lighten-1' />
        <Pushpin color='cyan' depth='lighten-1' />
        <FAB />
      </div>
    );
  }
}