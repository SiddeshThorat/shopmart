import React from 'react';
import { 
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText 
} from '../Error-Image/ErrorImage.styles';

class ErrorBoundaries extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return { hasError: true }
    }
    componentDidCatch(error,info){
        console.log("Error =>",error)
    }
    render(){
       if(this.state.hasError)
          return (
              <ErrorImageOverlay>
                  <ErrorImageContainer imageUrl={`https://i.imgur.com/g3hgqe8.png`} />
                  <ErrorImageText >
                      Something went wrong, Page not Found
                      </ErrorImageText>
              </ErrorImageOverlay>
          );
        else
          return this.props.children;  
    }

}

export default ErrorBoundaries;