import useFetch from "@/hooks/useFetch";
import { Link } from "react-router-dom";

const Products = () => {
    const [result, isLoading] = useFetch(
        "https://api01.f8team.dev/api/products"
    );

    if (isLoading) return <div>...Loading</div>;

    return (
        <div>
            <ul>
                {result.data.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deleniti officia porro quo nisi. Earum, debitis! Modi
                accusantium, sint mollitia minus velit culpa quam nemo ipsam
                voluptate pariatur doloremque alias molestiae adipisci soluta
                officiis nisi ducimus maiores quo quod voluptas sequi, ullam
                recusandae? Enim aut nihil quidem officiis nam dicta fugiat,
                sequi illum debitis iste soluta voluptates error quo cumque
                consectetur, voluptate eum quod exercitationem necessitatibus
                nesciunt! Ullam iusto accusantium quasi, illo minima similique
                nesciunt quas nobis, quam modi hic fugit magnam doloribus.
                Dolorum magni hic quibusdam eligendi beatae fuga quod quae
                consequuntur doloremque et iure sunt debitis deleniti quaerat
                reiciendis, quas provident delectus, a ea reprehenderit quasi!
                Consequatur tenetur alias explicabo temporibus unde impedit
                voluptatum quasi earum, odit odio corrupti quam! Dicta sunt
                labore odit voluptates, voluptatibus sint harum esse repellendus
                cum. Incidunt numquam facilis, quis pariatur neque libero quia.
                Pariatur magni neque libero repellat ea sapiente excepturi ut
                consectetur, architecto tempora, alias tempore inventore
                voluptates. Aliquid necessitatibus consectetur vero,
                perspiciatis facilis minus amet debitis libero accusantium.
                Placeat mollitia laboriosam vero dolores delectus dolorum nemo
                quisquam commodi, reiciendis, accusamus quae id quas nesciunt
                corrupti voluptas provident quos illo molestias illum. Velit,
                optio? Ad corrupti veritatis dignissimos dolor consectetur,
                sequi provident inventore, hic quidem non ipsum? Vel ea
                assumenda perspiciatis voluptatibus totam commodi facere
                veritatis, mollitia, quaerat ratione repellat exercitationem?
                Maxime autem iusto nobis praesentium sed minus illum mollitia
                iste cum iure dolores enim quasi eos ducimus adipisci
                repudiandae inventore et placeat officia recusandae, unde non
                sapiente quo ad. Exercitationem reprehenderit voluptatem
                ratione, sapiente eveniet placeat a, nesciunt commodi incidunt
                aperiam animi sed eaque quidem dignissimos quae, quibusdam rem.
                Laboriosam vitae, expedita neque ut dolorem adipisci quam cum,
                quos enim aperiam temporibus deleniti velit in. Distinctio, ea
                maxime aliquam debitis consequatur praesentium! Aliquam eius
                delectus minima voluptas laudantium labore? Quae voluptatum
                doloremque velit hic cupiditate mollitia eaque, ut totam
                maiores? Iusto possimus molestiae distinctio illo unde debitis
                minima eos. Totam, quisquam! Itaque quibusdam nam voluptatibus
                consequuntur ullam provident, dicta harum dolores doloribus
                tempora eveniet laborum reiciendis et molestiae ad? Animi error,
                repudiandae doloribus ipsa laborum aliquid quos possimus quidem
                doloremque quaerat voluptate consectetur ipsam esse dolor?
                Deserunt amet sed, laborum porro in aliquam odio ipsam rem
                maxime asperiores earum voluptatum quo nesciunt voluptatibus
                hic? Repellendus officiis beatae numquam odit quo quisquam, illo
                rem. Quisquam cum officiis harum dolore corporis repellat
                inventore minus velit neque ullam! Autem, dolorum alias? Modi
                eveniet voluptates vero maxime odit voluptatem, minima suscipit,
                ratione et totam ad error alias? Nobis cupiditate magni
                quibusdam inventore quod nulla, natus iusto hic ratione. Placeat
                illo, iure esse vitae facilis atque ratione libero saepe!
                Consequuntur corporis, nam sit ipsa qui, quidem, dolor excepturi
                voluptates suscipit vitae dicta consequatur laudantium.
                Incidunt, alias! Omnis consectetur sapiente praesentium a,
                architecto sunt doloribus, temporibus nisi quasi distinctio rem
                rerum magni, accusantium enim possimus repellat! Sunt mollitia
                rerum architecto explicabo dolorem, repellendus cumque? Libero
                repellat asperiores ipsa molestiae voluptas atque quibusdam
                soluta quo tenetur mollitia nesciunt sunt aspernatur amet, aut
                cupiditate, fugiat nam esse quae architecto aperiam cum. Nihil
                necessitatibus quaerat doloremque deleniti aperiam ab, esse
                commodi labore amet nam quia ex dolores excepturi odit iure quis
                eius molestias. Facilis, blanditiis vitae officiis similique
                optio obcaecati consequuntur. Eum expedita accusantium molestiae
                mollitia dicta maxime hic voluptatum amet, eos praesentium
                tempore repellendus tempora iusto quasi dolores fugit quaerat
                debitis nihil similique error illum reprehenderit rerum ea.
                Quia, nobis? Eveniet commodi, unde quas cupiditate aliquam enim
                eum distinctio quisquam quam rerum dolorum quis recusandae
                laudantium porro ut praesentium incidunt voluptatum et? Eum, id!
                Nam fugiat voluptates provident, impedit officiis deleniti
                doloribus iusto laudantium quod similique obcaecati nihil iure
                officia accusantium reiciendis dignissimos nisi cumque expedita
                eveniet qui incidunt ipsam quisquam ratione! Repellendus sequi
                ex harum veritatis, exercitationem suscipit fuga possimus
                consectetur
                <Link to="/">
                    obcaecati reiciendis repellat totam nemo dolores
                </Link>
                voluptatem placeat modi alias expedita et illum? Aperiam facere
                doloremque itaque fugiat odit, at asperiores quibusdam facilis,
                quam quos velit repellat sit. Nisi porro quasi accusamus earum
                perferendis? Exercitationem, sed dicta vero laudantium aliquid
                eum mollitia ad odio beatae facere, nisi illo iusto autem, a
                possimus inventore explicabo distinctio eligendi totam dolorem
                impedit? Minima repellat nulla exercitationem placeat esse
                maiores voluptatum cum excepturi, eius ratione, quis totam
                officia assumenda maxime necessitatibus itaque obcaecati
                perferendis laborum, odit molestias fugit vitae dolores autem
                quam. Veniam, odio aperiam nam maxime saepe hic aut, tenetur
                obcaecati, suscipit esse vero voluptas perspiciatis eum pariatur
                et! Omnis eaque incidunt veritatis accusantium iusto dolorem et,
                facilis, quisquam saepe odio alias eos mollitia explicabo
                voluptates tempora commodi officia accusamus distinctio velit
                blanditiis ex atque est fugiat! Voluptatum, quis quam culpa
                necessitatibus nihil alias corrupti molestiae adipisci corporis
                provident ipsa error facilis unde voluptas est quas voluptates,
                sequi fugiat consectetur molestias magni. Esse exercitationem
                iste dolore dicta omnis? Rerum, voluptatum fuga! Ad voluptates
                similique distinctio, dolorem saepe eius nemo? Sunt minus cum,
                in suscipit cupiditate praesentium modi quia vitae maiores
                tempora maxime omnis minima quaerat rem impedit voluptate sequi
                repellendus soluta aspernatur eum ipsum fugiat! Quo cum, eveniet
                perferendis earum veniam iusto culpa facere soluta ipsa quae
                esse inventore minima ducimus laboriosam, sapiente cupiditate in
                accusamus quaerat quia. Asperiores quae, ut assumenda unde rerum
                officiis ipsam tempora minus vitae amet, accusamus architecto
                cumque neque magni alias modi, eius ad commodi nisi voluptate
                doloribus ratione enim. Explicabo numquam corporis delectus eum,
                consequatur recusandae, dignissimos quis similique repudiandae
                sequi expedita consectetur pariatur totam incidunt
                exercitationem dicta maiores sint. Ab architecto fugiat
                accusamus aliquid, ullam dolorum laboriosam quis aperiam. Animi
                aperiam minima dicta odio suscipit accusamus, id est veniam modi
                a omnis minus asperiores neque nobis recusandae dolor quam
                ratione obcaecati repellat similique molestiae illum esse
                necessitatibus! Fuga eius quia maxime ducimus consequuntur iusto
                atque modi cupiditate deserunt labore, veniam nulla dolorem
                mollitia, dolorum sapiente porro, quo minima corporis ipsa
                excepturi esse. Inventore hic adipisci maiores totam? Incidunt
                consequatur nam laudantium asperiores sunt. Accusamus tenetur
                numquam eos cumque soluta veritatis reprehenderit quis suscipit
                error voluptate qui quia voluptatum, dolorem dignissimos!
                Nostrum, quibusdam! Veniam sit pariatur veritatis. Voluptates
                fugiat distinctio blanditiis quos vero.
            </p>
        </div>
    );
};

export default Products;
