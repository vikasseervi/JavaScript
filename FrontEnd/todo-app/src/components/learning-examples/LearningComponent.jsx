import FirstComponent, { FifthComponent, SixComponent } from './FirstComponent'
import SecondComponent from './SecondComponent'
import {SeventhComponent} from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import ForthComponent from './ForthComponent'
import LearningJS from './LearningJS'

export default function LeaningComponent() {
    return (
      <div className="LeaningComponent">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <ForthComponent />
        <FifthComponent />
        <SixComponent />
        <SeventhComponent />
        <LearningJS />
      </div>
    );
  }