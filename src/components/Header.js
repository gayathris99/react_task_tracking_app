import Button from './Button'

const Header = ({title , onAdd }) => {
   return (
       <header className = 'header'>
           <h1>Hello {title}</h1>
           <Button color = 'green' text = 'Add' onClick = {onAdd}/>
       </header>
   ) 
}

export default Header