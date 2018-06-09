import * as React from 'react';


export interface IFavoriteProps {
    items : IFavoriteItem[];

}

export interface IFavoriteItem {
    url : string;
    //input : string;
}

export interface IFavoriteState {
}

export class FavoriteComponent extends React.PureComponent <IFavoriteProps, never> {

    constructor(props) {
        super(props);
        
    }

    public render(): JSX.Element {
        return (
            <>
                {this.props.items && this.props.items.map((x, i) => (
                    <div className="" key={i}>
                        <img src={x.url} />
                        
                    </div>)
                )
                
                }
            </>
        )
    }
}