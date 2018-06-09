import * as React from 'react';


export interface INavigationProps {
    items : INavigationItem[];
    selectedId: string;

    onSelectedChanged(selectedId);

}

export interface INavigationItem {
    name : string;
    id : string;
}

export interface INavigationItemProps {
    item: INavigationItem;
    isSelected: boolean;
    onClicked(id: string);
}

export class NavigationComponent extends React.PureComponent <INavigationProps, never> {

    constructor(props) {
        super(props);
        
    }

    public render(): JSX.Element {
        return (
            <div style={{ display: "flex"}}>
                {this.props.items && this.props.items.map((x, i) => (
                    <NavigationItemComponent
                    item={x}
                    onClicked={this.props.onSelectedChanged}
                    key = {i}
                    isSelected = {x.id === this.props.selectedId}
                    />
                    )
                )
                
                }
            </div>
        )
    }
}

export class NavigationItemComponent extends React.PureComponent<INavigationItemProps, never> {
    private onClicked = () => {
            this.props.onClicked(this.props.item.id);
    }
    public render() {
        let color = this.props.isSelected ? 'red': 'black';
        return (
            <div onClick={this.onClicked} style={{marginLeft: "5px", cursor: "pointer", color: color}}>
                {this.props.item.name}
            </div>
        )
    }


}