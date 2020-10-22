import React from 'react'
import './index.css'
import { Doughnut} from 'react-chartjs-2'
interface IAuthorAdminDounetProps{
    data : dounetData
}

type dounetData = {
    labels : string [],
    datasets : dataset
}
type dataset = {
    data : number[],
    backgroundColor : string[]
}

let DounetColor = ["red", "blue"]
const donutData = {
	labels: [
		'여자',
		'남자'
	],
	datasets: [{
        data: [80, 100],
        backgroundColor: DounetColor
	}]
};

const donutOptions = {
  responsive: false,
  width:500,
  height:500,
  cutoutPercentage: 80,
};
const AuthorAdminDounet = () => {
    return(
        <div className="author-admin-dougnet-chart">
            <Doughnut
                data = {donutData}
                options= {donutOptions}
            />
        </div>
    )
}

export default AuthorAdminDounet