import { useContext, useState } from "react"
import { ResultContext } from "../../Contexts/ResultContext"

export default function Result() {
  const { result } = useContext(ResultContext);
  console.log(result)
  return (
    <>
      <h2>Result</h2>
      {result && <DiseaseInformation />}
    </>)
}

function DiseaseInformation() {
  return (
    <div className="m-4">
      <Classification />
      <Information />
    </div >
  )
}

function Classification() {
  const { disease, result } = useContext(ResultContext);
  return <>
    <div className="text-x">Disease - {disease.toLowerCase().split("_").join(" ")}</div>
    <div className="text-l">Chances of disease - {(result.data.confidence * 100).toFixed(2)}%</div >
  </>
}

function Information() {
  const [activeTab, setActiveTab] = useState(0);

  const tabClasses = "w-1/2 text-center cursor-pointer pb-4"
  const tabs = [
    { id: 0, title: "Description" },
    { id: 1, title: "Solutions" },
  ]

  const toggleTabs = val => setActiveTab(val)

  return <>
    <div className="flex mt-10">
      {tabs.map(tab => <h3
        className={`${tabClasses} ${activeTab === tab.id ? "border-b-2" : ""}`}
        key={tab.id}
        onClick={() => toggleTabs(tab.id)}
      >{tab.title}</h3>)}
    </div>

    {activeTab === 0 && <Description />}
    {activeTab === 1 && <Causes />}
  </>
}

function Description() {
  const { description, result } = useContext(ResultContext);

  return <div className="mt-6">
    {description && <>
      <h4>{result.data.class.toLowerCase().split("_").join(" ")}</h4>
      <p className="pt-4">{description}</p>
    </>}

    {!description && <div className="my-10">No description to give right now, may be come back later 🙂</div>}
  </div>
}

function Causes() {
  const { cures } = useContext(ResultContext)
  return <>
    {cures &&
      <ul className="mt-6 pl-4">
        {cures.map((cure, i) => <Cure key={i} cure={cure} />)}
      </ul>
    }
    {!cures && <div className="my-10">No advice to give right now, may be come back later 🙂</div>}
  </>
}

function Cure({ cure }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDesc = () => setIsOpen(prev => !prev)

  return <li className="w-full my-5">
    <h5 className="flex justify-between">
      {cure.solution}
      <span className="cursor-pointer text-2xl" onClick={toggleDesc}>{isOpen ? "—" : "+"}</span>
    </h5>
    {isOpen && <p>{cure.desc}</p>}
  </li>
}