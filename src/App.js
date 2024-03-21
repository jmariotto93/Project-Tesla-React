import './App.css';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { WorkingHours } from './components/workingHours/WorkingHours';

function App() {
  return (
    <>
      <Header />
      <Section />
      <Contacts subTitle={"Contatos & Endereço"}/>
      <WorkingHours />
      <Footer developer={"Desenvolvedor"} name={"José Mariotto"}/>
      
    </>
  );
}

export default App;
