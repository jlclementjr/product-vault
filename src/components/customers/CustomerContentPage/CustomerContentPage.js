import React, {Component} from 'react';
import CustomerList from '../CustomerList/CustomerList';
import ContentSidebar from '../../../containers/ContentSidebar/ContentSidebar';
import Auxi from '../../../hoc/Auxi';

class CustomerContentPage extends Component 
{
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            customers: null,
            isFetchError: false
        }
    }

    componentDidMount()
    {
        fetch('http://localhost:64070/api/customers')
        .then(response => response.json())
        .catch(err => this.handleFetchError(err))
        .then(customers => this.setState({customers, isLoading: false}));
    }

    handleFetchError(error){
        console.log('Handling error.' + error);
        this.setState({isFetchError: true});
    }

    render(){
        
        var content = <div>Loading...</div>;
        if (!this.state.isLoading){
            if (this.state.isFetchError)
                content = <div>Oops! Something went wrong!</div>
            else
            content = <CustomerList customers={this.state.customers}/>
        }
    
        return(
            <Auxi>
                <ContentSidebar />
                {content}
            </Auxi>
        );
    }
}

export default CustomerContentPage;