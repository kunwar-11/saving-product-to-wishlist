import { createServer  , Model , RestSerializer} from 'miragejs'
import faker from 'faker'
export default function setupMockSever() {
    createServer({
        serializers : {
            products : RestSerializer
        },
        models : {
            products : Model
        },
        routes() {
            this.namespace = 'api';
            this.timing = 3000;
            this.resource("products")
        },
        seeds(server) {
            [...Array(20)].forEach((_) => {
            server.create("product" , {
                id : faker.datatype.uuid(),
                name : faker.commerce.productName(),
                image : faker.random.image(),
                price : faker.commerce.price()
            })
        });
        }
    })
}