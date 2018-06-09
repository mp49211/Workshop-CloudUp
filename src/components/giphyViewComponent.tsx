import * as React from 'react';


interface IGiphyViewComponentProps {
    getGiphy : string;
    onSave()
}

interface IGihpyViewComponentState {
}

export class GiphyViewComponent extends React.Component <IGiphyViewComponentProps,IGihpyViewComponentState> {

    constructor(props) {
        super(props);
        
    }

    public render() {
        return (
            <div>
        <img src={this.props.getGiphy} />
        <button onClick={this.props.onSave}>Save</button>
        </div>
        )
    }
}