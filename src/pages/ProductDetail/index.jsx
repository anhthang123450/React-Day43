import useFetch from "@/hooks/useFetch";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const [product, isLoading] = useFetch(
        `https://api01.f8team.dev/api/products/${params.id}`
    );

    if (isLoading) return <div>...Loading</div>;

    if (!product) {
        //...Loading
        return null;
    }

    return (
        <div>
            <div>
                <h1>ProductDetail</h1>
                <h3>Tên sản phẩm: {product.title}</h3>
                <img src={product.thumbnail} alt={product.title} />
                <p> Giá: {product.price}</p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus nemo alias deleniti beatae totam at, eaque facilis
                    cumque mollitia a placeat consequuntur in nesciunt harum
                    ipsum nihil atque dicta. Quaerat id repellendus minus sit
                    cumque nulla quas odio? Ex, expedita tempora veritatis
                    commodi sequi, quis eius necessitatibus dolores mollitia
                    quibusdam unde dicta, ad cupiditate sint delectus assumenda
                    ab illo amet minus? Illo nulla deserunt est, iusto assumenda
                    quam corrupti sapiente autem expedita possimus veniam
                    nesciunt obcaecati ducimus dolore, laudantium vitae soluta,
                    optio impedit eaque provident culpa deleniti quaerat animi
                    quos! Repellendus accusantium minima mollitia sapiente,
                    soluta dicta laborum dignissimos consectetur.
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;
