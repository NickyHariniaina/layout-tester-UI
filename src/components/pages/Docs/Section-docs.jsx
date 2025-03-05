import { data } from "./keyboardData.js"
import { KeyboardTemplate } from "./KeyboardTemplate.jsx"

export const SectionDocs = ( { data }) => {
  return <div className="container-fluid"> 
    <KeyboardTemplate 
        img={data.src} 
        name={data.name} 
        hardWord={}
        sameHand={}
        effortUsedOnRow={}
        effort={} />
  </div>
}
