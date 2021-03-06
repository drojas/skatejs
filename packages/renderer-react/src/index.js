import React from 'react';
import { render } from 'react-dom';
import { withRenderer } from 'skatejs';

const withReact = (Base = HTMLElement) =>
  class extends Base {
    get props() {
      // We override props so that we can satisfy most use
      // cases for children by using a slot.
      return {
        ...super.props,
        ...{ children: <slot /> }
      };
    }
    renderer(root, call) {
      render(call(), root);
    }
  };

export default withReact;

export const wrap = Component =>
  class extends withReact() {
    render() {
      return <Component {...this.props} />;
    }
  };
