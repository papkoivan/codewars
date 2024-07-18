import React from 'react';

export const withTruncateParagraph = (Component) =>{
  class WithTruncateParagraph extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      const {textLength = 10, children} = this.props;
      if(typeof children === 'string' && textLength !== -1){
        return <Component {...this.props}>{children.slice(0,textLength) + '...'}</Component>
      }
      return <Component {...this.props}>{children}</Component>
    }
  }

  WithTruncateParagraph.displayName = `WithTruncateParagraph(${ Component.displayName || Component.name || 'Component'})`;
  return WithTruncateParagraph

}
