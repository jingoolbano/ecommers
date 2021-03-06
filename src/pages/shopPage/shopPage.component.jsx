import react from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collectionPreview.component";

class shopPage extends react.Component {
    constructor(props) {
        super(props);


        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        const { collections } = this.state;
        return (<div className="shop_page">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default shopPage;
