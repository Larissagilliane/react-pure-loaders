import { css } from 'glamor';
import * as React from 'react';
import { IGeneralPropTypes } from '../mixins';
import style from './style';

export class BallScaleRipple extends React.PureComponent<IGeneralPropTypes, {}> {

  public render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <div {...css(style)}>
          <div/>
        </div>
      );
    }

    return null;
  }
}