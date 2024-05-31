import { Banner } from "../components/Banner";
import { List } from "../components/List";

export function Filmes() {

    return (
        <>
            <Banner titulo="Filmes" tipo="filmes"/>
            <List categoria="movie"/>
        </>
    )
}