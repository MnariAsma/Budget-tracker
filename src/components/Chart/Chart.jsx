import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props){
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)//return an array of all values:values
    const maximum=Math.max(...dataPointValues);//extraire tous les elements du tableau et les ajouter en tant qu'argument,la methode max prend en valeur des arguments et retourne la valeur maximale 
    return <div className="chart">
         {props.dataPoints.map((dataPoint)=>(
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximum}
            label={dataPoint.label}/>

         ))}
    </div>
} 