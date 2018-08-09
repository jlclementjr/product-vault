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
        }
    }

    componentDidMount()
    {
        fetch('http://localhost:64070/api/customers')
        .then(response => response.json())
        .then(customers => this.setState({customers, isLoading: false}));
    }


    render(){
        
        var list = <div>Loading...</div>;
        if (!this.state.isLoading && this.state.customers)
            list = <CustomerList customers={this.state.customers}/>
    
        return(
            <Auxi>
                <ContentSidebar />
                {list}
            </Auxi>
        );
    }
}

export default CustomerContentPage;