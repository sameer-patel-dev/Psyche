import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from "react-vis";

const StudentChart = () => {
  const [data,setData] = useState([])
  const [data1,setData1] = useState([])
  const [data2,setData2] = useState([])
  const [data3,setData3] = useState([])
  const [data4,setData4] = useState([])

  
  // const data1 = [
  //   { x: 1, y: 27 },
  //   { x: 6, y: 24 },
  //   { x: 11, y: 18 },
  //   { x: 16, y: 13 },
  //   { x: 21, y: 10 },
  // ];
   
  
  // const data2 = [
  //   { x: 1, y: 20 },
  //   { x: 6, y: 16 },
  //   { x: 11, y: 14},
  //   { x: 16, y: 13 },
  //   { x: 21, y: 8 },
  // ];

  // const data3 = [
  //   { x: 1, y: 33 },
  //   { x: 6, y: 27},
  //   { x: 11, y: 25 },
  //   { x: 16, y: 22 },
  //   { x: 21, y: 18 },
  // ];

  // const data4 = [
  //   { x: 1, y: 6 },
  //   { x: 6, y: 4 },
  //   { x: 11, y: 5 },
  //   { x: 16, y: 4 },
  //   { x: 21, y: 6 },
  // ];

  useEffect(() => {
    fetch('/studentprofile', {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        setData(result.testDetails)
        let test1 = 0, test2 = 0, test3 = 0, test4 = 0
        let t1 = [], t2 = [], t3 = [], t4 = []
        if(result.testDetails.length > 0) {
            for(var i = 0; i < result.testDetails.length; i++) {
                var testId = result.testDetails[i].testId;
                var score = result.testDetails[i].score;
                if(testId == 1) {
                  test1 = test1 + 1
                  t1.push({x : parseInt(test1),y: parseInt(score)})
                }
                if(testId == 2) {
                  test2 = test2 + 1
                  t2.push({x : parseInt(test2),y: parseInt(score)})
                }
                if(testId == 3) {
                  test3 = test3 + 1
                  t3.push({x : parseInt(test3),y: parseInt(score)})
                }
                if(testId == 4) {
                  test4 = test4 + 1
                  t4.push({x : parseInt(test4),y: parseInt(score)})
                }
            }
            setData1(t1)
            setData2(t2)
            setData3(t3)
            setData4(t4)
        }
    })
},[])
  
  return (
    <main>
        {
            data.length >= 1 ? (
              <div style={{ marginTop: "15px" }}>
                <XYPlot height={400} width={800}  xType="ordinal" yDomain={[0, 54]}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis title="No. of times test taken"/>
                  <YAxis title="Test Scores" />
                  <LineMarkSeries data={data1} color="blue" />

                  <LineMarkSeries data={data2} color="yellow" />

                  <LineMarkSeries data={data3} color="red" />

                  <LineMarkSeries data={data4} color="grey" />

                </XYPlot>
                <div className="graphInfo">
                  <div className="colorBox1"></div>
                  <p>PHQ-9</p>
                  <div className="colorBox2"></div>
                  <p>GAD-7</p>
                  <div className="colorBox3"></div>
                  <p>OCI-R</p>
                  <div className="colorBox4"></div>
                  <p>ISI</p>
                </div>
              </div>
              
            ):
            (
              <div  style={{ marginTop: "15px", fontSize:"20px" }}>
                <br/>
                <h4>You have not taken any Assesments yet.<br/><br/><br/></h4>
                <center>
                <p style={{lineHeight:"1.2"}}>Go to CBT Exercises &gt; Cognitive Mental Health Tests</p> 
                <br/>
                <p style={{lineHeight:"1.2"}}>OR</p> 
                <br/>
                <Link to="/exercise/aspmts"><button className="signin_button">Take Test Now!</button></Link>
                
                </center>
                
              </div>
            )
          }
        </main>
  );
};

export default StudentChart;
