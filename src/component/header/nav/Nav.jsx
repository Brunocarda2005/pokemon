export default function Nav(params) {
  return (
    <nav className="app__header__nav">
      <section className="app__header__nav__filter">
        <aside className="app__header__nav__filter__name">
          <input
            type="search"
            id="pokemon"
            placeholder="name"
            onChange={params.action}
          />
        </aside>
        <aside className="app__header__nav__filter__tipo">
          <select
            name="tipo"
            id="type"
            className="app__header__nav__filter__tipo"
            onChange={params.action}
          >
            <option id="type" value="1">
              type 1
            </option>
            <option id="type" value="2">
              type 2
            </option>
            <option id="type" value="3">
              type 3
            </option>
            <option id="type" value="4">
              type 4
            </option>
            <option id="type" value="5">
              type 5
            </option>
            <option id="type" value="6">
              type 6
            </option>
            <option id="type" value="7">
              type 7
            </option>
            <option id="type" value="8">
              type 8 
            </option>
            <option id="type" value="9">
              type 9
            </option>
            <option id="type" value="10">
              type 10
            </option>
            <option id="type" value="11">
              type 11
            </option>
            <option id="type" value="12">
              type 12
            </option>
            <option id="type" value="13">
              type 13
            </option>
          </select>
        </aside>
        <aside className="app__header__nav__filter__shiny">
          <select
            name="shiny"
            id="color"
            className="app__header__nav__filter__shiny"
            onChange={params.action}
          >
            <option id="color" value="1">
              color 1
            </option>
            <option id="color" value="2">
              color 2
            </option>
            <option id="color" value="3">
              color 3
            </option>
            <option id="color" value="4">
              color 4
            </option>
            <option id="color" value="5">
              color 5
            </option>
            <option id="color" value="6">
              color 6
            </option>
            <option id="color" value="7">
              color 7
            </option>
            <option id="color" value="8">
              color 8
            </option>
            <option id="color" value="9">
              color 9
            </option>
            <option id="color" value="10">
              color 10
            </option>
            <option id="color" value="11">
              color 11
            </option>
            <option id="color" value="12">
              color 12
            </option>
            <option id="color" value="13">
              color 13
            </option>
          </select>
        </aside>
        <aside className="app__header__nav__filter__tipo">
          <select
            name="tipo"
            id="location"
            className="app__header__nav__filter__tipo"
            onChange={params.action}
          >
            <option id="location" value="1">
              location 1
            </option>
            <option id="location" value="2">
              location 2
            </option>
            <option id="location" value="3">
              location 3
            </option>
            <option id="location" value="4">
              location 4
            </option>
            <option id="location" value="5">
              location 5
            </option>
            <option id="location" value="6">
              location 6
            </option>
            <option id="location" value="7">
              location 7
            </option>
            <option id="location" value="8">
              location 8
            </option>
            <option id="location" value="9">
              location 9
            </option>
            <option id="location" value="10">
              location 10
            </option>
            <option id="location" value="11">
              location 11
            </option>
            <option id="location" value="12">
              location 12
            </option>
            <option id="location" value="13">
              location 13
            </option>
          </select>
        </aside>
        <aside className="app__header__nav__filter__shiny">
          <select
            name="shiny"
            id="especies"
            className="app__header__nav__filter__shiny"
            onChange={params.action}
          >
            <option id="especies" value="1">
              especies 1
            </option>
            <option id="especies" value="2">
              especies 2
            </option>
            <option id="especies" value="3">
              especies 3
            </option>
            <option id="especies" value="4">
              especies 4
            </option>
            <option id="especies" value="5">
              especies 5
            </option>
            <option id="especies" value="6">
              especies 6
            </option>
            <option id="especies" value="7">
              especies 7
            </option>
            <option id="especies" value="8">
              especies 8
            </option>
            <option id="especies" value="9">
              especies 9
            </option>
            <option id="especies" value="10">
              especies 10
            </option>
            <option id="especies" value="11">
              especies 11
            </option>
            <option id="especies" value="12">
              especies 12
            </option>
            <option id="especies" value="13">
              especies 13
            </option>
          </select>
        </aside>
      </section>
    </nav>
  );
}
