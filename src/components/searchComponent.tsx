import * as React from 'react';

interface ISearchComponentProps {
    onSearch(value: string);
}

interface ISearchComponentState {
    searchedValue : string;
}

export class SearchComponent extends React.Component <ISearchComponentProps,ISearchComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            searchedValue : ""
        }
    }
    
    private searchAlert = () => {
        if (!this.state.searchedValue) {
            return;
        }
        this.props.onSearch(this.state.searchedValue);

    }

    private onChange = (e: any) => {
        this.setState({
            searchedValue: e.target.value
        });
    }
    
    render()  {
        return (
            <div>
                
                <input value={this.state.searchedValue} onChange={this.onChange}/>
                <button onClick={this.searchAlert}> Search </button>
            </div>
        );
    }
}