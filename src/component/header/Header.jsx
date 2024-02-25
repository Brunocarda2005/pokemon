import Nav from "./nav/Nav";

export default function Header(params) {

  return (
    <header className="app__header">
      <section className="app__header__name">
        <h1>Pokemon</h1>
      </section>
      <Nav setPokemon={params.setPokemon} action={params.action}/>
    </header>
  );
}
