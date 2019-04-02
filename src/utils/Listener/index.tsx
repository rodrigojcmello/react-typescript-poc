import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, Props } from './tipos';

function Listener(props: Props): JSX.Element {
  const { children, definirLarguraJanela } = props;

  useEffect(() => {
    function definirLargura(): void {
      definirLarguraJanela(window.outerWidth);
    }
    definirLargura();
    window.addEventListener('resize', definirLargura);
    return () => {
      window.removeEventListener('resize', definirLargura);
    };
  }, []);

  return <>{children}</>;
}

export default connect(
  null,
  mapDispatchToProps
)(memo(Listener));
