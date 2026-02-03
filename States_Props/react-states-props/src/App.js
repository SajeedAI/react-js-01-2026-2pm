import Student from "./components/Student";

function App() {
 
  return(
    <div>
       <h1>Main Component</h1>
       <Student name="Rahul" course="React"/>
       <Student name="Sai Kiran" course="Node JS"/>
       <Student name="Sai Kumar" course="Angular JS"/>
    </div>
  );
}

export default App;
