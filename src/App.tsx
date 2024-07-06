import './App.css';
import { CustomButton } from './components/html/Button';
// import { UserContextProvider } from './components/context/UserContext';
// import { User } from './components/context/User';
// import { Profile } from './components/auth/Profile';
// import { Private } from './components/auth/Private';
// import { List } from './components/generics/List';
// import { RandomNumber } from './components/restriction/RandomNumber';
// import { Toast } from './components/templateLiteral/Toast';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Box } from './components/context/Box';
// import Container from './components/props/Container';
// import Button from './components/props/eventprops/Button';
// import Input from './components/props/eventprops/Input';
// import Counter from './components/Counter'
// import Greeting from './components/props/basicprops/Greeting';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
import Heading from './components/props/props2/Heading';
// import Oscar from './components/props/advanceprops/Oscar';
function App() {

  // const personName = {
  //   first: 'Umme',
  //   last : 'Zaiba',
  // }

  // const nameList =[
  //   {first: 'Umme', last: 'Zaiba'},
  //   {first: 'Bruce', last: 'Wayne'},
  //   {first: 'Lily', last: 'James'}
  // ]

  return (
    <div className="App">
      <CustomButton variant='primary' onClick={()=> console.log('Clicked')} >
        Primary Button
        </CustomButton>
      {/* <Toast position='center'/> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List
        items={[
          { id :1, first: 'Umme', last: 'Zaiba' },
          { id :2, first: 'Bruce', last: 'Wayne' },
          { id :3, first: 'Lily', last: 'James' },
          
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <Private isloggedIn={true} component={Profile}/> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      {/* <Container styles={{ padding: '1rem', border: '1px solid blue'}}/> */}
      {/* <Button handleClick = {(event, id)=> {
        console.log("Button Clicked", event, id);
      }}/> */}
      {/* <Input value='' handleChange={(event)=> console.log(event)}></Input> */}
       {/* <Greeting name ='Zaib' isLoggedin={false}/> */}
      {/* <Greeting name ='Zaib' workingHours={75} isLoggedin={true}/> */}
      {/* <Counter/> */}
      {/* <Person name ={personName}/> */}
      {/* <PersonList names ={nameList}/>   */}
      {/* <Status status = 'error'/> */}
      <Heading>Using the children - Placeholder</Heading>
      {/* <Oscar>
        <Heading>Using the React.ReactNode - Oscar goes to RRR</Heading>
      </Oscar>  */}

    </div>
  );
}

export default App;
