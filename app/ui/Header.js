import categories from '../utils/config'

const Tabs = ({handleClick}) => {
  return (
    <ul>
      {categories.map(tab => (
        <li key={tab.name}>
          <button onClick={() => handleClick(tab.category)}>{tab.name}</button>
        </li>
      ))}
    </ul>
  )
}

const Header = ({handleClick}) => {
  return(
    <header>
      <nav>
        <Tabs handleClick={handleClick}/>
      </nav>
    </header>
  )
}

export default Header