import SearchBar from './SearchBar';

export default function Nav(props) {
  return (
    <div>
      Barra de Navegación
      <SearchBar onSearch={props.onSearch}/>
    </div>
  );
};
