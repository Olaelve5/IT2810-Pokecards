import { PokemonType } from "../../types/Pokemon";

const Row = (data: PokemonType) => {
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.id}</td>
        </tr>
    )
}

export default Row;