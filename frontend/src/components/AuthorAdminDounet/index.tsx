import React from 'react'
import './index.css'
import { Doughnut} from 'react-chartjs-2'
let DounetColor = ["red", "black", "blue", "#207ac7"]
const donutData = {
	labels: [
		'Data Group 1',
		'Data Group 2',
		'Data Group 3',
		'Data Group 4'
	],
	datasets: [{
        data: [100, 100, 100, 100],
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