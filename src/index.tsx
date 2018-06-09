import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Lecture from './demo/lecture';
import { SearchComponent } from './components/searchComponent';
import { GiphyViewComponent } from './components/giphyViewComponent';
import { NavigationComponent, INavigationItem } from './components/navigationComponnt';
import { FavoriteComponent, IFavoriteItem } from './components/favoriteComponent';


interface IndexState {
    value: string,
    selectedNavItem: string,
    favoriteItems: IFavoriteItem[]


}

class Index extends React.Component<{}, IndexState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            value : "victory",
            selectedNavItem : "search",
            favoriteItems: [] 
        };
        this.searchGiphy(this.state.value);

    }
    private searchGiphy(query?: string) {
        getRandomGiphy(query).then(gifSource => {
            // nesto uraditi sa gif source. primjer prikaza: <img src={gifSource} />

            this.setState({value: gifSource}) ;
        });
    }

    private navigationItems: INavigationItem[] = [
        {
            name: "Search",
            id: "search"
        },
        {
            name: "Favorites",
            id: "favorites"
        }

    ]

    private onNavItemSelected = (selectedId: string) => {
            this.setState({
                selectedNavItem: selectedId
            })
    }

    private onSave = () => {
        const favoriteItem: IFavoriteItem = {
            url: this.state.value
        }
        const items = [ ... this.state.favoriteItems, favoriteItem]
        this.setState ({
            favoriteItems:items
        })
    }


    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >



                <NavigationComponent
                    items = {this.navigationItems}
                    selectedId = {this.state.selectedNavItem}
                    onSelectedChanged = {this.onNavItemSelected}
                />

                {this.state.selectedNavItem === "search" &&
                <>
                    <SearchComponent 
                
                onSearch={this.alertSearch}
            
            />

            <GiphyViewComponent
                    getGiphy = {this.state.value}
                    onSave = {this.onSave}
            />

                </>
                
            }

            {this.state.selectedNavItem === "favorites" && 
            <FavoriteComponent 
                
            items = {this.state.favoriteItems}
        />
        }

                
                
                

            </div>
        );
    }

    private alertSearch(value: string) {
        this.searchGiphy(value);
    }

      
}




ReactDOM.render(<Index />, document.getElementById('root'));
