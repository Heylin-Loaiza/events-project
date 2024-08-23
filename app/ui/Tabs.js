import categories from '../utils/config'

const Tabs = () => {
  return (
    <ul>
      {categories.map(tab => (
        <li key={tab.name}>
          <button>{tab.name}</button>
        </li>
      ))}
    </ul>
  )
}

export default Tabs;