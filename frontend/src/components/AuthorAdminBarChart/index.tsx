import React from 'react'
import './index.css'
import { Bar } from 'react-chartjs-2';

const options = {
    legend: {
        display: false, // label 숨기기
    },
    scales: {
        yAxes: [{
            ticks: { 
                min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
            }
        }]
    },
    maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
}
const AuthorAdminBarChart = () => {
    let calculatedArr = [1,2,3,4,5,6,7,8]

    let rankColor = ["#11b288", "#207ac7", "#207ac7", "#207ac7", "#d6d6d6", "#d6d6d6", "#d6d6d6", "#d6d6d6"]

    const data = {
        labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7' , '#8'],
        datasets: [
          {
            backgroundColor: rankColor,
            borderColor: rankColor,
            borderWidth: 1,
            hoverBackgroundColor: rankColor,
            hoverBorderColor: rankColor,
            data: calculatedArr
          }
        ]
      }; 

    return (
        <div className="author-admin-bar-chart">
            <Bar 
                data={data}

                options={options}
            />
        </div>
    );
}

export default AuthorAdminBarChart
